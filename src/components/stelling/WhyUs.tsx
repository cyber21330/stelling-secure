import { motion } from "framer-motion";
import { Eye, Handshake, Building2, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  { Icon: Eye, title: "Visión completa", text: "Construimos tu web pensando ya en su seguridad. No son dos proyectos separados: son uno." },
  { Icon: Handshake, title: "Sin intermediarios", text: "Trabajas directamente con quien ejecuta. Sin account managers. Sin sorpresas." },
  { Icon: Building2, title: "Orientados a PYMEs", text: "Precios justos, plazos claros y soluciones que se ajustan a tu realidad, no a la de una corporación." },
  { Icon: FileText, title: "Transparencia total", text: "Sabes exactamente qué se hace, cómo y por qué. Entregamos documentación de todo." },
];

export const WhyUs = () => (
  <section id="why" className="py-32 px-6" style={{ background: "#0D0F1C" }}>
    <div className="container max-w-6xl mx-auto">
      <Reveal x={-20} y={0}>
        <div className="section-label mb-6">— 02 · POR QUÉ NOSOTROS</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-display mb-6"
          style={{ color: "#E6E3DC", fontWeight: 300, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1 }}
        >
          Por qué elegir Stelling Secure
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="font-body mb-16" style={{ color: "#78768A", fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>
          La mayoría de agencias hacen webs. La mayoría de empresas de seguridad no entienden tu negocio. Nosotros hacemos ambas cosas, con el mismo nivel de exigencia.
        </p>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="grid md:grid-cols-2 gap-5"
      >
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="hover-lift"
            style={{
              background: "#141828",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 3,
              padding: 32,
            }}
          >
            <r.Icon size={24} color="#BF9339" strokeWidth={1.5} />
            <h3
              className="font-display mt-5 mb-3"
              style={{ color: "#E6E3DC", fontWeight: 400, fontSize: 22, lineHeight: 1.2 }}
            >
              {r.title}
            </h3>
            <p className="font-body" style={{ color: "#78768A", fontSize: 14, lineHeight: 1.7 }}>
              {r.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
