
import { GlassCard } from "./ui-custom/GlassCard";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { BarChart3, Cloud, Globe, Lock, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Cloud className="h-8 w-8 text-zeus-500" />,
      title: "Monitoraggio Energetico",
      description:
        "Sensori avanzati che tracciano in tempo reale il consumo di energia, gas e acqua per un'analisi precisa.",
    },
    {
      icon: <Lock className="h-8 w-8 text-zeus-500" />,
      title: "Sicurezza Dati",
      description:
        "Protezione completa dei dati con crittografia end-to-end e conformità agli standard globali.",
    },
    {
      icon: <Zap className="h-8 w-8 text-zeus-500" />,
      title: "Ottimizzazione Consumi",
      description:
        "Algoritmi AI che analizzano i pattern di consumo e suggeriscono strategie di risparmio personalizzate.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-zeus-500" />,
      title: "Analytics in Tempo Reale",
      description:
        "Dashboard intuitive per visualizzare i consumi e identificare opportunità di risparmio immediate.",
    },
    {
      icon: <Globe className="h-8 w-8 text-zeus-500" />,
      title: "Sostenibilità Globale",
      description:
        "Contribuisci alla riduzione dell'impatto ambientale attraverso un consumo energetico più efficiente.",
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
          <div className="inline-block text-zeus-600 font-medium mb-3">
            <AnimatedText text="I Nostri Servizi" animation="fade-up" />
          </div>
          <h2 className="zeus-title mb-6">
            <AnimatedText 
              text="Tecnologie" 
              animation="fade-up" 
              delay={100} 
            />
            {" "}
            <span className="text-gradient">
              <AnimatedText 
                text="All'Avanguardia" 
                animation="fade-up" 
                delay={150} 
              />
            </span>
          </h2>
          <p className="zeus-paragraph">
            <AnimatedText
              text="La nostra piattaforma utilizza l'intelligenza artificiale per analizzare i consumi energetici e proporre soluzioni personalizzate per ridurre gli sprechi e ottimizzare i costi."
              animation="fade-up"
              delay={200}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="h-full">
              <AnimatedText
                text={feature.title}
                animation="fade-up"
                delay={300 + index * 100}
                className="hidden"
              />
              <GlassCard className="h-full p-6 transition-all duration-300 hover:translate-y-[-8px]">
                <div className="mb-5 bg-zeus-100 w-16 h-16 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div>
            <AnimatedText
              text="Pronto per trasformare il tuo consumo energetico?"
              animation="fade-in"
              className="hidden"
            />
            <GlassCard className="p-8 md:p-10 text-center" intensity="medium">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Pronto per trasformare il tuo consumo energetico?
              </h3>
              <p className="zeus-paragraph mb-8 max-w-2xl mx-auto">
                Unisciti a centinaia di aziende lungimiranti che stanno già utilizzando
                Zeus Energy per ottimizzare i propri consumi e ridurre l'impatto ambientale.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {["Industria Manifatturiera", "Catene Alberghiere", "Centri Commerciali", "Aziende Sanitarie"].map((company, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-zeus-100 rounded-full mb-3 flex items-center justify-center">
                      <span className="text-zeus-600 font-bold">{company.charAt(0)}</span>
                    </div>
                    <span className="text-sm font-medium">{company}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
