import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Link
          href="https://cerebralvalley.ai/e/claude-code-hackathon"
          target="_blank"
          className="rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-medium tracking-tight text-orange-600 transition-colors hover:bg-orange-500/20 sm:text-sm"
        >
          An entry in the <span className="font-semibold">Build with Opus 4.6</span> Hackathon
        </Link>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Reclaim Your Morning<span className="text-muted-foreground block">Build Better Habits.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Routine 25 is the guidance you&apos;ve always wanted to make your morning intentional, not chaotic. Get an hour back in your day.
        </p>
        <Button className="mb-10 w-fit" size="lg" asChild>
          <Link href="#features">Learn More</Link>
        </Button>
        <div className="relative">
          <Image src="/hero-image.png" alt="Routine 25 app screenshot" width={380} height={556} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </div>
  );
}
