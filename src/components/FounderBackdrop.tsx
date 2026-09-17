import Image from "next/image";

type FounderBackdropProps = {
  src: string;
  alt: string;
  align?: "left" | "right";
  priority?: boolean;
};

export default function FounderBackdrop({ src, alt, align = "right", priority = false }: FounderBackdropProps) {
  const side = align === "right" ? "right-0" : "left-0";
  const fade = align === "right"
    ? "linear-gradient(to left, black 0%, black 76%, transparent 100%)"
    : "linear-gradient(to right, black 0%, black 76%, transparent 100%)";

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        className="scale-110 object-cover object-center blur-2xl saturate-[0.75]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#050505]/38" />
      <div
        className={`absolute inset-y-0 ${side} w-full sm:w-[78%] lg:w-[62%]`}
        style={{ WebkitMaskImage: fade, maskImage: fade }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(min-width: 1024px) 62vw, (min-width: 640px) 78vw, 100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/62 to-black/16" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-transparent to-black/36" />
    </div>
  );
}
