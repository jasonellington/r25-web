import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MicIcon, PlayIcon, SmartphoneIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <MicIcon size={20} />,
    title: "AI Voice Coach",
    description:
      "Talk to your AI coach anytime — get guided meditations, adjust your schedule, or ask for help with any activity.",
    image: "/ai-coach.png",
  },
  {
    icon: <PlayIcon size={20} />,
    title: "Auto-Advancing Routines",
    description:
      "Your routine auto-advances from one activity to the next. A full-screen timer keeps you on track.",
    image: "/activity-tracking.png",
  },
  {
    icon: <SmartphoneIcon size={20} />,
    title: "Live Activity Tracking",
    description:
      "See your current activity in the Dynamic Island and on your Lock Screen — no need to open the app.",
    image: "/lock-screen.png",
  },
  {
    icon: <CalendarIcon size={20} />,
    title: "Smart Scheduling",
    description:
      "Set your deadline and we work backwards — calculating your wake-up time and fitting everything in.",
    image: "/smart-scheduling.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Everything you need to<div className="text-muted-foreground">own your mornings</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Built for people who want structure without the effort — just press play and your morning runs itself.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
