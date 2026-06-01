import { GOLD, GOLD_LIGHT, MAROON, TEXT_ON_DARK, FadeInView, SectionTag, CornerOrnament } from "./Ornaments";

const SECTION_BG = "#FAF3E0";
const TOPIC_CARD_BG = "#7B1A2E";

export function TopicSection() {
  return (
    <section style={{ backgroundColor: SECTION_BG, padding: "80px 20px" }}>
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView direction="none">
          <SectionTag>The Essay Prompt</SectionTag>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#2C1810",
              lineHeight: 1.3,
              marginBottom: "12px",
            }}
            className="text-3xl sm:text-4xl mb-6"
          >
            Essay Topic
          </h2>
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              color: "#5C3D2E",
              fontSize: "0.9rem",
              marginBottom: "40px",
            }}
          >
            Participants may write in Bhojpuri, Hindi, or English on the following topic:
          </p>
        </FadeInView>

        {/* Main topic card */}
        <FadeInView direction="up" delay={0.1}>
          <div
            style={{
              backgroundColor: TOPIC_CARD_BG,
              borderRadius: "4px",
              padding: "48px 40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle background texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201,162,39,0.08) 0%, transparent 60%),
                  radial-gradient(circle at 80% 50%, rgba(201,162,39,0.06) 0%, transparent 60%)`,
                pointerEvents: "none",
              }}
            />

            {/* Outer border frame */}
            <div
              style={{
                position: "absolute",
                inset: "12px",
                border: `1px solid rgba(201,162,39,0.3)`,
                pointerEvents: "none",
              }}
            />

            {/* Corner ornaments */}
            <div style={{ position: "absolute", top: "12px", left: "12px" }}>
              <CornerOrnament position="tl" color={GOLD} opacity={0.55} size={28} />
            </div>
            <div style={{ position: "absolute", top: "12px", right: "12px" }}>
              <CornerOrnament position="tr" color={GOLD} opacity={0.55} size={28} />
            </div>
            <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
              <CornerOrnament position="bl" color={GOLD} opacity={0.55} size={28} />
            </div>
            <div style={{ position: "absolute", bottom: "12px", right: "12px" }}>
              <CornerOrnament position="br" color={GOLD} opacity={0.55} size={28} />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Hindi label */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "17px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: GOLD_LIGHT,
                  marginBottom: "16px",
                  fontWeight: 700,
                  opacity: 0.8,
                }}
              >
                हिन्दी में विषय
              </p>

              {/* Hindi title */}
              <p
                style={{
                  fontFamily: "'Noto Sans Devanagari', sans-serif",
                  color: TEXT_ON_DARK,
                  fontSize: "clamp(1.1rem, 3vw, 1.55rem)",
                  lineHeight: 1.6,
                  marginBottom: "32px",
                  fontWeight: 600,
                }}
              >
                संविधान की आठवीं अनुसूची में भोजपुरी को शामिल करने की आवश्यकता
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
                  marginBottom: "32px",
                  opacity: 0.45,
                }}
              />

              {/* English label */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "17px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: GOLD_LIGHT,
                  marginBottom: "16px",
                  fontWeight: 700,
                  opacity: 0.8,
                }}
              >
                Essay Topic in English
              </p>

              {/* English title */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: TEXT_ON_DARK,
                  fontSize: "clamp(1.05rem, 2.8vw, 1.45rem)",
                  lineHeight: 1.55,
                  fontStyle: "italic",
                }}
              >
                The Need for Inclusion of Bhojpuri in the Eighth Schedule of the Constitution of India
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Word count reminder */}
        <FadeInView direction="up" delay={0.2}>
          <div
            style={{
              marginTop: "24px",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              border: `1px solid rgba(123,26,46,0.25)`,
              borderRadius: "100px",
              backgroundColor: "rgba(123,26,46,0.05)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: MAROON,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.8rem",
                color: "#5C3D2E",
                letterSpacing: "0.04em",
              }}
            >
              Maximum word limit: <strong style={{ color: "#2C1810" }}>3,000 words</strong>
              &nbsp;·&nbsp; Deadline: <strong style={{ color: "#2C1810" }}>30 June 2026</strong>
            </span>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
