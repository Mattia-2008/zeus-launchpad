
import { CheckCircle } from "lucide-react";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { GlassCard } from "./ui-custom/GlassCard";

const About = () => {
  const valueProps = [
    {
      title: "Innovazione",
      description: "Utilizziamo tecnologie all'avanguardia per il monitoraggio e l'analisi dei consumi energetici.",
    },
    {
      title: "Affidabilità",
      description: "Sensori di alta qualità e algoritmi testati garantiscono dati precisi e consigli affidabili.",
    },
    {
      title: "Semplicità",
      description: "Interfacce intuitive e report chiari rendono facile comprendere e applicare i nostri suggerimenti.",
    },
    {
      title: "Sostenibilità",
      description: "Il nostro obiettivo è ridurre l'impatto ambientale attraverso l'efficientamento energetico.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-zeus-50/50 relative">
      <div className="zeus-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-zeus-600 font-medium mb-3">
            <AnimatedText text="La Nostra Missione" animation="fade-up" />
          </div>
          <h2 className="zeus-title mb-6">
            <AnimatedText text="Rivoluzionare l'Efficienza " animation="fade-up" delay={100} />
            <span className="text-gradient">
              <AnimatedText text="Energetica" animation="fade-up" delay={150} />
            </span>
          </h2>
          <div className="zeus-paragraph">
            <AnimatedText
              text="In Zeus Energy, siamo dedicati a creare soluzioni innovative che aiutino aziende e privati a ottimizzare i consumi energetici. La nostra missione è combinare tecnologie avanzate di monitoraggio e intelligenza artificiale per affrontare le sfide energetiche moderne."
              animation="fade-up"
              delay={200}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">
              <AnimatedText text="Perché Scegliere Zeus Energy?" animation="slide-in-left" />
            </h3>

            <div className="space-y-4">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-start">
                  <AnimatedText
                    text={prop.title}
                    animation="slide-in-left"
                    delay={100 * (index + 1)}
                    className="hidden"
                  />
                  <CheckCircle className="h-6 w-6 text-zeus-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lg">{prop.title}</h4>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <AnimatedText
                text="La nostra visione"
                animation="fade-in"
                className="hidden"
              />
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
                    <h4 className="text-lg font-bold text-foreground mb-2">La Nostra Visione</h4>
                    <p className="text-muted-foreground">
                      Creare un futuro dove la tecnologia ottimizza l'uso dell'energia, riducendo sprechi e impatto ambientale per un mondo più sostenibile.
                    </p>
                  </div>
                </div>
              </GlassCard>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-zeus-200 rounded-full animate-pulse-gentle"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zeus-300 rounded-full opacity-50 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
