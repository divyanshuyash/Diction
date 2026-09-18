"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

type Moment = {
  src: string;
  alt: string;
};

type SuccessStoryMorphProps = {
  moments: Moment[];
};

type AnimationPhase = "scatter" | "line" | "circle";

type Target = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
};

const CARD_WIDTH = 64;
const CARD_HEIGHT = 90;
const clamp = (value: number) => Math.min(Math.max(value, 0), 1);
const lerp = (start: number, end: number, progress: number) => start * (1 - progress) + end * progress;

export default function SuccessStoryMorph({ moments }: SuccessStoryMorphProps) {
  const containerRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, { amount: 0.2, once: true });
  const repeatedMoments = useMemo(() => Array.from({ length: 20 }, (_, index) => moments[index % moments.length]), [moments]);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const morphProgress = useTransform(scrollYProgress, [0, 0.48], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
  const scrollRotation = useTransform(scrollYProgress, [0.48, 1], [0, 360]);
  const smoothRotation = useSpring(scrollRotation, { stiffness: 40, damping: 20 });
  const contentOpacity = useTransform(smoothMorph, [0.78, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.78, 1], [20, 0]);

  useEffect(() => {
    if (!frameRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });

    observer.observe(frameRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !isInView) return;

    const lineTimer = window.setTimeout(() => setPhase("line"), 500);
    const circleTimer = window.setTimeout(() => setPhase("circle"), 2500);
    return () => {
      window.clearTimeout(lineTimer);
      window.clearTimeout(circleTimer);
    };
  }, [isInView, reduceMotion]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedIndex]);

  useMotionValueEvent(smoothMorph, "change", setMorphValue);
  useMotionValueEvent(smoothRotation, "change", setRotateValue);

  if (!moments.length) return null;

  const width = Math.max(containerSize.width, 320);
  const height = Math.max(containerSize.height, 620);
  const isMobile = width < 768;
  const activePhase = reduceMotion ? "circle" : phase;
  const cardWidth = isMobile ? 52 : CARD_WIDTH;
  const cardHeight = isMobile ? 74 : CARD_HEIGHT;
  const scatterPositions = repeatedMoments.map((_, index) => {
    const angle = (index / repeatedMoments.length) * Math.PI * 2;
    return {
      x: Math.cos(angle * 1.7) * width * 0.66,
      y: Math.sin(angle * 1.3) * height * 0.54,
      rotate: index % 2 === 0 ? -32 : 32,
      scale: 0.65,
      opacity: 0,
    };
  });

  const getTarget = (index: number): Target => {
    if (activePhase === "scatter") return scatterPositions[index];

    if (activePhase === "line") {
      const spacing = cardWidth + 10;
      return {
        x: (index - (repeatedMoments.length - 1) / 2) * spacing,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
      };
    }

    const minDimension = Math.min(width, height);
    const circleRadius = Math.min(minDimension * 0.35, 330);
    const circleAngle = (index / repeatedMoments.length) * 360;
    const circleRadians = (circleAngle * Math.PI) / 180;
    const circle = {
      x: Math.cos(circleRadians) * circleRadius,
      y: Math.sin(circleRadians) * circleRadius,
      rotate: circleAngle + 90,
      scale: 1,
    };

    const baseRadius = Math.min(width, height * 1.5);
    const arcRadius = baseRadius * (isMobile ? 1.35 : 1.08);
    const arcApexY = height * (isMobile ? 0.34 : 0.23);
    const arcCenterY = arcApexY + arcRadius;
    const spreadAngle = isMobile ? 104 : 130;
    const startAngle = -90 - spreadAngle / 2;
    const step = spreadAngle / (repeatedMoments.length - 1);
    const rotationProgress = clamp(rotateValue / 360);
    const currentAngle = startAngle + index * step - rotationProgress * spreadAngle * 0.8;
    const arcRadians = (currentAngle * Math.PI) / 180;
    const arc = {
      x: Math.cos(arcRadians) * arcRadius,
      y: Math.sin(arcRadians) * arcRadius + arcCenterY,
      rotate: currentAngle + 90,
      scale: isMobile ? 1.28 : 1.5,
    };

    return {
      x: lerp(circle.x, arc.x, morphValue),
      y: lerp(circle.y, arc.y, morphValue),
      rotate: lerp(circle.rotate, arc.rotate, morphValue),
      scale: lerp(circle.scale, arc.scale, morphValue),
      opacity: 1,
    };
  };

  return (
    <section ref={containerRef} className="relative h-[175svh] bg-[#fafafa] text-[#202020]" aria-label="Success story gallery">
      <div ref={frameRef} className="sticky top-0 flex h-svh min-h-[620px] w-full items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={activePhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[14ch] text-4xl font-medium tracking-normal md:text-6xl"
          >
            Stories are built in the room.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={activePhase === "circle" && morphValue < 0.5 ? { opacity: 0.55 - morphValue, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-xs font-bold tracking-[0.18em] text-black/50"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="pointer-events-none absolute top-[10%] z-20 flex flex-col items-center px-6 text-center">
          <p className="text-xs font-bold tracking-[0.18em] text-black/45">SUCCESS STORIES</p>
          <h2 className="mt-4 max-w-[16ch] text-3xl font-semibold tracking-normal md:text-5xl">People, rooms and the work between.</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/55 md:text-base">Real conversations, workshops and live moments that turn a point of view into useful work.</p>
        </motion.div>

        <div className="relative z-10 h-full w-full">
          {repeatedMoments.map((moment, index) => {
            const target = getTarget(index);
            const isSelected = selectedIndex === index;
            const selectedScale = Math.min(width / (cardWidth * 1.45), height / (cardHeight * 1.45), isMobile ? 3 : 3.6);
            const cardTarget = isSelected ? { x: 0, y: 0, rotate: 0, scale: selectedScale, opacity: 1, zIndex: 40 } : { ...target, zIndex: 10 };

            return (
              <motion.button
                key={`${moment.src}-${index}`}
                type="button"
                aria-label={isSelected ? `Close image: ${moment.alt}` : `Open image: ${moment.alt}`}
                className="absolute left-1/2 top-1/2 overflow-hidden rounded-xl border border-black/10 bg-gray-200 shadow-lg"
                style={{ width: cardWidth, height: cardHeight, marginLeft: -cardWidth / 2, marginTop: -cardHeight / 2, perspective: "1000px" }}
                animate={cardTarget}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
                whileHover={reduceMotion || isSelected ? undefined : { scale: target.scale * 1.08, zIndex: 30 }}
                onClick={() => setSelectedIndex(isSelected ? null : index)}
              >
                <motion.span className="relative block h-full w-full" style={{ transformStyle: "preserve-3d" }} whileHover={isSelected || reduceMotion ? undefined : { rotateY: 180 }} transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}>
                  <span className="absolute inset-0 overflow-hidden rounded-xl" style={{ backfaceVisibility: "hidden" }}>
                    <Image src={moment.src} alt={moment.alt} fill className="object-cover" sizes={`${cardWidth}px`} />
                  </span>
                  <span className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-[#1e1e1e] p-3 text-center text-white" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <span className="text-[8px] font-bold tracking-[0.16em] text-[#b68cff]">STORY</span>
                    <span className="mt-1 text-[10px] font-medium">Open</span>
                  </span>
                </motion.span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
