
import { CheckCircle } from "lucide-react";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { GlassCard } from "./ui-custom/GlassCard";

const About = () => {
  const valueProps = [
    {
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible.",
    },
    {
      title: "Reliability",
      description: "Built on a foundation of rock-solid infrastructure and thorough testing.",
    },
    {
      title: "Simplicity",
      description: "Powerful functionality wrapped in intuitive, easy-to-use interfaces.",
    },
    {
      title: "Security",
      description: "Your data is protected with industry-leading encryption and protocols.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-zeus-50/50 relative">
      <div className="zeus-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text={<span className="inline-block text-zeus-600 font-medium mb-3">Our Mission</span>}
            animation="fade-up"
          />
          <AnimatedText
            text={<h2 className="zeus-title mb-6">Revolutionizing Technology <span className="text-gradient">With Purpose</span></h2>}
            animation="fade-up"
            delay={100}
          />
          <AnimatedText
            text={<p className="zeus-paragraph">At Zeus, we're dedicated to creating innovative solutions that empower businesses to thrive in the digital age. Our mission is to combine cutting-edge technology with elegant, intuitive design to solve complex challenges.</p>}
            animation="fade-up"
            delay={200}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <AnimatedText
              text={<h3 className="text-2xl font-bold mb-6">Why Choose Zeus?</h3>}
              animation="slide-in-left"
            />

            <div className="space-y-4">
              {valueProps.map((prop, index) => (
                <AnimatedText
                  key={index}
                  text={
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-zeus-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-lg">{prop.title}</h4>
                        <p className="text-muted-foreground">{prop.description}</p>
                      </div>
                    </div>
                  }
                  animation="slide-in-left"
                  delay={100 * (index + 1)}
                />
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <AnimatedText
              text={
                <div className="relative">
                  <GlassCard
                    className="p-6 relative z-10"
                    intensity="medium"
                  >
                    <div className="aspect-square bg-zeus-gradient rounded-lg flex items-center justify-center">
                      <div className="w-4/5 h-4/5 bg-white/90 rounded-lg shadow-lg flex flex-col justify-center items-center p-8 text-center">
                        <div className="mb-4 w-16 h-16 bg-zeus-100 rounded-full flex items-center justify-center">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                              stroke="#0C87EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 22V11"
                              stroke="#0C87EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 7L12 11"
                              stroke="#0C87EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 7L12 11"
                              stroke="#0C87EB"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2">Our Vision</h4>
                        <p className="text-muted-foreground">
                          To create a world where technology elevates human potential and makes the impossible, possible.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-zeus-200 rounded-full animate-pulse-gentle"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zeus-300 rounded-full opacity-50 animate-float"></div>
                </div>
              }
              animation="fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
