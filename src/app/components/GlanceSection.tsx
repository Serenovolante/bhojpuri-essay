import { ReactNode } from "react";
import { Calendar, AlignLeft, Globe, Trophy, Star, Award } from "lucide-react";
import { GOLD, GOLD_LIGHT, MED_BROWN, DARK_BROWN, TEXT_ON_DARK, FadeInView, SectionTag, SectionHeading, OrnamentalDivider } from "./Ornaments";

const SECTION_BG = "#2C1810";
const CARD_BG = "#FAF3E0";
const PRIZE_CARD_BG = "#3D2B1F";

interface InfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  delay?: number;
}

function InfoCard({ icon, label, value, delay = 0 }: InfoCardProps) {
  return (
    <FadeInView delay={delay} direction="up">
      <div
        style={{
          backgroundColor: CARD_BG,
          borderRadius: "4px",
          padding: "24px 20px",
          textAlign: "center",
          border: `1px solid rgba(201,162,39,0.25)`,
          height: "100%",
        }}
      >
        <div style={{ color: GOLD, marginBottom: "10px", display: "flex", justifyContent: "center" }}>
          {icon}
        </div>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: MED_BROWN,
            marginBottom: "6px",
            fontWeight: 700,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: DARK_BROWN,
            fontSize: "1.1rem",
            fontWeight: 600,
          }}
        >
          {value}
        </p>
      </div>
    </FadeInView>
  );
}

interface PrizeCardProps {
  rank: string;
  amount: string;
  icon: ReactNode;
  highlight?: boolean;
  delay?: number;
}

function PrizeCard({ rank, amount, icon, highlight = false, delay = 0 }: PrizeCardProps) {
  return (
    <FadeInView delay={delay} direction="up">
      <div
        style={{
          backgroundColor: highlight ? GOLD : PRIZE_CARD_BG,
          borderRadius: "4px",
          padding: "28px 20px",
          textAlign: "center",
          border: highlight ? "none" : `1px solid rgba(201,162,39,0.3)`,
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {highlight && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: DARK_BROWN,
            }}
          />
        )}
        <div
          style={{
            color: highlight ? DARK_BROWN : GOLD,
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          {icon}
        </div>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: highlight ? "#5C3D2E" : "rgba(201,162,39,0.7)",
            marginBottom: "6px",
            fontWeight: 700,
          }}
        >
          {rank}
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            color: highlight ? DARK_BROWN : TEXT_ON_DARK,
            fontSize: "1.5rem",
            fontWeight: 700,
          }}
        >
          {amount}
        </p>
      </div>
    </FadeInView>
  );
}

export function GlanceSection() {
  return (
    <section style={{ backgroundColor: SECTION_BG, padding: "80px 20px" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeInView direction="none">
          <div className="text-center mb-12">
            <SectionTag light>Competition Details</SectionTag>
            <SectionHeading light className="text-3xl sm:text-4xl mb-3">
              At a Glance
            </SectionHeading>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "rgba(245,237,216,0.55)",
                fontSize: "0.9rem",
              }}
            >
              Everything you need to know about the competition
            </p>
          </div>
        </FadeInView>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <InfoCard
            icon={<Calendar size={28} />}
            label="Last Date"
            value="30 June 2026"
            delay={0}
          />

          <InfoCard
            icon={<AlignLeft size={28} />}
            label="Maximum Length"
            value="3,000 Words"
            delay={0.05}
          />

          <InfoCard
            icon={<Globe size={28} />}
            label="Languages Accepted"
            value="Bhojpuri, Hindi, English"
            delay={0.1}
          />
        </div>

        {/* Divider */}
        <OrnamentalDivider light className="mb-10" />

        {/* Prize section label */}
        <FadeInView direction="none">
          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: GOLD_LIGHT,
              textAlign: "center",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Prize Money
          </p>
        </FadeInView>

        {/* Prize cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <PrizeCard rank="Second Prize" amount="₹21,000" icon={<Trophy size={28} />} delay={0.05} />
          <PrizeCard rank="First Prize" amount="₹31,000" icon={<Award size={32} />} highlight delay={0} />
          <PrizeCard rank="Third Prize" amount="₹11,000" icon={<Star size={28} />} delay={0.1} />
        </div>

        {/* Encouragement prizes */}
        <FadeInView delay={0.15} direction="up">
          <div
            style={{
              border: `1px solid rgba(201,162,39,0.25)`,
              borderRadius: "4px",
              padding: "20px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "rgba(201,162,39,0.06)",
            }}
          >
            <div style={{ color: GOLD, flexShrink: 0 }}>
              <Star size={24} />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(201,162,39,0.7)",
                  marginBottom: "4px",
                  fontWeight: 700,
                }}
              >
                Encouragement Prizes
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: TEXT_ON_DARK,
                  fontSize: "1rem",
                }}
              >
                Five prizes of <strong style={{ color: GOLD }}>₹5,000 each</strong>
              </p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                borderLeft: "1px solid rgba(201,162,39,0.25)",
                paddingLeft: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(201,162,39,0.7)",
                  marginBottom: "4px",
                  fontWeight: 700,
                }}
              >
                Also Awarded
              </p>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: TEXT_ON_DARK,
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                <span className="hidden md:inline">
                  Participation & Appreciation Certificates
                </span>

                <span className="md:hidden">
                  Participation &
                  <br />
                  Appreciation
                  <br />
                  Certificates
                </span>
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
