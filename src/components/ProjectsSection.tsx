import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  { name: "BrightFuture Preschool", desc: "Website + Branding", detail: "Parent engagement system · Mobile-first design", color: "from-gold to-gold-light" },
  { name: "UrbanNest Real Estate", desc: "Property Listing Platform", detail: "Lead capture integration · Modern UI", color: "from-royal to-royal-light" },
  { name: "FreshBite Restaurant", desc: "QR Menu System", detail: "WhatsApp ordering · Responsive design", color: "from-gold to-gold-light" },
  { name: "FitZone Gym", desc: "Membership System", detail: "Landing page · Subscription management", color: "from-royal to-royal-light" },
  { name: "TrendWear Fashion", desc: "E-commerce UI Design", detail: "Catalog · Cart · Checkout flow", color: "from-gold to-gold-light" },
  { name: "EduSmart Academy", desc: "Course Showcase", detail: "Student inquiry system · Dashboard", color: "from-royal to-royal-light" },
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
            Our Work <span className="text-gradient-gold">Speaks for Itself</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card-strong rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                <span className="font-display text-3xl font-bold text-primary/20">{project.name[0]}</span>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{project.name}</h3>
                <p className="font-body text-sm font-medium text-gold mb-2">{project.desc}</p>
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
