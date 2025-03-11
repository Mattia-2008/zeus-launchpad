
import { GlassCard } from "./ui-custom/GlassCard";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { BarChart3, Cloud, Globe, Lock, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Cloud className="h-8 w-8 text-zeus-500" />,
      title: "Cloud Integration",
      description:
        "Seamlessly connect with leading cloud platforms for maximum flexibility and scalability.",
    },
    {
      icon: <Lock className="h-8 w-8 text-zeus-500" />,
      title: "Advanced Security",
      description:
        "Enterprise-grade security with end-to-end encryption and compliance with global standards.",
    },
    {
      icon: <Zap className="h-8 w-8 text-zeus-500" />,
      title: "Lightning Performance",
      description:
        "Optimized code and architecture ensures blazing-fast performance even under heavy loads.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-zeus-500" />,
      title: "Real-time Analytics",
      description:
        "Gain actionable insights with powerful analytics tools and customizable dashboards.",
    },
    {
      icon: <Globe className="h-8 w-8 text-zeus-500" />,
      title: "Global Reach",
      description:
        "Distributed infrastructure ensures low latency access from anywhere in the world.",
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-zeus-radial opacity-50"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zeus-radial opacity-40"></div>
      </div>

      <div className="zeus-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text={<span className="inline-block text-zeus-600 font-medium mb-3">What We Offer</span>}
            animation="fade-up"
          />
          <AnimatedText
            text={<h2 className="zeus-title mb-6">Cutting-Edge <span className="text-gradient">Features</span></h2>}
            animation="fade-up"
            delay={100}
          />
          <AnimatedText
            text={
              <p className="zeus-paragraph">
                Our platform is built with the latest technology to provide you with powerful,
                scalable, and secure solutions for your business needs.
              </p>
            }
            animation="fade-up"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedText
              key={index}
              text={
                <GlassCard className="h-full p-6 transition-all duration-300 hover:translate-y-[-8px]">
                  <div className="mb-5 bg-zeus-100 w-16 h-16 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              }
              animation="fade-up"
              delay={300 + index * 100}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <AnimatedText
            text={
              <GlassCard className="p-8 md:p-10 text-center" intensity="medium">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Ready to transform your business?
                </h3>
                <p className="zeus-paragraph mb-8 max-w-2xl mx-auto">
                  Join thousands of forward-thinking companies that are already using 
                  Zeus to power their digital transformation.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                  {["Acme Inc.", "GlobalTech", "InnovateCo", "TechGiant"].map((company, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-zeus-100 rounded-full mb-3 flex items-center justify-center">
                        <span className="text-zeus-600 font-bold">{company.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium">{company}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            }
            animation="fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
