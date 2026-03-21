import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 md:py-10 px-6 md:px-12 border-t border-white/10 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex flex-col items-center md:items-start gap-2 mb-2 hover:opacity-90 transition-opacity">
              <img src="/logo.png" alt="Ascend Media Labs" className="h-24 w-24 md:h-32 md:w-32 object-cover rounded-full shadow-lg shadow-secondary/10 border-2 border-white/5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="font-display text-3xl font-bold text-gradient-brand hidden">Ascend Media Labs</span>
            </a>
            <p className="font-body text-sm text-muted-foreground mt-2 max-w-sm">
              Premium Digital Studio building scalable, revenue-generating digital experiences.
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center md:justify-end">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary hover:border-secondary/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-foreground/80 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 font-body text-xs text-muted-foreground uppercase tracking-wider mb-8">
          {["React", "TypeScript", "Tailwind CSS", "Fully Responsive"].map((tech) => (
            <span key={tech} className="hover:text-foreground transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ascend Media Labs. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground italic text-center md:text-right">
            "We don't build cheap websites. We build websites that make you money."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
