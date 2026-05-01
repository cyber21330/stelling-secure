import { motion } from "framer-motion";
import { Code2, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    accent: "#1B5DAD",
    Icon: Code2,
    title: "Desarrollo Web para PYMEs",
    tag: "[ web · performance · seo ]",
    desc: "Diseñamos y desarrollamos webs rápidas, elegantes y optimizadas para convertir. Sin plantillas. Código limpio, estructura sólida y resultados medibles desde el primer día.",
    items: [
      "Diseño UI/UX a medida",
      "Desarrollo React / Next.js",
      "SEO técnico desde la base",
      "CMS integrado (si lo necesitas)",
      "Rendimiento y Core Web Vitals",
    ],
    glow: "rgba(27,93,173,0.06)",
    hoverBorder: "rgba(27,93,173,0.4)",
  },
  {
    accent: "#BF9339",
    Icon: ShieldCheck,
    title: "Auditoría y Seguridad Web",
    tag: "[ audit · hardening · monitoring ]",
    desc: "Auditamos, reforzamos y monitorizamos tu presencia digital. No esperamos a que ocurra un incidente: identificamos vulnerabilidades antes de que alguien las explote.",
    items: [
      "Auditoría de seguridad web completa",
      "Hardening de servidores y CMS",
      "Protección contra malware y ataques",
      "Certificados SSL y configuración HTTPS",
      "Informes técnicos detallados",
    ],
    glow: "rgba(191,147,57,0.06)",
    hoverBorder: "rgba(191,147,57,0.4)",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6" style={{ background: "#07080E" }}>
      <div className="container max-w-6xl mx-auto">
        <Reveal x={-20} y={0}>
          <div className="section-label mb-6">— 01 · SERVICIOS</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display mb-20"
            style={{ color: "#E6E3DC", fontWeight: 300, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1 }}
          >
            Servicios de Desarrollo Web y Seguridad Web
          </h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          {cards.map((c, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="hover-lift relative overflow-hidden"
              style={{
                background: "#0D0F1C",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 3,
                padding: 40,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c.hoverBorder;
                e.currentTarget.style.boxShadow = `0 0 40px ${c.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: c.accent }} />
              <c.Icon size={32} color={c.accent} strokeWidth={1.5} />
              <h3
                className="font-display mt-6 mb-2"
                style={{ color: "#E6E3DC", fontWeight: 400, fontSize: 34, lineHeight: 1.1 }}
              >
                {c.title}
              </h3>
              <div className="font-mono-ui mb-6" style={{ color: c.accent, fontSize: 11 }}>
                {c.tag}
              </div>
              <p className="font-body mb-8" style={{ color: "#78768A", fontSize: 14, lineHeight: 1.7 }}>
                {c.desc}
              </p>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="font-mono-ui flex gap-2" style={{ color: "#78768A", fontSize: 12 }}>
                    <span style={{ color: c.accent }}>→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
