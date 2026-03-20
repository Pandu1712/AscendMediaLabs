const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="font-display text-2xl font-bold text-gradient-brand">Ascend</span>
            <p className="font-body text-xs text-muted-foreground mt-1">Premium Digital Studio</p>
          </div>

          <div className="flex flex-wrap gap-6 font-body text-xs text-muted-foreground uppercase tracking-wider">
            {["React", "TypeScript", "Tailwind CSS", "Fully Responsive"].map((tech) => (
              <span key={tech} className="hover:text-foreground transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ascend Digital Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground italic">
            "We don't build cheap websites. We build websites that make you money."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
