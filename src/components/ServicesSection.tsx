import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Globe, Search, TrendingUp, Palette, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    desc: "From landing pages to full-stack applications, we build fast, scalable, and conversion-optimized websites.",
    items: ["Static & Dynamic Websites", "Full Stack Applications", "Business Websites", "Landing Pages"],
    tag: "React + TypeScript + Tailwind CSS",
  },
  {
    icon: Search,
    number: "02",
    title: "SEO Optimization",
    desc: "We ensure your website ranks higher and gets discovered by the right audience.",
    items: ["On-page & Technical SEO", "Speed Optimization", "Google Ranking Setup"],
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that generate leads and drive real business growth.",
    items: ["Social Media Growth", "Ad Campaign Setup", "Lead Generation Funnels"],
  },
  {
    icon: Palette,
    number: "04",
    title: "Branding & Design",
    desc: "Complete brand identities that make your business memorable and professional.",
    items: ["Logo & Graphic Design", "UI/UX Design", "Brand Identity Kits"],
  },
  {
    icon: Settings,
    number: "05",
    title: "Add-ons & Support",
    desc: "Everything you need to get your digital presence running smoothly.",
    items: ["Domain & Hosting Setup", "WhatsApp Integration", "Admin Panels"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Services</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              What We <span className="text-gradient-brand">Do Best</span>
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-md text-sm leading-relaxed">
            Comprehensive digital solutions crafted with precision. Every service is designed to deliver measurable business results.
          </p>
        </motion.div>

        <div className="space-y-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`group rounded-2xl p-6 md:p-8 transition-all duration-500 cursor-default border ${
                activeIndex === i
                  ? "bg-card shadow-lg border-secondary/20"
                  : "bg-transparent border-transparent hover:bg-card/50"
              }`}
            >
              <div className="flex items-start gap-6 md:gap-10">
                <span className="font-body text-xs font-semibold text-muted-foreground/50 pt-1 hidden md:block">{service.number}</span>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <service.icon className={`w-5 h-5 transition-colors duration-300 ${
                        activeIndex === i ? "text-secondary" : "text-muted-foreground"
                      }`} />
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                      activeIndex === i ? "text-secondary rotate-0" : "text-muted-foreground/30 -rotate-45"
                    }`} />
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: activeIndex === i ? "auto" : 0, opacity: activeIndex === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-muted-foreground text-sm mb-4 max-w-2xl">{service.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, j) => (
                        <span key={j} className="font-body text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border">
                          {item}
                        </span>
                      ))}
                      {service.tag && (
                        <span className="font-body text-xs px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold">
                          {service.tag}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
