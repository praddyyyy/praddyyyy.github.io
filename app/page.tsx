import AboutSection from "@/components/AboutSection/AboutSection";
import AchievementSection from "@/components/AchievementSection/AchievementSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import EducationSection from "@/components/EducationSection/EducationSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <AchievementSection /> */}
      <ContactSection />
    </Container>
  );
}
