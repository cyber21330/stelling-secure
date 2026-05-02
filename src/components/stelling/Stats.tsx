import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Proyectos entregados" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "< 48h", label: "Tiempo de respuesta" },
  { value: "0", label: "Incidentes post-auditoría" },
];

export const Stats = () => (
  <section
    className="py-20 px-6"
    style={{
      background: "#07080E",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      className="container max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4"
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          className="text-center py-6 md:py-0"
          style={{
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
        >
          <div
            className="font-display"
            style={{ color: "#BF9339", fontWeight: 300, fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1 }}
          >
            {s.value}
          </div>
          <div
            className="font-mono-ui mt-3 uppercase"
            style={{ color: "#78768A", fontSize: 11, letterSpacing: "0.15em" }}
          >
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);
