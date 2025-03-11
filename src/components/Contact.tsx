
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "./ui-custom/GlassCard";
import { AnimatedText } from "./ui-custom/AnimatedText";
import { Check, MailIcon, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5 text-zeus-500" />,
      title: "Email",
      content: "hello@zeus-tech.com",
      link: "mailto:hello@zeus-tech.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-zeus-500" />,
      title: "Phone",
      content: "+1 (555) 000-0000",
      link: "tel:+15550000000",
    },
    {
      icon: <MapPin className="h-5 w-5 text-zeus-500" />,
      title: "Office",
      content: "123 Innovation Way, Tech City, CA 94103",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-zeus-radial opacity-30"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-zeus-radial opacity-30"></div>
      </div>

      <div className="zeus-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text={<span className="inline-block text-zeus-600 font-medium mb-3">Get In Touch</span>}
            animation="fade-up"
          />
          <AnimatedText
            text={<h2 className="zeus-title mb-6">Ready to <span className="text-gradient">Transform</span> Your Business?</h2>}
            animation="fade-up"
            delay={100}
          />
          <AnimatedText
            text={
              <p className="zeus-paragraph">
                Have questions about our products or services? Contact us today and one of our 
                team members will get back to you as soon as possible.
              </p>
            }
            animation="fade-up"
            delay={200}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <AnimatedText
              text={
                <GlassCard className="p-6 md:p-8" intensity="medium">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="bg-white/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="bg-white/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-white/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-zeus-600 hover:bg-zeus-700 text-white"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : isSubmitted ? (
                        <span className="flex items-center justify-center">
                          <Check className="mr-2 h-4 w-4" />
                          Sent!
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </GlassCard>
              }
              animation="fade-in"
            />
          </div>

          <div className="space-y-6">
            <AnimatedText
              text={
                <GlassCard className="p-6" intensity="light">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 mt-1">
                          <div className="bg-zeus-100 w-8 h-8 rounded-full flex items-center justify-center">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium">{info.title}</h4>
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-zeus-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              }
              animation="slide-in-right"
            />
            
            <AnimatedText
              text={
                <GlassCard className="p-6" intensity="light">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-muted-foreground">Closed</span>
                    </li>
                  </ul>
                </GlassCard>
              }
              animation="slide-in-right"
              delay={200}
            />
            
            <AnimatedText
              text={
                <GlassCard className="p-6" intensity="light">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {["twitter", "facebook", "instagram", "linkedin"].map((social, index) => (
                      <a
                        key={index}
                        href={`https://${social}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zeus-100 w-10 h-10 rounded-full flex items-center justify-center text-zeus-600 hover:bg-zeus-200 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </GlassCard>
              }
              animation="slide-in-right"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
