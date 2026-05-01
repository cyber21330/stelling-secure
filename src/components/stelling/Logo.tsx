interface LogoProps {
  size?: number;
}

export const Logo = ({ size = 48 }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logotipo de Stelling Secure" role="img">
    <path
      d="M58 22 L36 22 L24 32 L24 44 L44 44 L58 50 L58 62 L46 70 L24 70"
      stroke="#BF9339"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <circle cx="58" cy="22" r="3.5" fill="#BF9339" />
    <circle cx="24" cy="70" r="3.5" fill="#BF9339" />
    <circle cx="44" cy="44" r="2" fill="#BF9339" opacity="0.6" />
  </svg>
);
