import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IndianRupee, Zap, PenTool, Smartphone, Briefcase, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality starting from just ₹5,000 — enterprise solutions at startup prices." },
  { icon: Zap, title: "Fast Delivery", desc: "Rapid turnaround without compromising quality. Your project, delivered on time." },
  { icon: PenTool, title: "Custom Design", desc: "Every pixel is crafted from scratch. No templates, no shortcuts, no compromises." },
  { icon: Smartphone, title: "Mobile-First", desc: "Built responsive from the ground up. Perfect experience on every device." },
  { icon: Briefcase, title: "Business-Focused", desc: "We don't just design — we strategize for conversions, leads, and growth." },
  { icon: HeartHandshake, title: "Ongoing Support", desc: "Our relationship doesn't end at delivery. We're your long-term digital partner." },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 relative" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Why Us</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Why Clients Choose<br /><span className="text-gradient-brand">Ascend</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-secondary/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <reason.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-secondary to-royal-light p-8 md:p-12 text-center"
        >
          <p className="font-display text-xl md:text-2xl text-white font-bold mb-2">
            Limited projects per month to ensure quality delivery.
          </p>
          <p className="font-body text-white/70 text-sm">
            From idea to execution — we handle everything.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
