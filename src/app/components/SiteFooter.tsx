import { Mail, Phone, ExternalLink } from "lucide-react";
import { GOLD, GOLD_LIGHT, TEXT_ON_DARK, OrnamentalDivider } from "./Ornaments";

const FOOTER_BG = "#1A0F08";

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: FOOTER_BG, padding: "60px 20px 32px" }}>
      <div className="max-w-5xl mx-auto">
        <OrnamentalDivider light className="mb-12" />

        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: GOLD,
                fontSize: "1.1rem",
                marginBottom: "6px",
              }}
            >
              Safe Sea Group
            </p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "rgba(245,237,216,0.5)",
                fontSize: "0.82rem",
                lineHeight: 1.7,
              }}
            >
              Bhojpuri Essay Competition 2026<br />
              A social and cultural initiative
            </p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "rgba(245,237,216,0.3)",
                fontSize: "0.75rem",
                marginTop: "12px",
                fontStyle: "italic",
              }}
            >
              Mumbai, India &nbsp;·&nbsp; Est. 2006
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: GOLD_LIGHT,
                marginBottom: "14px",
                fontWeight: 700,
                opacity: 0.8,
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="mailto:bhojpuriessay@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(245,237,216,0.65)",
                  textDecoration: "none",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  transition: "all 0.2s",
                }}
                className="hover:opacity-100"
              >
                <Mail size={14} style={{ color: GOLD, flexShrink: 0 }} />
                bhojpuriessay@gmail.com
              </a>
              <a
                href="tel:+918484926925"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(245,237,216,0.65)",
                  textDecoration: "none",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  transition: "all 0.2s",
                }}
                className="hover:opacity-100"
              >
                <Phone size={14} style={{ color: GOLD, flexShrink: 0 }} />
                +91 8484926925
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: GOLD_LIGHT,
                marginBottom: "14px",
                fontWeight: 700,
                opacity: 0.8,
              }}
            >
              Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="https://safeseagroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(245,237,216,0.65)",
                  textDecoration: "none",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  transition: "all 0.2s",
                }}
                className="hover:opacity-100"
              >
                <ExternalLink size={14} style={{ color: GOLD, flexShrink: 0 }} />
                Official Competition Page
              </a>
              <a
                href="mailto:bhojpuriessay@gmail.com?subject=Essay Submission – Bhojpuri Essay Competition 2026"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(245,237,216,0.65)",
                  textDecoration: "none",
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  transition: "all 0.2s",
                }}
                className="hover:opacity-100"
              >
                <Mail size={14} style={{ color: GOLD, flexShrink: 0 }} />
                Submit Your Essay
              </a>
            </div>
          </div>
        </div>

        <OrnamentalDivider light className="mb-8" />

        {/* Bottom */}
        <div className="text-center">
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "rgba(245,237,216,0.35)",
              fontSize: "0.82rem",
              lineHeight: 1.8,
            }}
          >
            Thank you for supporting students, language, culture, and public engagement.
          </p>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "rgba(245,237,216,0.2)",
              fontSize: "0.72rem",
              marginTop: "12px",
              letterSpacing: "0.06em",
            }}
          >
            © 2026 Safe Sea Group &nbsp;·&nbsp; Bhojpuri Essay Competition 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
