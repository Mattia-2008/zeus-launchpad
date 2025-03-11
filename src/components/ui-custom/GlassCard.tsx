
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, intensity = "medium", hover = true, ...props }, ref) => {
    const intensityStyles = {
      light: "bg-white/40 backdrop-blur-sm border border-white/30",
      medium: "bg-white/60 backdrop-blur-md border border-white/40",
      heavy: "bg-white/80 backdrop-blur-lg border border-white/50",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl shadow-zeus-soft",
          intensityStyles[intensity],
          hover && "transition-all duration-300 hover:shadow-zeus-glow",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
