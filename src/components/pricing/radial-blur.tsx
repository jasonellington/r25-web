import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function RadialBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 isolate -z-10 h-1/2 w-full",
        className,
      )}
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.05) 40%, transparent 70%)",
      }}
    />
  );
}
