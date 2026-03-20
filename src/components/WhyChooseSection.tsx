import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IndianRupee, Zap, PenTool, Smartphone, Briefcase, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Starting from ₹5000" },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnaround times" },
  { icon: PenTool, title: "Custom Design", desc: "No templates, ever" },
  { icon: Smartphone, title: "Mobile-First", desc: "Every pixel responsive" },
  { icon: Briefcase, title: "Business-Focused", desc: "Strategy that converts" },
  { icon: HeartHandshake, title: "Ongoing Support", desc: "We're always here" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Clients Choose <span className="text-gradient-gold">Ascend</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card-strong rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-1">{reason.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Urgency + Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center space-y-3"
        >
          <p className="font-body text-sm text-gold font-semibold">
            🔥 Limited projects per month to ensure quality delivery.
          </p>
          <p className="font-body text-sm text-muted-foreground italic">
            "From idea to execution — we handle everything."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
