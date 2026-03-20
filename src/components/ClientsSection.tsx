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
            Trusted by <span className="text-gradient-gold">Growing Businesses</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="glass-card-strong rounded-2xl p-6 flex items-center justify-center"
            >
              <span className="font-display font-bold text-foreground/60 text-sm md:text-base tracking-wide">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center font-body text-muted-foreground text-sm">
          Over <strong className="text-gold">60+ successful projects</strong> delivered across industries.
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
