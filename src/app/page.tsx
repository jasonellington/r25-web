"use client";

import { Features } from "@/components/features/features";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Quote } from "@/components/quote/quote";
import { Showcase } from "@/components/showcase/showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Quote />
      <Features />
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <div className="rounded-xl border border-orange-400/40 bg-orange-500/15 px-6 py-5">
          <p className="text-sm font-medium tracking-tight">Hackathon Project Disclaimer</p>
          <p className="text-foreground/70 mt-2 text-xs leading-5 tracking-tight">
            Routine 25 is an open-source hackathon submission for the{" "}
            <a
              href="https://cerebralvalley.ai/e/claude-code-hackathon"
              target="_blank"
              className="underline"
            >
              Build with Opus 4.6
            </a>{" "}
            hackathon. This is not a production application. It is not intended for commercial sale
            or distribution. Testers may access the app via TestFlight for evaluation purposes only.
            We do not collect, sell, or distribute user data. Please be aware that features may be
            incomplete or change without notice.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
