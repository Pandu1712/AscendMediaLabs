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
            Let's Build Something <span className="text-gradient-gold">Powerful</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Ready to ascend? Let's start your project today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card-strong rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                <a href="tel:+91XXXXXXXX" className="flex items-center gap-3 font-body text-muted-foreground hover:text-gold transition-colors">
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  +91 XXXXXXXX
                </a>
                <a href="#" className="flex items-center gap-3 font-body text-muted-foreground hover:text-gold transition-colors">
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  yourdomain.com
                </a>
                <a href="mailto:your@email.com" className="flex items-center gap-3 font-body text-muted-foreground hover:text-gold transition-colors">
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  your@email.com
                </a>
              </div>

              <blockquote className="font-display italic text-foreground/80 text-sm border-l-4 border-gold pl-4 mt-6">
                "We don't build cheap websites. We build websites that make you money."
              </blockquote>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full font-body text-sm bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full font-body text-sm bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full font-body text-sm bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full font-body text-sm bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
              />
              <button type="submit" className="btn-premium w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Start Your Project Today
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
