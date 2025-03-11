
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "Documentation", href: "#docs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Support", href: "#support" },
        { name: "Community", href: "#community" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
        { name: "Security", href: "#security" },
        { name: "Cookies", href: "#cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-zeus-900 text-white pt-20 pb-10">
      <div className="zeus-container">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-3">
            <div className="mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-zeus-200 to-zeus-400 bg-clip-text text-transparent">
                ZEUS
              </span>
            </div>
            <p className="text-zeus-100/80 mb-6 max-w-md">
              Empowering businesses with innovative technology solutions that drive growth 
              and transformation in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-zeus-800/50 border-zeus-700 text-white placeholder:text-zeus-400/50 h-11"
                />
              </div>
              <Button className="bg-zeus-500 hover:bg-zeus-600 text-white h-11 font-medium">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footerLinks.map((group, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-lg mb-4 text-zeus-100">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-zeus-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-zeus-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Zeus Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="text-zeus-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
