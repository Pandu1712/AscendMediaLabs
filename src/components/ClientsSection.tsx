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
    <section className="py-20 px-6 md:px-12 border-y border-border bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">
            Trusted by Growing Businesses
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center mb-10">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <span className="font-display text-lg md:text-xl font-bold text-foreground/20 group-hover:text-foreground/60 transition-colors duration-500 cursor-default">
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center font-body text-sm text-muted-foreground"
        >
          Over <span className="text-secondary font-semibold">60+ successful projects</span> delivered across industries.
        </motion.p>
      </div>
    </section>
  );
};

export default ClientsSection;
