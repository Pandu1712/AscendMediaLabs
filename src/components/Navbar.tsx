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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
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
            <img
              src="/logo.png"
              alt="Ascend Media Labs Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-full shadow-md shadow-secondary/20 border-2 border-white/5"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </a>

          {/* Desktop Nav */}
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
            <a href="#contact" className="btn-primary text-sm !py-2.5 !px-6">Get Started</a>
          </div>

          {/* Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel from right */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-background border-l border-border shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <span className="font-display text-lg font-bold text-gradient-brand">Ascend Media Labs</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col px-6 py-8 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-body text-lg font-medium text-foreground/80 hover:text-secondary py-3 px-4 rounded-xl hover:bg-muted transition-all"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-6 border-t border-border space-y-3">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full text-center text-sm"
                >
                  Get Started
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ModeToggle />
                  <span>Toggle Theme</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
