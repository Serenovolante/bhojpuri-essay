import "../styles/fonts.css";
import { Hero } from "./components/Hero";
import { WhySection } from "./components/WhySection";
import { GlanceSection } from "./components/GlanceSection";
import { TopicSection } from "./components/TopicSection";
import { SubmitSection } from "./components/SubmitSection";
import { SupportSection } from "./components/SupportSection";
import { CirculateSection } from "./components/CirculateSection";
import { AboutSection } from "./components/AboutSection";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <main style={{ fontFamily: "'Lato', sans-serif", overflowX: "hidden" }}>
      <Hero />
      <WhySection />
      <GlanceSection />
      <TopicSection />
      <SubmitSection />
      <SupportSection />
      <CirculateSection />
      <AboutSection />
      <SiteFooter />
    </main>
  );
}
