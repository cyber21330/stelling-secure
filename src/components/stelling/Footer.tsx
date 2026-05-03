import { Logo } from "./Logo";

const linkStyle: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: 12,
  color: "#78768A",
  transition: "color 0.2s ease",
  display: "block",
  padding: "4px 0",
};

const FooterLink = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
  <a
    href={href}
    style={linkStyle}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#BF9339")}
    onMouseLeave={(e) => (e.currentTarget.style.color = "#78768A")}
  >
    {children}
  </a>
);

export const Footer = () => (
  <footer style={{ background: "#0D0F1C", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
    <div className="container max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Logo size={32} />
          <span className="font-mono-ui" style={{ color: "#E6E3DC", letterSpacing: "0.2em", fontSize: 13 }}>
            STELLING SECURE
          </span>
        </div>
        <p className="font-mono-ui" style={{ color: "#78768A", fontSize: 11 }}>
          Desarrollo web & Seguridad digital
        </p>
        <p className="font-mono-ui mb-6" style={{ color: "#78768A", fontSize: 11 }}>
          Valencia, España
        </p>
        <p className="font-display italic" style={{ color: "rgba(191,147,57,0.4)", fontSize: 18, fontWeight: 300 }}>
          Tu negocio, construido y blindado.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:justify-self-end">
        <div>
          <div className="font-mono-ui mb-4 uppercase" style={{ color: "#BF9339", fontSize: 10, letterSpacing: "0.25em" }}>
            Servicios
          </div>
          <FooterLink href="#services">Desarrollo Web</FooterLink>
          <FooterLink href="#services">Seguridad Web</FooterLink>
          <FooterLink href="#services">Auditoría</FooterLink>
          <FooterLink href="#services">Consultoría</FooterLink>
        </div>
        <div>
          <div className="font-mono-ui mb-4 uppercase" style={{ color: "#BF9339", fontSize: 10, letterSpacing: "0.25em" }}>
            Empresa
          </div>
          <FooterLink href="#process">Proceso</FooterLink>
          <FooterLink href="#faq">FAQ</FooterLink>
          <FooterLink href="#contact">Contacto</FooterLink>
          <FooterLink href="mailto:hola@stellingsecure.es">hola@stellingsecure.com</FooterLink>
        </div>
      </div>
    </div>

    <div
      className="container max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 justify-between"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <p className="font-mono-ui" style={{ color: "#78768A", fontSize: 10 }}>
        © 2026 Stelling Secure. Todos los derechos reservados.
      </p>
      <p className="font-mono-ui" style={{ color: "#78768A", fontSize: 10 }}>
        Hecho con precisión en Valencia.
      </p>
    </div>
  </footer>
);
