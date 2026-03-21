import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-14 md:py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-border" />
      
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">About Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-8">
              Built on Passion.
              <br />
              <span className="text-gradient-brand drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">Driven by Results.</span>
            </h2>

            {/* Mission & Vision */}
            <div className="space-y-6 mt-12">
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Our Mission</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  To help businesses ascend digitally with powerful, affordable, and result-driven solutions.
                </p>
              </div>
              <div className="border-l-2 border-deep-gold pl-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">Our Vision</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  To become a trusted digital partner for growing brands across India and beyond.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6 font-body text-muted-foreground leading-relaxed"
          >
            <p className="text-lg">
              We started with a simple vision — to create digital experiences that actually 
              deliver results, not just designs.
            </p>
            <p>
              With hands-on experience across <strong className="text-foreground font-semibold">60+ real-world projects</strong>, 
              we've worked closely with businesses, startups, and institutions to understand one core truth:
            </p>
            
            <blockquote className="relative p-8 mt-8 mb-8 glass-card rounded-2xl border-l-4 border-l-secondary overflow-hidden group hover:shadow-blue transition-all duration-500">
              <div className="absolute left-4 top-2 font-display text-8xl text-secondary/10 leading-none group-hover:scale-110 transition-transform duration-500">"</div>
              <p className="font-display text-xl md:text-2xl text-foreground italic relative z-10 pl-2">
                A website is not just a presence — it's your most powerful business tool.
              </p>
            </blockquote>

            <p>
              What began as a shared passion for design and technology has evolved into a 
              focused digital studio that combines creativity, strategy, and performance.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {["Clear Business Understanding", "Conversion-Focused Design", "Scalable Technology"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mx-auto mb-3" />
                  <p className="font-body text-xs font-semibold text-foreground uppercase tracking-wider leading-tight">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
