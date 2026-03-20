import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "BrightFuture Preschool", desc: "Website + Branding", detail: "Parent engagement system · Mobile-first design", accent: "blue" as const },
  { name: "UrbanNest Real Estate", desc: "Property Listing Platform", detail: "Lead capture integration · Modern UI", accent: "gold" as const },
  { name: "FreshBite Restaurant", desc: "QR Menu System", detail: "WhatsApp ordering · Responsive design", accent: "blue" as const },
  { name: "FitZone Gym", desc: "Membership System", detail: "Landing page · Subscription management", accent: "gold" as const },
  { name: "TrendWear Fashion", desc: "E-commerce UI Design", detail: "Catalog · Cart · Checkout flow", accent: "blue" as const },
  { name: "EduSmart Academy", desc: "Course Showcase", detail: "Student inquiry system · Dashboard", accent: "gold" as const },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Work <span className="text-gradient-brand">Speaks for Itself</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{ perspective: 1000 }}
              className="glass-card-strong rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-40 flex items-center justify-center relative ${
                project.accent === "blue" ? "gradient-blue" : "gradient-gold"
              }`}>
                <span className="font-display text-5xl font-bold text-secondary-foreground/20">
                  {project.name[0]}
                </span>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-foreground/10 flex items-center justify-center"
                >
                  <ExternalLink className="w-6 h-6 text-secondary-foreground" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{project.name}</h3>
                <p className={`font-body text-sm font-medium mb-2 ${
                  project.accent === "blue" ? "text-secondary" : "text-deep-gold"
                }`}>{project.desc}</p>
                <p className="font-body text-xs text-muted-foreground">{project.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
