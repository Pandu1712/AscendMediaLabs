import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "BrightFuture Preschool", category: "Website + Branding", detail: "Parent engagement system with mobile-first design", color: "from-secondary to-royal-light" },
  { name: "UrbanNest Real Estate", category: "Property Platform", detail: "Listing platform with lead capture integration", color: "from-deep-gold to-deep-gold-warm" },
  { name: "FreshBite Restaurant", category: "QR Menu System", detail: "WhatsApp ordering with responsive design", color: "from-secondary to-royal-light" },
  { name: "FitZone Gym", category: "Membership System", detail: "Landing page with subscription management", color: "from-deep-gold to-deep-gold-warm" },
  { name: "TrendWear Fashion", category: "E-commerce Design", detail: "Full catalog, cart, and checkout flow", color: "from-secondary to-royal-light" },
  { name: "EduSmart Academy", category: "Course Showcase", detail: "Student inquiry system with dashboard", color: "from-deep-gold to-deep-gold-warm" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-secondary" />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Our Work Speaks<br /><span className="text-gradient-brand">for Itself</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-sm text-sm leading-relaxed">
              A selection of projects that showcase our commitment to quality and results.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-4`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl font-bold text-white/10">{project.name[0]}</span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="px-1">
                <p className="font-body text-xs font-semibold text-secondary uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{project.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{project.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
