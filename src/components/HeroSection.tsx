import { motion } from "framer-motion";
import { Zap, Rocket, Target, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Zap, text: "Starting from ₹5000", sub: "Domain + Website + Setup" },
  { icon: Rocket, text: "60+ Websites", sub: "Delivered Successfully" },
  { icon: Target, text: "Conversion Focused", sub: "Not Just Looks" },
  { icon: Smartphone, text: "100% Responsive", sub: "All Devices" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-8 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-gold mb-6">
              Premium Digital Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            We Don't Just Build Websites —{" "}
            <span className="text-gradient-gold">We Build Digital Growth Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Premium websites, powerful branding, and growth-driven digital solutions
            for businesses that want to stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href="#contact" className="btn-premium text-base">Get Started</a>
            <a href="#projects" className="btn-outline-premium text-base">View Projects</a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="font-display font-bold text-foreground text-sm">{stat.text}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
