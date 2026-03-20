import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, TrendingUp, Palette, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    items: ["Static Websites", "Dynamic Websites", "Full Stack Applications", "Business Websites", "Landing Pages"],
    tag: "React + TypeScript + Tailwind CSS",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    items: ["On-page SEO", "Technical SEO", "Speed Optimization", "Google Ranking Setup"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    items: ["Social Media Growth", "Ad Campaign Setup", "Lead Generation Funnels"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    items: ["Logo Design", "Graphic Design", "UI/UX Design", "Brand Identity Kits"],
  },
  {
    icon: Settings,
    title: "Add-ons",
    items: ["Domain Setup", "Hosting Support", "WhatsApp Integration", "Admin Panels"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient-gold">Do Best</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Comprehensive digital solutions crafted for growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card-strong rounded-2xl p-7 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {service.tag && (
                <div className="mt-5 inline-block font-body text-xs font-semibold text-royal bg-sky-light px-3 py-1.5 rounded-full">
                  {service.tag}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
