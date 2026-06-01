import { MapPin, Phone, Globe, Linkedin, User } from "lucide-react";
import { GOLD, GOLD_LIGHT, PARCHMENT, DARK_BROWN, MED_BROWN, TEXT_ON_DARK, FadeInView, SectionTag, SectionHeading, OrnamentalDivider } from "./Ornaments";

export function AboutSection() {
  return (
    <section style={{ backgroundColor: PARCHMENT, padding: "80px 20px" }}>
      <div className="max-w-5xl mx-auto">
        <OrnamentalDivider className="mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - identity */}
          <FadeInView direction="left">
            <SectionTag>Organised By</SectionTag>
            <SectionHeading className="text-3xl sm:text-4xl mb-4">
              About Safe Sea Group
            </SectionHeading>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: MED_BROWN,
                lineHeight: 1.85,
                fontSize: "0.97rem",
                marginBottom: "20px",
              }}
            >Safe Sea Group is a global shipping and logistics group with its office in Mumbai, India. Operating internationally since 2006, the group is committed to excellence in maritime services.</p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: MED_BROWN,
                lineHeight: 1.85,
                fontSize: "0.97rem",
              }}
            >
              The Bhojpuri Essay Competition 2026 is an initiative under the group's social and
              cultural engagement programme, aimed at supporting language rights, student expression,
              and public discourse on constitutional matters.
            </p>

            {/* Chairman */}
            <div
              style={{
                marginTop: "28px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                border: `1px solid rgba(201,162,39,0.3)`,
                borderRadius: "4px",
                backgroundColor: "rgba(201,162,39,0.05)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `1.5px solid ${GOLD}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: GOLD,
                }}
              >
                <User size={22} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: DARK_BROWN,
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Dr. S. V. Anchan
                </p>
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: MED_BROWN,
                    fontWeight: 700,
                  }}
                >
                  Chairman, Safe Sea Group
                </p>
              </div>
            </div>
          </FadeInView>

          {/* Right - contact details */}
          <FadeInView direction="right" delay={0.1}>
            <div
              style={{
                border: `1px solid rgba(201,162,39,0.3)`,
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Header bar */}
              <div
                style={{
                  backgroundColor: "#2C1810",
                  padding: "16px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: GOLD_LIGHT,
                    fontWeight: 700,
                  }}
                >
                  Contact &amp; Details
                </p>
              </div>

              {/* Contact items */}
              <div style={{ backgroundColor: "rgba(201,162,39,0.03)" }}>
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Postal Address",
                    value: "Business Square, A-502, 5th Floor, A Wing, Chakala, Andheri (East), Mumbai, Maharashtra 400093",
                    href: undefined,
                  },
                  {
                    icon: <Phone size={18} />,
                    label: "Contact Number",
                    value: "+91 8484926925",
                    href: "tel:+918484926925",
                  },
                  {
                    icon: <Globe size={18} />,
                    label: "Website",
                    value: "safeseagroup.com",
                    href: "https://safeseagroup.com/",
                  },
                  {
                    icon: <Linkedin size={18} />,
                    label: "LinkedIn",
                    value: "linkedin.com/company/safeseagroup",
                    href: "https://www.linkedin.com/company/safeseagroup/",
                  },
                ].map((item, i, arr) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "18px 24px",
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                      boxShadow: i < arr.length - 1 ? "0 1px 0 rgba(201,162,39,0.15)" : "none",
                    }}
                  >
                    <div
                      style={{ color: GOLD, flexShrink: 0, marginTop: "2px" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontSize: "0.68rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: MED_BROWN,
                          marginBottom: "3px",
                          fontWeight: 700,
                        }}
                      >
                        {item.label === "Contact Number" ? "For any queries" : item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "'Lato', sans-serif",
                            color: DARK_BROWN,
                            fontSize: "0.9rem",
                            textDecoration: "underline",
                            textDecorationColor: "rgba(123,26,46,0.3)",
                            textUnderlineOffset: "3px",
                            transition: "all 0.2s",
                          }}
                          className="hover:opacity-70"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontFamily: "'Lato', sans-serif",
                            color: DARK_BROWN,
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
        <OrnamentalDivider className="mt-12" />
      </div>
    </section>
  );
}
