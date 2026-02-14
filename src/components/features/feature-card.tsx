import { FeatureDetails } from "@/components/features/feature-details";
import type { Feature } from "@/components/features/features";
import Image from "next/image";

type FeatureCardProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureCard({ feature, isActive }: FeatureCardProps) {
  return (
    <div className="flex w-[var(--carousel-item-width)] flex-col items-center gap-5 px-2 py-6">
      <FeatureDetails feature={feature} isActive={isActive} />
      <div className="bg-card relative w-full overflow-hidden rounded-lg border p-8 pb-0">
        <Image src={feature.image} alt="App Image" width={304} height={445} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>
    </div>
  );
}
