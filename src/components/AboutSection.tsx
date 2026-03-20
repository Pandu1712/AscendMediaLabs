import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built on Passion. <span className="text-gradient-gold">Driven by Results.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card-strong rounded-3xl p-8 md:p-12"
        >
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              We started with a simple vision — to create digital experiences that actually deliver results, not just designs.
            </p>
            <p>
              With hands-on experience across <strong className="text-foreground">60+ real-world projects</strong>, we've worked closely with businesses, startups, and institutions to understand one core truth:
            </p>
            <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-foreground font-display text-xl">
              "A website is not just a presence — it's your most powerful business tool."
            </blockquote>
            <p>
              What began as a shared passion for design and technology has evolved into a focused digital studio that combines creativity, strategy, and performance.
            </p>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              {["Clear business understanding", "Conversion-focused design", "Scalable technology"].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center">
                  <p className="font-display font-semibold text-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-gold text-lg mb-2">Our Mission</h3>
              <p className="font-body text-muted-foreground text-sm">
                To help businesses ascend digitally with powerful, affordable, and result-driven solutions.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display font-bold text-royal text-lg mb-2">Our Vision</h3>
              <p className="font-body text-muted-foreground text-sm">
                To become a trusted digital partner for growing brands across India and beyond.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
