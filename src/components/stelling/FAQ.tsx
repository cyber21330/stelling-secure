import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web para una PYME en Valencia?",
    a: "El coste varía según el proyecto. En Stelling Secure trabajamos con presupuestos adaptados a la realidad de cada negocio. Contáctanos para una primera consulta sin coste y te damos un presupuesto en 48 horas.",
  },
  {
    q: "¿Qué incluye una auditoría de seguridad web?",
    a: "Analizamos vulnerabilidades, configuración del servidor, CMS, plugins, exposición de datos sensibles, certificados SSL y configuración HTTPS. Entregamos informe con riesgos priorizados y plan de acción.",
  },
  {
    q: "¿Cuánto tarda en hacerse una web profesional?",
    a: "La mayoría de proyectos web para PYMEs los entregamos en 3 a 6 semanas desde el inicio. Siempre fijamos plazos claros desde el primer día.",
  },
  {
    q: "¿Podéis mejorar la seguridad de una web que ya tengo?",
    a: "Sí. Hacemos auditorías y hardening de webs existentes en WordPress, HTML estático, tiendas online y más. Analizamos tu caso y proponemos soluciones concretas.",
  },
  {
    q: "¿Ofrecéis mantenimiento web y seguridad continuada?",
    a: "Sí. Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, copias de seguridad, monitorización de seguridad y soporte técnico.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="py-32 px-6" style={{ background: "#0D0F1C" }}>
      <div className="container max-w-3xl mx-auto">
        <Reveal x={-20} y={0}>
          <div className="section-label mb-6">— 04 · PREGUNTAS FRECUENTES</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display mb-16"
            style={{ color: "#E6E3DC", fontWeight: 300, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1 }}
          >
            Todo lo que necesitas saber
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    background: "#0D0F1C",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: isOpen ? "3px solid #BF9339" : "3px solid transparent",
                    transition: "border-color 0.25s ease",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between text-left"
                    style={{ padding: "24px 32px" }}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-display"
                      style={{ color: "#E6E3DC", fontSize: 22, fontWeight: 400, lineHeight: 1.3 }}
                    >
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={{ color: "#BF9339", fontSize: 24, fontWeight: 300, lineHeight: 1, marginLeft: 16 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="font-body"
                          style={{
                            color: "#78768A",
                            fontSize: 15,
                            lineHeight: 1.7,
                            padding: "0 32px 28px 32px",
                          }}
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
