
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GlassCard } from "./ui-custom/GlassCard";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-zeus-radial opacity-70 animate-pulse-gentle"></div>
        <div className="absolute -bottom-10 -left-16 w-80 h-80 bg-zeus-radial opacity-60 animate-pulse-gentle"></div>
      </div>

      <div className="zeus-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="mb-4 inline-flex items-center rounded-full bg-zeus-100 px-3 py-1 text-sm font-medium text-zeus-800">
                <Zap className="mr-1 h-3 w-3" />
                <span>Efficienza energetica intelligente</span>
              </div>
              
              <h1 className={`zeus-title mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
                <span className="block">Ottimizza i consumi con</span>
                <span className="text-gradient font-extrabold">Zeus Energy</span>
              </h1>
              
              <div className="zeus-paragraph mb-8 max-w-lg mx-auto lg:mx-0">
                <AnimatedText
                  text="Combiniamo sensori avanzati e intelligenza artificiale per analizzare i tuoi consumi energetici e fornirti soluzioni personalizzate per ridurre gli sprechi e ottimizzare i costi."
                  animation="fade-in"
                  delay={300}
                />
              </div>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
                <Button size="lg" className="rounded-full bg-zeus-600 hover:bg-zeus-700 text-white shadow-zeus-soft hover:shadow-zeus-glow">
                  Inizia Ora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-zeus-200 hover:bg-zeus-50">
                  Scopri di più
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              <GlassCard
                className="p-3 md:p-6 relative z-10 animate-float"
                intensity="medium"
              >
                <div className="relative rounded-lg overflow-hidden shadow-inner">
                  <div className="aspect-[16/9] w-full max-w-lg bg-zeus-gradient rounded-lg flex items-center justify-center">
                    <div className="relative transform">
                      <div className="absolute -inset-0.5 bg-zeus-gradient rounded-full blur opacity-70 animate-spin-slow"></div>
                      <div className="relative bg-white p-6 rounded-full shadow-lg">
                        <svg
                          width="120"
                          height="80"
                          viewBox="0 0 512 512"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-20 h-20"
                        >
                          <path
                            d="M256 144L416 368H96L256 144Z"
                            fill="url(#paint0_linear)"
                            stroke="url(#paint1_linear)"
                            strokeWidth="16"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear"
                              x1="256"
                              y1="144"
                              x2="256"
                              y2="368"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#006ACA" />
                              <stop offset="1" stopColor="#36A4FA" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear"
                              x1="256"
                              y1="144"
                              x2="256"
                              y2="368"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#0C87EB" />
                              <stop offset="1" stopColor="#7CC2FD" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zeus-600 rounded-full opacity-20 animate-pulse-gentle"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-zeus-400 rounded-full opacity-20 animate-float"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "30%", label: "Risparmio Medio" },
            { value: "99.9%", label: "Affidabilità" },
            { value: "24/7", label: "Monitoraggio" },
            { value: "100+", label: "Installazioni" },
          ].map((stat, index) => (
            <div key={index} className="h-full">
              <AnimatedText
                text={stat.value}
                animation="fade-up"
                delay={600 + index * 100}
                className="hidden"
              />
              <GlassCard className="h-full p-6 text-center" intensity="light">
                <p className="text-zeus-600 text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
