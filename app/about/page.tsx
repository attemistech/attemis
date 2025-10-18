import { AnimatedScrollIndicator } from "@/components/AnimatedScrollIndicator";
import LiquidCard, { LiquidEffectBackground } from "@/components/LiquidCard";
import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/Section";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <PageWrapper>
      <Section
        hero
        className="relative justify-center items-start flex-col gap-10 md:gap-20 pb-10"
      >
        <h1 className="font-overused-grotesk text-4xl sm:text-5xl font-semibold tracking-tighter text-black md:text-7xl text-pretty drop-shadow-2xl max-w-6xl">
          O nome <span className="font-unbounded">Attemis</span> é uma{" "}
          <span className="font-thin">criação composta</span> que, segundo a
          explicação da própria marca, deriva de duas partes:
        </h1>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="relative shadow-lg p-8 flex flex-col gap-6 rounded-2xl flex-1 border border-default-border max-w-lg">
            <LiquidEffectBackground />
            <h2 className="text-start font-overused-grotesk text-6xl font-semibold leading-tighter tracking-tighter w-full">
              <span className="font-instrument-serif">"</span>atto
              <span className="font-instrument-serif">"</span>
            </h2>
            <p className="text-pretty text-black/70 max-w-xl font-overused-grotesk font-medium tracking-tight text-xl">
              Do italiano ou latim, significa ação, ato ou gesto intencional.
            </p>
          </div>
          <div className="relative shadow-lg p-8 flex flex-col gap-6 rounded-2xl flex-1 border border-default-border max-w-lg">
            <LiquidEffectBackground />
            <h2 className="text-start font-overused-grotesk text-6xl font-semibold leading-tighter tracking-tighter w-full">
              <span className="font-instrument-serif">"</span>emis
              <span className="font-instrument-serif">"</span>
            </h2>
            <p className="text-pretty text-black/70 max-w-xl font-overused-grotesk font-medium tracking-tight text-xl">
              Referência a emissário, alguém que leva algo adiante, propaga ou
              transmite.
            </p>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col gap-10 items-start">
        <h1 className="font-overused-grotesk w-full text-3xl font-medium tracking-tight text-black/70 md:text-5xl text-pretty drop-shadow-2xl max-w-5xl">
          A <span className="font-bold text-black">Attemis Tecnologia</span> é a
          única empresa na América Latina com atuação integrada em pesquisa,
          desenvolvimento e aplicação de tecnologias de ponta nas áreas de
          biotecnologia, farmacologia, engenharia de materiais, tratamento de
          resíduos industriais e polímeros avançados.
        </h1>
        <h1 className="font-overused-grotesk w-full text-3xl font-medium tracking-tight text-black/70 md:text-5xl text-pretty drop-shadow-2xl max-w-5xl">
          Com infraestrutura própria de pesquisa e parcerias estratégicas, somos
          referência em transformar ciência em soluções industriais de alto
          impacto, com agilidade, rigor técnico e inovação constante.
        </h1>
      </Section>
    </PageWrapper>
  );
}
