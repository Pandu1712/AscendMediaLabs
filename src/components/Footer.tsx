import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="gradient-gold py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-bold text-primary-foreground">Ascend</span>
            <p className="font-body text-sm text-primary-foreground/60 mt-1">
              Premium Digital Studio
            </p>
          </div>

          <div className="flex flex-wrap gap-6 font-body text-sm text-primary-foreground/60">
            {["React", "TypeScript", "Tailwind CSS", "Fully Responsive"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2 }}
                className="hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Ascend Digital Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/60 mt-2 italic">
            "We don't build cheap websites. We build websites that make you money."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
