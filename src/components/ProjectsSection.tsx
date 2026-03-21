import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "GoMunchZ",
    category: "Full E-Commerce Platform",
    detail: "Complete online food ordering & delivery platform with product catalog, cart, payment gateway, live order tracking, and admin dashboard. Built for Hyderabad's growing food market.",
    location: "Hyderabad, India",
    color: "from-orange-500/25 to-orange-600/5 border-orange-500/20",
  },
  {
    name: "Khushi Box",
    category: "Gift Articles E-Commerce + Admin",
    detail: "Premium gifting e-commerce store with curated collections, custom packaging options, order management, and a full-featured admin dashboard for inventory and sales tracking.",
    location: "Hyderabad, India",
    color: "from-pink-500/25 to-pink-600/5 border-pink-500/20",
  },
  {
    name: "RoyalStandard Pub",
    category: "QR Menu System",
    detail: "Contactless digital dining experience for an upscale UK pub — QR-based menu with real-time item availability, table ordering, and kitchen notification system.",
    location: "United Kingdom",
    color: "from-amber-500/25 to-amber-600/5 border-amber-500/20",
  },
  {
    name: "Tejovikas",
    category: "Preschool & Home Tuitions Portal",
    detail: "Comprehensive education platform for a Bangalore institution offering preschool & home tutoring — student enrollment, fee management, schedules, and parent communication portal.",
    location: "Bangalore, India",
    color: "from-green-500/25 to-green-600/5 border-green-500/20",
  },
  {
    name: "School Management System",
    category: "EduTech Web Application",
    detail: "End-to-end school management system covering admissions, attendance tracking, exam results, fee collection, teacher management, and real-time parent notifications.",
    location: "India",
    color: "from-blue-500/25 to-blue-600/5 border-blue-500/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-14 md:py-20 px-6 md:px-12 bg-background">
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
              className="group cursor-pointer glass-card p-4 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.color} border relative overflow-hidden mb-6`}>
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="font-display text-7xl font-bold text-white/10 group-hover:scale-110 group-hover:text-white/20 transition-all duration-500">{project.name[0]}</span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 backdrop-blur-md border border-white/20 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-body text-xs font-semibold text-secondary uppercase tracking-wider">{project.category}</p>
                  <span className="font-body text-[10px] text-muted-foreground/60 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{project.location}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gradient-brand transition-colors">{project.name}</h3>
                <p className="font-body text-sm text-muted-foreground/80 leading-relaxed">{project.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
