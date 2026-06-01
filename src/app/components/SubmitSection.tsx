import { Mail, Send, ArrowRight } from "lucide-react";
import { GOLD, DARK_BROWN, MED_BROWN, FadeInView, SectionTag, SectionHeading } from "./Ornaments";

export function SubmitSection() {
  return (
    <section style={{ backgroundColor: "#3D2B1F", padding: "80px 20px" }}>
      <div className="max-w-3xl mx-auto text-center">
        <FadeInView direction="none">
          <SectionTag light>Ready to Participate?</SectionTag>
          <SectionHeading light className="text-3xl sm:text-4xl mb-4">
            Submit Your Essay
          </SectionHeading>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(245,237,216,0.65)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              marginBottom: "40px",
            }}
          >
            Send your essay as an attachment to the official competition email address below.
            Essays are accepted in <strong style={{ color: "rgba(245,237,216,0.9)" }}>Bhojpuri, Hindi, and English</strong>.
            Please mention your name, institution, and contact number in the email body.
          </p>
        </FadeInView>

        {/* Email display */}
        <FadeInView direction="up" delay={0.1}>
          <div
            style={{
              border: `1.5px solid rgba(201,162,39,0.45)`,
              borderRadius: "6px",
              padding: "32px 28px",
              backgroundColor: "rgba(201,162,39,0.05)",
              marginBottom: "28px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "12px",
                color: GOLD,
              }}
            >
              <Mail size={32} />
            </div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,162,39,0.7)",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Official Submission Email
            </p>
            <a
              href="mailto:bhojpuriessay@gmail.com"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F5EDD8",
                fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                textDecoration: "underline",
                textDecorationColor: "rgba(201,162,39,0.4)",
                textUnderlineOffset: "4px",
                transition: "all 0.2s",
              }}
              className="hover:opacity-80"
            >
              bhojpuriessay@gmail.com
            </a>
          </div>
        </FadeInView>

        {/* CTA button */}
        <FadeInView direction="up" delay={0.2}>
          <a
            href="mailto:bhojpuriessay@gmail.com?subject=Essay Submission – Bhojpuri Essay Competition 2026"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: GOLD,
              color: DARK_BROWN,
              padding: "16px 36px",
              borderRadius: "4px",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            className="hover:brightness-110 hover:scale-105 active:scale-100"
          >
            <Send size={18} />
            Submit Your Essay
            <ArrowRight size={16} />
          </a>
        </FadeInView>

        {/* Guidelines */}
        <FadeInView direction="up" delay={0.3}>
          <div
            style={{
              marginTop: "36px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              ["Language", "Bhojpuri / Hindi / English"],
              ["Format", "Attached document (PDF/Word)"],
              ["Deadline", "30 June 2026"],
              ["Word Limit", "Up to 3,000 words"],
            ].map(([label, value]) => (
              null
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
