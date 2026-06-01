import { motion } from "motion/react";
import { ChevronDown, Download, Send } from "lucide-react";
import { GOLD, GOLD_LIGHT, TEXT_ON_DARK, CornerOrnament } from "./Ornaments";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBg from "@/imports/ChatGPT_Image_Jun_1__2026__02_39_32_PM.png";

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px 60px",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <ImageWithFallback
        src={heroBg}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(44,24,16,0.82) 0%, rgba(91,26,46,0.72) 45%, rgba(44,24,16,0.88) 100%)",
        }}
      />

      {/* Decorative border frame */}
      <div
        style={{
          position: "absolute",
          inset: "16px",
          border: `1px solid rgba(201,162,39,0.25)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: `1px solid rgba(201,162,39,0.12)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Corner ornaments */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => {
        const corners = { tl: "top-6 left-6", tr: "top-6 right-6", bl: "bottom-6 left-6", br: "bottom-6 right-6" };
        return (
          <div key={pos} className={`absolute ${corners[pos]} hidden sm:block`} style={{ pointerEvents: "none", zIndex: 2 }}>
            <CornerOrnament position={pos} size={36} color={GOLD} opacity={0.5} />
          </div>
        );
      })}

      {/* Central content */}
      <div className="relative text-center max-w-3xl mx-auto" style={{ zIndex: 2 }}>
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            border: `1px solid rgba(201,162,39,0.45)`,
            borderRadius: "999px",
            padding: "8px 16px",
            marginBottom: "24px",
            maxWidth: "90%",
            flexWrap: "nowrap",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: GOLD,
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "clamp(0.58rem, 1.8vw, 0.72rem)",
              letterSpacing: "0.08em",
              color: GOLD_LIGHT,
              textTransform: "uppercase",
              fontWeight: 700,
              whiteSpace: "nowrap",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Safe Sea Group · Official Announcement
          </span>
        </motion.div>

        {/* Decorative line above title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            height: 1,
            background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
            marginBottom: "20px",
          }}
        />

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: TEXT_ON_DARK,
            lineHeight: 1.2,
            marginBottom: "8px",
          }}
          className="text-4xl sm:text-5xl md:text-6xl"
        >
          Bhojpuri Essay
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: GOLD,
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
          className="text-4xl sm:text-5xl md:text-6xl"
        >
          Competition 2026
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            height: 1,
            background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
            marginBottom: "24px",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(245,237,216,0.9)",
            fontSize: "1.15rem",
            fontStyle: "italic",
            marginBottom: "8px",
          }}
        >
          A social and cultural initiative by Safe Sea Group
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontFamily: "'Lato', sans-serif",
            color: "rgba(245,237,216,0.65)",
            fontSize: "0.9rem",
            marginBottom: "40px",
          }}
        >
          Encouraging students to write on an important linguistic and constitutional subject.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10"
        >
          <a
            href="/notice.pdf"
            download="Bhojpuri-Essay-Competition-2026.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: `1.5px solid ${GOLD}`,
              color: GOLD,
              padding: "12px 24px",
              borderRadius: "4px",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            className="hover:bg-white/10 hover:scale-105 active:scale-100"
          >
            <Download size={16} />
            Download Notice PDF
          </a>
          <a
            href="mailto:bhojpuriessay@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: `1.5px solid rgba(245,237,216,0.4)`,
              color: TEXT_ON_DARK,
              padding: "12px 24px",
              borderRadius: "4px",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            className="hover:bg-white/10 hover:scale-105 active:scale-100"
          >
            <Send size={16} />
            Submit Essay
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            border: `1px solid rgba(201,162,39,0.2)`,
            borderRadius: "4px",
            padding: "16px 24px",
            display: "inline-block",
            backgroundColor: "rgba(44,24,16,0.45)",
          }}
        >
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(245,237,216,0.7)",
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              lineHeight: 1.9,
            }}
          >Essays accepted in <br /><strong style={{ color: TEXT_ON_DARK }}>Bhojpuri, Hindi, and English</strong></p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ zIndex: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ color: "rgba(201,162,39,0.5)" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
