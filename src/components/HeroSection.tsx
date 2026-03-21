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
    <section id="home" className="relative md:min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden bg-background">
      {/* 3D Scene takes full focus */}

      {/* 3D Scene - subtle background */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

        <div className="container mx-auto relative z-10 px-6 md:px-12 pt-24 pb-10 md:py-0">
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
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-8 text-shadow-sm"
          >
            We Build
            <br />
            <span className="italic text-gradient-brand drop-shadow-[0_0_25px_rgba(255,165,0,0.3)] whitespace-nowrap">Digital Growth Systems.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base md:text-xl text-muted-foreground max-w-xl mb-8 md:mb-12 leading-relaxed"
          >
            Your brand deserves more than a website — it deserves a digital empire.
            We craft experiences that captivate, convert, and command authority.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10 relative z-20">
            <a href="#contact" className="group btn-primary glow-blue text-base inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="btn-outline hover:glow-gold text-base backdrop-blur-sm bg-white/5">
              View Our Work
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-5 border-t border-border pt-6"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display text-2xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
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
