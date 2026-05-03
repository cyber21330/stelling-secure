import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const schema = z.object({
  nombre: z.string().trim().min(1, "Introduce tu nombre").max(100),
  email: z.string().trim().email("Email no válido").max(255),
  empresa: z.string().trim().max(200).optional().or(z.literal("")),
  mensaje: z.string().trim().min(1, "Cuéntanos brevemente tu proyecto").max(1000),
});

const inputBase: React.CSSProperties = {
  background: "#0D0F1C",
  color: "#E6E3DC",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: 14,
  padding: "14px 18px",
  borderRadius: 2,
  width: "100%",
  outline: "none",
  transition: "border-color 0.25s ease",
  borderWidth: 1,
  borderStyle: "solid",
};

type FieldName = "nombre" | "email" | "empresa" | "mensaje";

const ERROR_COLOR = "#E24B4A";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [shakeKey, setShakeKey] = useState(0);

  const borderFor = (name: FieldName, value: string, focused: boolean) => {
    if (errors[name]) return ERROR_COLOR;
    if (focused) return "#BF9339";
    if (touched[name] && value) return "rgba(191,147,57,0.4)";
    return "rgba(255,255,255,0.08)";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);

    if (fd.get("_gotcha")) return; // honeypot

    const data = {
      nombre: String(fd.get("nombre") || ""),
      email: String(fd.get("email") || ""),
      empresa: String(fd.get("empresa") || ""),
      mensaje: String(fd.get("mensaje") || ""),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<FieldName, string>> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as FieldName;
        if (!errs[k]) errs[k] = i.message;
      });
      setErrors(errs);
      setTouched({ nombre: true, email: true, empresa: true, mensaje: true });
      setShakeKey((k) => k + 1);
      return;
    }

    setErrors({});
setSubmitting(true);

emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: data.nombre,
    from_email: data.email,
    empresa: data.empresa,
    message: data.mensaje,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
).then(() => {
  setSubmitting(false);
  toast.success("Mensaje enviado. Te respondemos en menos de 48h.");
  form.reset();
  setTouched({});
}).catch(() => {
  setSubmitting(false);
  toast.error("Error al enviar. Por favor escríbenos directamente a hola@stellingsecure.com");
});
  };

  const renderField = (
    name: FieldName,
    placeholder: string,
    type: "text" | "email" | "textarea",
    required = true
  ) => {
    const [value, setValue] = [undefined, undefined]; // uncontrolled
    void value; void setValue;
    const errorMsg = errors[name];
    const shake = errorMsg ? { x: [0, -6, 6, -6, 6, 0] } : { x: 0 };
    const common = {
      name,
      required,
      placeholder,
      onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTouched((t) => ({ ...t, [name]: true }));
        e.currentTarget.style.borderColor = borderFor(name, e.currentTarget.value, false);
      },
      onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.currentTarget.style.borderColor = errors[name] ? ERROR_COLOR : "#BF9339";
      },
      onChange: () => {
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
      },
      style: { ...inputBase, borderColor: errorMsg ? ERROR_COLOR : "rgba(255,255,255,0.08)" },
    };
    return (
      <div>
        <motion.div key={`${name}-${shakeKey}`} animate={shake} transition={{ duration: 0.4 }}>
          {type === "textarea" ? (
            <textarea {...common} rows={5} style={{ ...common.style, resize: "vertical" }} />
          ) : (
            <input {...common} type={type} />
          )}
        </motion.div>
        {errorMsg && (
          <p className="font-mono-ui mt-2" style={{ color: ERROR_COLOR, fontSize: 11 }}>
            {errorMsg}
          </p>
        )}
      </div>
    );
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 relative"
      style={{
        background:
          "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(191,147,57,0.07) 0%, transparent 70%), #07080E",
      }}
    >
      <div className="container max-w-3xl mx-auto text-center">
        <Reveal>
          <h2
            className="font-display mb-6"
            style={{ color: "#E6E3DC", fontWeight: 300, fontSize: "clamp(38px, 6vw, 60px)", lineHeight: 1.1 }}
          >
            Contacta con Stelling Secure
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="font-display italic mb-12"
            style={{ color: "rgba(191,147,57,0.7)", fontSize: 24, fontWeight: 300 }}
          >
            Cuéntanos tu proyecto. Primera consulta sin coste.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto flex flex-col gap-4 text-left">
            <p
              className="font-mono-ui text-center"
              style={{ color: "#78768A", fontSize: 10, letterSpacing: "0.05em" }}
            >
              ✓ Primera consulta sin coste · ✓ Respuesta en &lt; 48 horas · ✓ Sin permanencias
            </p>

            {renderField("nombre", "Nombre", "text")}
            {renderField("email", "Email", "email")}
            {renderField("empresa", "Web / Empresa", "text", false)}
            {renderField("mensaje", "Cuéntanos brevemente tu proyecto", "textarea")}

            {/* Honeypot */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={submitting}
              className="btn-press font-mono-ui uppercase mt-2"
              style={{
                background: "#BF9339",
                color: "#07080E",
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "0.15em",
                padding: "16px 32px",
                borderRadius: 2,
                width: "100%",
                transition: "all 0.25s ease",
                opacity: submitting ? 0.7 : 1,
                border: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#D4AD50")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#BF9339")}
            >
              {submitting ? "Enviando..." : "Solicitar consulta gratuita →"}
            </button>

            <p className="font-mono-ui text-center" style={{ color: "#78768A", fontSize: 10 }}>
              🔒 Tus datos están protegidos. No compartimos tu información con terceros.
            </p>

            <p className="font-mono-ui text-center mt-2" style={{ color: "#78768A", fontSize: 11 }}>
              También puedes escribirnos a{" "}
              <a href="mailto:hola@stellingsecure.com" style={{ color: "#BF9339" }}>
                hola@stellingsecure.es
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
