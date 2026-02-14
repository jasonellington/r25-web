import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function BackgroundBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 -z-10 h-full w-full",
        className,
      )}
      style={{
        background:
          "radial-gradient(ellipse 150% 100% at 50% -20%, rgba(245, 130, 0, 0.8) 0%, rgba(245, 158, 11, 0.5) 20%, rgba(251, 191, 36, 0.3) 40%, rgba(245, 158, 11, 0.12) 60%, rgba(245, 158, 11, 0.04) 80%, transparent 100%)",
      }}
    />
  );
}
