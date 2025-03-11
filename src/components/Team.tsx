
import { GlassCard } from "./ui-custom/GlassCard";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Former tech lead at Google with 15+ years of experience in building scalable systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      bio: "MIT graduate with expertise in AI and machine learning. Led engineering teams at top tech firms.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Designer",
      bio: "Award-winning designer with a passion for creating intuitive and beautiful user experiences.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Olivia Martinez",
      role: "VP of Product",
      bio: "Product strategist with experience at startups and enterprise companies. MBA from Stanford.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];

  const socialIcons = [
    { Icon: Twitter, label: "Twitter" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Github, label: "GitHub" },
    { Icon: Mail, label: "Email" },
  ];

  return (
    <section id="team" className="section-padding bg-zeus-50/50 relative">
      <div className="zeus-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="Our Team"
            animation="fade-up"
          />
          <AnimatedText
            text={<h2 className="zeus-title mb-6">Meet the <span className="text-gradient">Visionaries</span></h2>}
            animation="fade-up"
            delay={100}
          />
          <AnimatedText
            text={
              <p className="zeus-paragraph">
                Our team of experts brings together decades of experience in technology,
                design, and business strategy to create exceptional products.
              </p>
            }
            animation="fade-up"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedText
              key={index}
              text={
                <GlassCard className="h-full flex flex-col" intensity="light">
                  <div className="relative">
                    <div className="rounded-t-xl overflow-hidden aspect-[3/4]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 rounded-t-xl"></div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-zeus-600 font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                  <div className="p-4 border-t border-border flex justify-center space-x-4">
                    {socialIcons.map(({ Icon, label }, iconIndex) => (
                      <button
                        key={iconIndex}
                        aria-label={label}
                        className="p-2 text-muted-foreground hover:text-zeus-600 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </GlassCard>
              }
              animation="fade-up"
              delay={300 + index * 100}
              className="h-full"
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <AnimatedText
            text={
              <div>
                <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                <p className="zeus-paragraph max-w-2xl mx-auto mb-6">
                  We're always looking for talented individuals to join our team.
                  Check out our open positions and apply today.
                </p>
                <a
                  href="#careers"
                  className="inline-flex items-center text-zeus-600 font-medium hover:text-zeus-700 transition-colors"
                >
                  View Open Positions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            }
            animation="fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
