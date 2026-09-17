import HomeFounderHero from "@/components/HomeFounderHero";
import HomeShowcase from "@/components/HomeShowcase";

export default function Home() {
  return (
    <main className="min-h-svh overflow-x-clip bg-black text-white">
      <HomeFounderHero />
      <HomeShowcase />
    </main>
  );
}
