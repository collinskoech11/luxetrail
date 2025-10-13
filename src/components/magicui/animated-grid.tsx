import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

interface AnimatedGridProps {
  className?: string;
}

export const AnimatedGrid = ({ className }: AnimatedGridProps) => {
  const generateSquares = () => {
    const squares: React.ReactElement[] = [];
    for (let i = 0; i < 30; i++) {
      squares.push(
        <div
          key={i}
          className="bg-slate-800 h-12 w-12 rounded-lg"
        />,
      );
    }
    return squares;
  };

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl",
        className,
      )}
    >
      <div className="absolute inset-0 h-full w-full bg-background [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
        <div className="grid h-[300%] w-full animate-grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {generateSquares()}
        </div>
      </div>
      
    </div>
  );
};

export default AnimatedGrid;
