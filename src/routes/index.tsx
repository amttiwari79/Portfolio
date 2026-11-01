import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/components/portfolio/content";
import { Header, ScrollProgress } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import {
  Contact,
  Experience,
  Expertise,
  Footer,
  Metrics,
  Overview,
  Principles,
  Resume,
  Solutions,
} from "@/components/portfolio/sections";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Database Architect and Senior Backend Engineer",
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin],
  worksFor: {
    "@type": "Organization",
    name: "ESP Softtech Pvt. Ltd.",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "C-DAC Pace" },
    { "@type": "CollegeOrUniversity", name: "Devi Ahilya Vishwavidyalaya" },
  ],
  knowsLanguage: ["English", "Hindi"],
};

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <Overview />
        <Metrics />
        <Expertise />
        <Experience />
        <Solutions />
        <Principles />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
