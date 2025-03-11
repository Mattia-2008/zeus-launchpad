
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  threshold?: number;
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  duration?: number;
}

export function AnimatedText({
  text,
  className,
  once = true,
  threshold = 0.1,
  animation = "fade-up",
  delay = 0,
  duration = 500,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-in-left": "-translate-x-8 opacity-0",
    "slide-in-right": "translate-x-8 opacity-0",
  };

  return (
    <div ref={ref} className={className}>
      <div
        className={cn(
          "transition-all",
          isVisible ? "" : animationClasses[animation]
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        {text}
      </div>
    </div>
  );
}
