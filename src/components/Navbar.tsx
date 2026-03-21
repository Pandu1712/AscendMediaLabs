import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-glass py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a href="#home" className="flex items-center gap-3 font-display text-xl md:text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity">
          <img src="/logo.png" alt="Ascend Media Labs Logo" className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full shadow-md shadow-secondary/20 border-2 border-white/5" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
          <span className="text-gradient-brand hidden">Ascend Media Labs</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-brand before:transition-all hover:before:w-full"
            >
              {link.label}
            </a>
          ))}
          <ModeToggle />
          <a href="#contact" className="btn-primary text-sm !py-2.5 !px-6">
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-base text-foreground/80 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex justify-between items-center mt-2 px-2">
                <ModeToggle />
                <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center text-sm">
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
