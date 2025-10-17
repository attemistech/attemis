import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/Section";

export default function About() {
  return (
    <PageWrapper>
      <Section hero>
        <h1 className="text-6xl font-black leading-tighter tracking-tighter text-black md:text-7xl text-center md:text-left drop-shadow-2xl">
          Sobre
        </h1>
      </Section>
    </PageWrapper>
  );
}
