import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Scene3D from "./Scene3D";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } },
};

const stats = [
  { value: "60+", label: "Projects Delivered" },
  { value: "₹5K", label: "Starting Price" },
  { value: "100%", label: "Responsive Design" },
  { value: "24/7", label: "Ongoing Support" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, hsl(var(--royal-blue)), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, hsl(var(--deep-gold)), transparent 70%)" }} />

      {/* 3D Scene - subtle background */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <div className="container mx-auto relative z-10 px-6 md:px-12 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">
              Digital Growth Studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground mb-8"
          >
            We Build
            <br />
            <span className="text-gradient-brand">Digital Growth</span>
            <br />
            Systems.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            Premium websites, powerful branding, and growth-driven digital 
            solutions for businesses that want to dominate their market.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-20">
            <a href="#contact" className="group btn-primary text-base inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="btn-outline text-base">
              View Our Work
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="min-w-[120px]">
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
