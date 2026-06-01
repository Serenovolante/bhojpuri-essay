import { Users, BookOpen, Globe, Megaphone, School, MessageCircle, ClipboardList } from "lucide-react";
import { GOLD, DARK_BROWN, MED_BROWN, TEXT_ON_DARK, FadeInView, SectionTag, SectionHeading } from "./Ornaments";

const SECTION_BG = "#2C1810";

const groups = [
  { icon: <Users size={20} />, label: "Students", desc: "All undergraduate and postgraduate students" },
  { icon: <School size={20} />, label: "Faculty Members", desc: "Teaching and academic staff" },
  { icon: <BookOpen size={20} />, label: "Language & Literature Departments", desc: "Hindi, Bhojpuri, Languages, Social Sciences, Humanities" },
  { icon: <Globe size={20} />, label: "Literary Associations", desc: "Institutional literary bodies and student clubs" },
  { icon: <MessageCircle size={20} />, label: "WhatsApp Groups", desc: "Institutional and departmental groups" },
  { icon: <ClipboardList size={20} />, label: "Notice Boards", desc: "Physical and digital noticeboards across campus" },
];

export function CirculateSection() {
  return (
    <section style={{ backgroundColor: SECTION_BG, padding: "80px 20px" }}>
      <div className="max-w-5xl mx-auto">
        <FadeInView direction="none">
          <div className="text-center mb-12">
            <SectionTag light>For Institutions &amp; Colleges</SectionTag>
            <SectionHeading light className="text-3xl sm:text-4xl mb-4">
              Request for Circulation
            </SectionHeading>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "rgba(245,237,216,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >We respectfully request you to kindly circulate this notice among the following groups and channels. This competition is designed for students and young voices across India, and wide circulation ensures maximum participation.</p>
          </div>
        </FadeInView>

        {/* Groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {groups.map((group, i) => (
            <FadeInView key={group.label} direction="up" delay={i * 0.07}>
              <div
                style={{
                  border: `1px solid rgba(201,162,39,0.2)`,
                  borderRadius: "4px",
                  padding: "20px",
                  backgroundColor: "rgba(201,162,39,0.04)",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  height: "100%",
                  transition: "all 0.2s",
                }}
                className="hover:bg-amber-900/20"
              >
                <div
                  style={{
                    color: GOLD,
                    flexShrink: 0,
                    marginTop: "2px",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: `1px solid rgba(201,162,39,0.35)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {group.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: TEXT_ON_DARK,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      marginBottom: "3px",
                    }}
                  >
                    {group.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: "rgba(245,237,216,0.5)",
                      fontSize: "0.8rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {group.desc}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Call to share banner */}
        <FadeInView direction="up" delay={0.3}>
          
        </FadeInView>
      </div>
    </section>
  );
}
