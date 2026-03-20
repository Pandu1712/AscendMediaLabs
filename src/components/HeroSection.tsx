import { Suspense } from "react";
import { motion } from "framer-motion";
import { Zap, Rocket, Target, Smartphone } from "lucide-react";
import Scene3D from "./Scene3D";

const stats = [
  { icon: Zap, text: "Starting from ₹5000", sub: "Domain + Website + Setup" },
  { icon: Rocket, text: "60+ Websites", sub: "Delivered Successfully" },
  { icon: Target, text: "Conversion Focused", sub: "Not Just Looks" },
  { icon: Smartphone, text: "100% Responsive", sub: "All Devices" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="container mx-auto relative z-10 px-4 md:px-8 pt-28 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-secondary mb-6"
          >
            Premium Digital Studio
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            We Don't Just Build Websites —{" "}
            <span className="text-gradient-brand">We Build Digital Growth Systems</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Premium websites, powerful branding, and growth-driven digital solutions
            for businesses that want to stand out.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a href="#contact" className="btn-primary text-base">Get Started</a>
            <a href="#projects" className="btn-outline text-base">View Projects</a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="glass-card rounded-2xl p-5 text-center group"
              >
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-display font-bold text-foreground text-sm">{stat.text}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
