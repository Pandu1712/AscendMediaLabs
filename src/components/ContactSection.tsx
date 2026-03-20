import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Globe, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="gold-divider mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Something <span className="text-gradient-brand">Powerful</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Ready to ascend? Let's start your project today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 5 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ perspective: 1200 }}
          className="glass-card-strong rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+91 XXXXXXXX", href: "tel:+91XXXXXXXX" },
                  { icon: Globe, text: "yourdomain.com", href: "#" },
                  { icon: Mail, text: "your@email.com", href: "mailto:your@email.com" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-3 font-body text-muted-foreground hover:text-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    {item.text}
                  </motion.a>
                ))}
              </div>

              <blockquote className="font-display italic text-foreground/80 text-sm border-l-4 border-secondary pl-4 mt-6">
                "We don't build cheap websites. We build websites that make you money."
              </blockquote>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {["Your Name", "Email Address", "Phone Number"].map((placeholder) => (
                <motion.input
                  key={placeholder}
                  whileFocus={{ scale: 1.01 }}
                  type={placeholder === "Email Address" ? "email" : placeholder === "Phone Number" ? "tel" : "text"}
                  placeholder={placeholder}
                  className="w-full font-body text-sm bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                />
              ))}
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full font-body text-sm bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Start Your Project Today
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
