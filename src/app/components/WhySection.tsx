import image_Exploring_the_Rich_Culture_and_Traditions_of_the_Bhojpuri_Region_A_2025_Guide_jpeg from '@/imports/Exploring-the-Rich-Culture-and-Traditions-of-the-Bhojpuri-Region-A-2025-Guide.jpeg.jpg'
import { GOLD, PARCHMENT, DARK_BROWN, MED_BROWN, OrnamentalDivider, FadeInView, SectionTag, SectionHeading } from "./Ornaments";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const STUDENTS_IMG =
  "https://images.unsplash.com/photo-1680084521738-87a53d7a50d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800";

export function WhySection() {
  return (
    <section style={{ backgroundColor: PARCHMENT, padding: "80px 20px" }}>
      <div className="max-w-5xl mx-auto">
        <OrnamentalDivider className="mb-12" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <FadeInView direction="left">
            <SectionTag>About This Initiative</SectionTag>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: DARK_BROWN,
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                lineHeight: 1.25,
                marginBottom: "24px",
                fontWeight: 400,
              }}
            >
              About the Initiative
            </p>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                color: MED_BROWN,
                lineHeight: 1.85,
                fontSize: "0.97rem",
              }}
            >
              <p className="mb-4">
                Bhojpuri is one of India's most widely spoken languages, with a rich literary, cultural,
                and historical legacy.
              </p>
              <p className="mb-4">
                Through this competition, we aim to encourage students to engage with an important
                constitutional and cultural subject, while promoting thoughtful research, writing, and
                public discourse.
              </p>
              <p>
                We hope this initiative contributes to greater awareness of Bhojpuri's significance and
                inspires young voices to participate in the conversation surrounding its future.
              </p>
            </div>
          </FadeInView>

          {/* Image */}
          <FadeInView direction="right" delay={0.15}>
            <div style={{ position: "relative", borderRadius: "2px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "8px",
                  border: "1px solid rgba(201,162,39,0.4)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              <ImageWithFallback
                src={image_Exploring_the_Rich_Culture_and_Traditions_of_the_Bhojpuri_Region_A_2025_Guide_jpeg}
                alt="Students engaged in academic activity at an Indian institution"
                style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "linear-gradient(to top, rgba(44,24,16,0.4) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </FadeInView>
        </div>
        <OrnamentalDivider className="mt-12" />
      </div>
    </section>
  );
}
