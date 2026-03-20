import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Globe, Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Contact</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Let's Build Something
              <br /><span className="text-gradient-brand">Powerful</span>
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-md leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and build something extraordinary.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, text: "+91 XXXXXXXX", href: "tel:+91XXXXXXXX", label: "Call / WhatsApp" },
                { icon: Globe, text: "yourdomain.com", href: "#", label: "Website" },
                { icon: Mail, text: "your@email.com", href: "mailto:your@email.com", label: "Email" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-body text-sm font-medium text-foreground group-hover:text-secondary transition-colors">{item.text}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <blockquote className="mt-10 pt-8 border-t border-border">
              <p className="font-display text-lg italic text-foreground/60">
                "We don't build cheap websites. We build websites that make you money."
              </p>
            </blockquote>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Start Your Project</h3>
              <p className="font-body text-sm text-muted-foreground mb-6">Fill in your details and we'll get back within 24 hours.</p>
              
              {["Your Name", "Email Address", "Phone Number"].map((placeholder) => (
                <input
                  key={placeholder}
                  type={placeholder === "Email Address" ? "email" : placeholder === "Phone Number" ? "tel" : "text"}
                  placeholder={placeholder}
                  className="w-full font-body text-sm bg-muted border-0 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-muted-foreground/50"
                />
              ))}
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full font-body text-sm bg-muted border-0 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all resize-none placeholder:text-muted-foreground/50"
              />
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
