import { Phone, Heart } from "lucide-react";
import { GOLD, PARCHMENT, DARK_BROWN, MED_BROWN, FadeInView, SectionTag, SectionHeading, OrnamentalDivider } from "./Ornaments";

export function SupportSection() {
  return (
    <section style={{ backgroundColor: PARCHMENT, padding: "80px 20px" }}>
      <div className="max-w-3xl mx-auto text-center">
        <OrnamentalDivider className="mb-12" />
        <FadeInView direction="none">
          <SectionTag>Voice Your Support</SectionTag>
          <SectionHeading className="text-3xl sm:text-4xl mb-4">
            Support the Initiative
          </SectionHeading>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: MED_BROWN,
              fontSize: "0.97rem",
              lineHeight: 1.8,
              marginBottom: "40px",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >Individuals wishing to express their support for the inclusion of Bhojpuri in the Eighth Schedule of the Constitution of India may give a <strong style={{ color: DARK_BROWN }}>missed call</strong> on the number below. No action is required beyond the call - your support is registered.</p>
        </FadeInView>

        {/* Missed call card */}
        <FadeInView direction="up" delay={0.1}>
          <div
            style={{
              display: "inline-block",
              border: `1.5px solid rgba(201,162,39,0.4)`,
              borderRadius: "6px",
              padding: "36px 48px",
              backgroundColor: "rgba(201,162,39,0.06)",
              position: "relative",
            }}
          >
            {/* Top decorative bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "20%",
                right: "20%",
                height: "2px",
                backgroundColor: GOLD,
                borderRadius: "0 0 2px 2px",
                opacity: 0.7,
              }}
            />
            <div style={{ color: GOLD, display: "flex", justifyContent: "center", marginBottom: "12px" }}>
              <Phone size={32} />
            </div>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: MED_BROWN,
                marginBottom: "12px",
                fontWeight: 700,
              }}
            >
              Missed Call Number
            </p>
            <a
              href="tel:+919175148038"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: DARK_BROWN,
                fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
                textDecoration: "none",
                fontWeight: 700,
                display: "block",
                letterSpacing: "0.04em",
              }}
            >
              +91 9175148038
            </a>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.78rem",
                color: MED_BROWN,
                marginTop: "10px",
                fontStyle: "italic",
              }}
            >Give a missed call — no charge, no commitment, just support.</p>
          </div>
        </FadeInView>

        {/* Heart note */}
        <FadeInView direction="up" delay={0.2}>
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Heart size={14} style={{ color: "#7B1A2E" }} />
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.8rem",
                color: MED_BROWN,
                fontStyle: "italic",
              }}
            >
              Every missed call is a voice for Bhojpuri's constitutional recognition.
            </p>
            <Heart size={14} style={{ color: "#7B1A2E" }} />
          </div>
        </FadeInView>
        <OrnamentalDivider className="mt-12" />
      </div>
    </section>
  );
}
