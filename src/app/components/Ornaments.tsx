import { motion } from "motion/react";
import { ReactNode } from "react";

export const GOLD = "#C9A227";
export const GOLD_LIGHT = "#E8C96A";
export const MAROON = "#7B1A2E";
export const MAROON_DARK = "#5C1120";
export const DARK_BROWN = "#2C1810";
export const MED_BROWN = "#3D2B1F";
export const PARCHMENT = "#FAF3E0";
export const CREAM = "#FFF8E7";
export const SAFFRON = "#D4622A";
export const TEXT_ON_DARK = "#F5EDD8";

export function OrnamentalDivider({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const stroke = light ? "rgba(245,237,216,0.5)" : "rgba(201,162,39,0.7)";
  const fill = light ? "rgba(245,237,216,0.7)" : GOLD;
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg width="320" height="20" viewBox="0 0 320 20" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
        <line x1="0" y1="10" x2="130" y2="10" stroke={stroke} strokeWidth="1" />
        <circle cx="140" cy="10" r="2.5" fill={fill} />
        <circle cx="152" cy="10" r="5" fill="none" stroke={fill} strokeWidth="1.5" />
        <circle cx="160" cy="10" r="3" fill={fill} />
        <circle cx="168" cy="10" r="5" fill="none" stroke={fill} strokeWidth="1.5" />
        <circle cx="180" cy="10" r="2.5" fill={fill} />
        <line x1="190" y1="10" x2="320" y2="10" stroke={stroke} strokeWidth="1" />
      </svg>
    </div>
  );
}

export function CornerOrnament({ size = 32, color = GOLD, opacity = 0.7, position }: {
  size?: number;
  color?: string;
  opacity?: number;
  position: "tl" | "tr" | "bl" | "br";
}) {
  const transforms = {
    tl: "rotate(0)",
    tr: "rotate(90)",
    br: "rotate(180)",
    bl: "rotate(270)",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ opacity, transform: transforms[position] }}
    >
      <path d="M2 2 L16 2 L2 16 Z" fill="none" stroke={color} strokeWidth="1" />
      <path d="M2 2 L8 2 L2 8 Z" fill={color} opacity={0.5} />
      <circle cx="2" cy="2" r="2" fill={color} />
    </svg>
  );
}

export function FadeInView({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const dirMap = { up: [0, 30], down: [0, -30], left: [30, 0], right: [-30, 0], none: [0, 0] };
  const [x, y] = dirMap[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function GoldLine({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ height: 1, background: `linear-gradient(to right, transparent, ${GOLD}, transparent)` }}
    />
  );
}

export function SectionTag({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    null
  );
}

export function SectionHeading({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <h2
      className={className}
      style={{
        fontFamily: "'Playfair Display', serif",
        color: light ? TEXT_ON_DARK : DARK_BROWN,
        lineHeight: 1.3,
      }}
    >{children}</h2>
  );
}
