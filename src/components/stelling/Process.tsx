import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  { num: "01", title: "Diagnóstico", text: "Analizamos tu situación actual: web, seguridad, necesidades y objetivos. Sin compromiso." },
  { num: "02", title: "Propuesta", text: "Presentamos un plan detallado con alcance, plazos y presupuesto claro. Nada de letra pequeña." },
  { num: "03", title: "Ejecución", text: "Desarrollamos y/o auditamos con comunicación constante. Tú siempre sabes en qué punto estamos." },
  { num: "04", title: "Entrega y soporte", text: "Lanzamos, documentamos todo y nos quedamos disponibles. No desaparecemos tras la entrega." },
];

export const Process = () => (
  <section id="process" className="py-32 px-6" style={{ background: "#07080E" }}>
    <div className="container max-w-6xl mx-auto">
      <Reveal x={-20} y={0}>
        <div className="section-label mb-6">— 03 · PROCESO</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-display mb-20"
          style={{ color: "#E6E3DC", fontWeight: 300, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.1 }}
        >
          Cómo trabajamos
        </h2>
      </Reveal>

      <div className="relative">
        <div
          className="hidden md:block absolute left-0 right-0"
          style={{
            top: 28,
            borderTop: "1px dashed rgba(191,147,57,0.3)",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-4 gap-10 md:gap-6 relative"
        >
          {steps.map((s) => (
            <motion.div
              key={s.num}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="relative"
            >
              <div
                className="font-mono-ui mb-4 inline-block px-3"
                style={{
                  fontSize: 40,
                  color: "rgba(191,147,57,0.2)",
                  background: "#07080E",
                  position: "relative",
                  marginLeft: -12,
                }}
              >
                {s.num}
              </div>
              <h3
                className="font-display mb-3"
                style={{ color: "#E6E3DC", fontWeight: 400, fontSize: 22 }}
              >
                {s.title}
              </h3>
              <p className="font-body" style={{ color: "#78768A", fontSize: 14, lineHeight: 1.7 }}>
                {s.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
