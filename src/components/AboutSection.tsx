import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Built on Passion. <span className="text-gradient-brand">Driven by Results.</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card-strong rounded-3xl p-8 md:p-12">
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                We started with a simple vision — to create digital experiences that actually deliver results, not just designs.
              </p>
              <p>
                With hands-on experience across <strong className="text-foreground">60+ real-world projects</strong>, we've worked closely with businesses, startups, and institutions to understand one core truth:
              </p>
              <motion.blockquote
                whileHover={{ scale: 1.02 }}
                className="border-l-4 border-secondary pl-6 py-2 italic text-foreground font-display text-xl"
              >
                "A website is not just a presence — it's your most powerful business tool."
              </motion.blockquote>
              <p>
                What began as a shared passion for design and technology has evolved into a focused digital studio that combines creativity, strategy, and performance.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-4">
                {["Clear business understanding", "Conversion-focused design", "Scalable technology"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card rounded-xl p-4 text-center border-t-2 border-secondary/30"
                  >
                    <p className="font-display font-semibold text-foreground text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <motion.div whileHover={{ y: -4 }} className="glass-card rounded-2xl p-6 border-l-4 border-deep-gold">
                <h3 className="font-display font-bold text-deep-gold text-lg mb-2">Our Mission</h3>
                <p className="font-body text-muted-foreground text-sm">
                  To help businesses ascend digitally with powerful, affordable, and result-driven solutions.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -4 }} className="glass-card rounded-2xl p-6 border-l-4 border-secondary">
                <h3 className="font-display font-bold text-secondary text-lg mb-2">Our Vision</h3>
                <p className="font-body text-muted-foreground text-sm">
                  To become a trusted digital partner for growing brands across India and beyond.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
