import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface AnimatedGridPatternProps {
  className?: string;
  maxOpacity?: number;
  minOpacity?: number;
  numSquares?: number;
}

export function AnimatedGridPattern({
  className,
  maxOpacity = 0.5,
  minOpacity = 0,
  numSquares = 30,
}: AnimatedGridPatternProps) {
  const generateSquares = useMemo(() => {
    return Array.from({ length: numSquares }).map((_, i) => {
      const delay = `${Math.random() * 1.5}s`;
      const duration = `${Math.random() * 2 + 1}s`;

      return (
        <div
          key={i}
          className="animate-fade-in"
          style={
            {
              "--max-opacity": maxOpacity,
              "--min-opacity": minOpacity,
              animationDelay: delay,
              animationDuration: duration,
            } as React.CSSProperties
          }
        />
      );
    });
  }, [numSquares, maxOpacity, minOpacity]);

  return (
    <div
      className={cn(
        "pointer-events-none relative flex h-full w-full items-center justify-center overflow-hidden",
        "[--max-opacity:0.5] [--min-opacity:0] [--square-bg:radial-gradient(circle,rgba(var(--primary-rgb),0.8)_0%,transparent_80%)]",
        "bg-[linear-gradient(to_right,theme(colors.slate.950)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.950)_1px,transparent_1px)] bg-[size:2rem_2rem]",
        "[mask-image:radial-gradient(ellipse_at_center,white,transparent_50%)]",
        className,
      )}
    >
      <div
        className="absolute inset-0 grid h-full w-full grid-cols-10 grid-rows-10"
        style={{
          gridTemplateColumns: `repeat(${Math.ceil(
            Math.sqrt(numSquares),
          )}, 1fr)`,
          gridTemplateRows: `repeat(${Math.ceil(
            Math.sqrt(numSquares),
          )}, 1fr)`,
        }}
      >
        {generateSquares}
      </div>
    </div>
  );
}

export default AnimatedGridPattern;
