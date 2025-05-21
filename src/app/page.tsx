import {
  Hero,
  AboutSection,
  ServicesSection,
  TeamSection,
  TestimonialsSection,
  CtaSection,
  BlogSection,
  PracticeAreasSection,
  FaqSection,
  CTAServices,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      {/* <TeamSection /> */}
      <PracticeAreasSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <CTAServices />
    </>
  );
}
