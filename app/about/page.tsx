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
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row gap-4 rounded-4xl _max-w-lg items-center">
            <h2 className="text-start font-overused-grotesk text-4xl md:text-5xl font-semibold leading-tighter tracking-tighter">
              <span className="font-instrument-serif">"</span>atto
              <span className="font-instrument-serif">"</span>
              {"  —  "}
              <span className="text-pretty text-black/60 font-overused-grotesk font-[400] tracking-tighter pl-1">
                Do italiano ou latim, significa ação, ato ou gesto intencional.
              </span>
            </h2>
          </div>
          <div className="flex flex-row gap-4 rounded-4xl _max-w-lg items-center">
            <h2 className="text-start font-overused-grotesk text-4xl md:text-5xl font-semibold leading-tighter tracking-tighter">
              <span className="font-instrument-serif">"</span>emis
              <span className="font-instrument-serif">"</span>
              {"  —  "}
              <span className="text-pretty text-black/60 font-overused-grotesk font-[400] tracking-tighter pl-1">
                Emissário, alguém que leva algo adiante, propaga ou transmite.
              </span>
            </h2>
          </div>
        </div>
      </Section>
      <Section className="flex flex-col gap-10 items-start py-20">
        <h1 className="font-overused-grotesk w-full text-3xl font-[400] tracking-tight text-black/70 md:text-5xl text-pretty drop-shadow-2xl max-w-5xl">
          A <span className="font-bold text-black">Attemis Tecnologia</span> é a
          única empresa na América Latina com atuação integrada em pesquisa,
          desenvolvimento e aplicação de tecnologias de ponta nas áreas de
          biotecnologia, farmacologia, engenharia de materiais, tratamento de
          resíduos industriais e polímeros avançados.
        </h1>
        <h1 className="font-overused-grotesk w-full text-3xl font-[400] tracking-tight text-black/70 md:text-5xl text-pretty drop-shadow-2xl max-w-5xl">
          Com infraestrutura própria de pesquisa e parcerias estratégicas, somos
          referência em transformar ciência em soluções industriais de alto
          impacto, com agilidade, rigor técnico e inovação constante.
        </h1>
      </Section>
    </PageWrapper>
  );
}
