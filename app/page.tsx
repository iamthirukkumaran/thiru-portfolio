import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";
import { EducationList, ExperienceList } from "@/components/ExperienceList";
import Exploring from "@/components/Exploring";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Internet from "@/components/Internet";
import MoreWork from "@/components/MoreWork";
import Intro from "@/components/Intro";
import Principles from "@/components/Principles";
import ProjectList from "@/components/ProjectList";
import Section from "@/components/Section";
import Stack from "@/components/Stack";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:border focus:border-line focus:bg-white focus:px-3 focus:py-1.5 focus:text-[13px]"
      >
        Skip to content
      </a>

      <span id="top" />
      <Header />

      <main id="main" className="mx-auto max-w-wide px-6 pb-4">
        <Intro />

        <div className="mt-16 space-y-14 sm:mt-20 sm:space-y-16">
          <Section label="Experience">
            <ExperienceList />
          </Section>

          <Section label="Education">
            <EducationList />
          </Section>

          <Section id="work" label="Recent Work">
            <ProjectList />
            <MoreWork />
          </Section>

          <Section label="Things I'm exploring">
            <Exploring />
          </Section>

          <Section label="Beyond the screen">
            <Beyond />
          </Section>

          <Section label="A few things I believe">
            <Principles />
          </Section>

          <Section label="Technology & tools">
            <Stack />
          </Section>

          <Section label="Around the internet">
            <Internet />
          </Section>

          <Contact />
        </div>

        <Footer />
      </main>
    </>
  );
}
