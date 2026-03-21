import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Search, TrendingUp, Palette, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "We engineer high-performance websites that are more than just beautiful — they are business machines. From sleek landing pages to complete web applications, every build is optimized for speed, scalability, and conversions.",
    items: ["Static & Dynamic", "Full Stack Apps", "Landing Pages"],
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Rank where it matters. We combine deep technical audits, content strategy, and on-page excellence to push your website to the top of search results — and keep it there.",
    items: ["Technical SEO", "Speed Optimization", "Google Rankings"],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Growth isn't accidental. We design data-driven marketing funnels and ad campaigns that target the right audience, generate qualified leads, and turn clicks into loyal customers.",
    items: ["Social Growth", "Ad Campaigns", "Lead Funnels"],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    desc: "Your brand is your reputation. We craft complete visual identities — from logo and typography to brand guidelines and UI/UX design — that make your business impossible to forget.",
    items: ["Logo Design", "UI/UX Design", "Brand Kits"],
    className: "md:col-span-2 lg:col-span-1",
  },
  {
    icon: Settings,
    title: "Add-ons & Support",
    desc: "We don't disappear after launch. From domain setup and secure hosting to WhatsApp integrations and custom admin panels, we provide everything needed to keep your digital presence thriving.",
    items: ["Hosting Setup", "WhatsApp Integration", "Admin Panels"],
    className: "md:col-span-1 lg:col-span-1",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-14 md:py-20 px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Services</span>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            What We <span className="italic text-gradient-brand drop-shadow-[0_0_20px_rgba(255,165,0,0.3)]">Do Best</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            End-to-end digital solutions engineered for performance, precision, and results. Every service is a strategic investment in your business's future.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group glass-card relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium ${service.className}`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-secondary/50 group-hover:bg-secondary/10 transition-colors duration-500">
                    <service.icon className="w-6 h-6 text-foreground group-hover:text-secondary transition-colors duration-500" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground/30 group-hover:text-secondary group-hover:rotate-45 transition-all duration-500" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-gradient-brand transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.items.map((item, j) => (
                    <span key={j} className="font-body text-xs px-3 py-1.5 rounded-full bg-white/5 text-foreground/80 border border-white/10 uppercase tracking-wider group-hover:bg-white/10 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
