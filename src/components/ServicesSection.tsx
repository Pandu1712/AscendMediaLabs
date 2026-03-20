import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Search, TrendingUp, Palette, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    items: ["Static Websites", "Dynamic Websites", "Full Stack Applications", "Business Websites", "Landing Pages"],
    tag: "React + TypeScript + Tailwind CSS",
    accent: "blue" as const,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    items: ["On-page SEO", "Technical SEO", "Speed Optimization", "Google Ranking Setup"],
    accent: "gold" as const,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    items: ["Social Media Growth", "Ad Campaign Setup", "Lead Generation Funnels"],
    accent: "blue" as const,
  },
  {
    icon: Palette,
    title: "Branding & Design",
    items: ["Logo Design", "Graphic Design", "UI/UX Design", "Brand Identity Kits"],
    accent: "gold" as const,
  },
  {
    icon: Settings,
    title: "Add-ons",
    items: ["Domain Setup", "Hosting Support", "WhatsApp Integration", "Admin Panels"],
    accent: "blue" as const,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            What We <span className="text-gradient-brand">Do Best</span>
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
              whileHover={{ y: -8, rotateY: 3, rotateX: 2 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ perspective: 1000 }}
              className={`glass-card-strong rounded-2xl p-7 cursor-default transition-shadow duration-500 ${
                hoveredIndex === i
                  ? service.accent === "blue" ? "glow-blue" : "glow-gold"
                  : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                service.accent === "blue" ? "gradient-blue" : "gradient-gold"
              }`}>
                <service.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                    className="font-body text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      service.accent === "blue" ? "bg-secondary" : "bg-deep-gold"
                    }`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              {service.tag && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-5 inline-block font-body text-xs font-semibold text-secondary-foreground gradient-blue px-3 py-1.5 rounded-full"
                >
                  {service.tag}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
