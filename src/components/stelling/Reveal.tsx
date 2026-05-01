import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
  as?: "div" | "section" | "h2" | "h3" | "p" | "span";
}

export const Reveal = ({ children, delay = 0, y = 40, x = 0, className, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);
