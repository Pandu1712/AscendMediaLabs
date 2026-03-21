import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Globe, Mail, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "917675852618";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `Hello Ascend Media Labs! 👋%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Project Details:* ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-14 md:py-20 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
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
                { icon: Phone, text: "+91 7675852618 ", href: "tel:+917675852618", label: "Call / WhatsApp" },
                { icon: Globe, text: "ascendmedialabs.com", href: "#", label: "Website" },
                { icon: Mail, text: "reachus@ascendmedialabs.com", href: "mailto:reachus@ascendmedialabs.com", label: "Email" },
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
            <form className="glass-card rounded-3xl p-8 md:p-10 space-y-5 relative z-10" onSubmit={handleSubmit}>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Start Your Project</h3>
              <p className="font-body text-sm text-muted-foreground mb-6">Fill in your details and we'll get back within 24 hours.</p>

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full font-body text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full font-body text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-full font-body text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white/10 transition-all placeholder:text-muted-foreground/50"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={4}
                required
                className="w-full font-body text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:bg-white/10 transition-all resize-none placeholder:text-muted-foreground/50"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 group mt-2 bg-[#25D366] hover:bg-[#20bb5a] text-white font-semibold py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] font-body text-base"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Send via WhatsApp
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
