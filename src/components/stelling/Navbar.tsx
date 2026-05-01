import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { id: "services", label: "Servicios" },
  { id: "process", label: "Proceso" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 72,
          zIndex: 100,
          background: scrolled ? "rgba(13,15,28,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div className="container h-full flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
            aria-label="Stelling Secure — inicio"
          >
            <Logo size={28} />
            <span className="font-mono-ui text-[12px] tracking-[0.2em]" style={{ color: "#E6E3DC" }}>
              STELLING SECURE
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className={`nav-underline font-mono-ui text-[12px] tracking-[0.18em] uppercase transition-colors ${active === l.id ? "active" : ""}`}
                style={{ color: active === l.id ? "#BF9339" : "#E6E3DC" }}
              >
                {l.label}
              </button>
            ))}
            <motion.button
              animate={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? "auto" : "none" }}
              transition={{ duration: 0.4 }}
              onClick={() => handleClick("contact")}
              className="font-mono-ui uppercase"
              style={{
                border: "1px solid rgba(191,147,57,0.5)",
                color: "#BF9339",
                background: "transparent",
                padding: "8px 18px",
                borderRadius: 2,
                fontSize: 11,
                letterSpacing: "0.12em",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(191,147,57,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Consulta gratuita
            </motion.button>
          </nav>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ width: 22, height: 1.5, background: "#E6E3DC", display: "block" }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: 22, height: 1.5, background: "#E6E3DC", display: "block", marginTop: 5 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ width: 22, height: 1.5, background: "#E6E3DC", display: "block", marginTop: 5 }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] md:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: "#07080E" }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                onClick={() => handleClick(l.id)}
                className="font-display italic"
                style={{ fontSize: 44, color: "#E6E3DC", fontWeight: 300 }}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
