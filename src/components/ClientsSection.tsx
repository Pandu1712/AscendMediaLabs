import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "BrightFuture School",
  "UrbanNest Realty",
  "FreshBite Café",
  "FitZone Fitness",
  "EduSmart Institute",
  "TrendWear Store",
];

const ClientsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient-brand">Growing Businesses</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ perspective: 800 }}
              className="glass-card-strong rounded-2xl p-6 flex items-center justify-center hover:glow-blue transition-shadow duration-500"
            >
              <span className="font-display font-bold text-foreground/60 text-sm md:text-base tracking-wide">
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center font-body text-muted-foreground text-sm"
        >
          Over <strong className="text-secondary">60+ successful projects</strong> delivered across industries.
        </motion.p>
      </div>
    </section>
  );
};

export default ClientsSection;
