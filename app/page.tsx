"use client";

import { ArrowUpRight } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";

import Card from "@/components/Card";
import GradientBlinds from "@/components/GradientBlinds";
import LiquidButton from "@/components/LiquidButton";
import { usePathname, useRouter } from "next/navigation";
import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/Section";

export default function Home() {
  const router = useRouter();

  return (
    <PageWrapper>
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center z-10 bg-transparent">
        <Section hero>
          <div className="relative z-10 flex w-full flex-col md:items-start items-center gap-8 text-center p-4 py-8">
            <h1 className="text-6xl font-regular leading-tighter tracking-tight text-black md:text-7xl text-center md:text-left drop-shadow-2xl font-overused-grotesk">
              Inovando rumo
              <br />
              ao{" "}
              <span className="font-unbounded italic font-extrabold tracking-tight">
                futuro.
              </span>
            </h1>
            <p className="font-overused-grotesk tracking-tight text-xl md:text-2xl text-black/80 max-w-2xl text-pretty md:text-left drop-shadow-lg">
              Desenvolvemos soluções com base científica, alto rigor técnico e
              aplicação real. Explore o que estamos criando para transformar o
              futuro da indústria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <LiquidButton
                variant="default"
                className="font-overused-grotesk rounded-full text-zinc-800 flex flex-row gap-3 tracking-tight text-xl"
                aria-label="Conheça nossas tecnologias"
                onClick={() => router.push("/technologies")}
              >
                Conheça nossas tecnologias
              </LiquidButton>
            </div>
          </div>
        </Section>
      </div>

      {/* Cards Section */}
      <Section className="flex-col gap-10 hidden">
        <h2 className="font-title text-4xl font-black leading-tighter tracking-tighter text-black md:text-5xl text-center md:text-left drop-shadow-2xl w-full">
          Bla bla bla...
        </h2>
        <div className="w-full flex flex-row gap-10">
          <Card
            title="Tecnologia aplicada com rigor técnico"
            subtitle="Desenvolvemos tecnologias próprias com foco em eficiência, segurança e escalabilidade. Nossos projetos abrangem desde compostos bioativos e polímeros especiais até soluções para o tratamento de resíduos industriais — sempre guiados por validação laboratorial e potencial de aplicação real."
            image="https://spalcindustrial.com.br/wp-content/uploads/2025/04/master_polymers_post1.png"
            href="/technologies"
          />
          <Card
            title="Especialistas em transformar ciência em soluções"
            subtitle="A Attemis é uma empresa de pesquisa e desenvolvimento focada em criar tecnologias inovadoras nas áreas de biotecnologia, farmacologia, engenharia de materiais e processos industriais. Atuamos desde a investigação científica até a aplicação prática, conectando conhecimento e mercado com agilidade e precisão."
            image="https://spalcindustrial.com.br/wp-content/uploads/2025/04/Laboratorio-geral-ATTEMIS-copiar-1024x576.webp"
            href="/about"
          />
          <Card
            title="Inovação reconhecida, protegida e certificada"
            subtitle="Possuimos patentes registradas que comprovam a originalidade e o impacto técnico de nossas soluções. Cada desenvolvimento é conduzido com foco na propriedade intelectual e na proteção estratégica de tecnologias com alto valor agregado."
            image="https://spalcindustrial.com.br/wp-content/uploads/2025/05/tecnologias.webp"
            href="/patents"
          />
        </div>
      </Section>
    </PageWrapper>
  );
}
