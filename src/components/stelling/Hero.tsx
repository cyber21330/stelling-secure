import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export const Hero = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative w-full flex items-center justify-center px-6"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(191,147,57,0.05) 0%, transparent 70%), #07080E",
      }}
    >
      <h1 className="sr-only">Desarrollo Web y Seguridad Web para PYMEs en Valencia</h1>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 pt-20">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="font-mono-ui uppercase"
          style={{ color: "#78768A", letterSpacing: "0.3em", fontSize: 11 }}
        >
          STELLING SECURE · VALENCIA
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          aria-hidden="true"
          className="font-display leading-[1.05]"
          style={{
            color: "#E6E3DC",
            fontWeight: 300,
            fontSize: "clamp(52px, 9vw, 88px)",
            margin: 0,
          }}
        >
          Desarrollo web.
          <br />
          Seguridad <span className="italic" style={{ color: "#BF9339" }}>digital.</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="font-display italic"
          style={{
            color: "rgba(191,147,57,0.7)",
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: 300,
          }}
        >
          Tu negocio, construido y blindado.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="font-body"
          style={{ color: "#78768A", fontSize: 16, maxWidth: 560, lineHeight: 1.7 }}
        >
          Stelling Secure es tu equipo de <strong style={{ color: "#E6E3DC", fontWeight: 400 }}>desarrollo web y seguridad web en Valencia</strong>. Construimos <strong style={{ color: "#E6E3DC", fontWeight: 400 }}>páginas web para PYMEs</strong> rápidas, elegantes y seguras desde la base — y nos quedamos para protegerlas. Un solo proveedor para dos servicios críticos para tu negocio.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3.5}
          className="font-mono-ui"
          style={{ color: "#78768A", fontSize: 11, letterSpacing: "0.08em" }}
        >
          Más de 50 PYMEs en Valencia confían en Stelling Secure
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("services")}
            className="btn-press font-mono-ui uppercase"
            style={{
              background: "#BF9339",
              color: "#07080E",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.15em",
              padding: "14px 32px",
              borderRadius: 2,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D4AD50")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#BF9339")}
          >
            Ver servicios
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-press font-mono-ui uppercase"
            style={{
              background: "transparent",
              border: "1px solid rgba(191,147,57,0.4)",
              color: "#BF9339",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.15em",
              padding: "14px 32px",
              borderRadius: 2,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(191,147,57,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Auditoría gratuita →
          </button>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4.5}
          className="font-mono-ui"
          style={{ color: "#78768A", fontSize: 10, letterSpacing: "0.08em" }}
        >
          Sin compromiso · Respuesta en 24-48h · 100% confidencial
        </motion.p>
      </div>

      <motion.div
        animate={{ opacity: showArrow ? 0.7 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#78768A" }}
      >
        <span className="font-mono-ui" style={{ fontSize: 10, letterSpacing: "0.3em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 32, background: "#78768A" }}
        />
      </motion.div>
    </section>
  );
};
