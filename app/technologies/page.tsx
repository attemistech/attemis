import { LiquidEffectBackground } from "@/components/LiquidCard";
import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const TechnologyCards = [
  {
    title:
      "Tratamento de resíduos gerados pela indústria produtora de tintas e vernizes.",
    description:
      "Processo capaz de tratar os resíduos gerados pelas industrias produtoras de tintas e vernizes, resultando em água pronta para reuso e recuperando os pigmentos presentes para posterior reutilização.",
  },
  {
    title: "Recuperação de polímeros de baixo peso molecular",
    description:
      "Tecnologia de extrusão reativa desenvolvida para aumento do peso molecular de polímeros virgens e/ou reciclados, a fim de melhorar suas características mecânicas e diversificar seu leque de aplicações.",
  },
  {
    title: "Desenvolvimento e síntese de aditivos para indústria plástica",
    description:
      "Desenvolvimento e síntese de compostos nucleantes, anti-nucleantes e compatibilizantes para termoplásticos.",
  },
  {
    title: "Processo de reciclagem de polipropileno homopolímero",
    description:
      "Processo de reciclagem resíduos de polipropileno homopolímero pós-industria, resultando em grão de alto peso molecular.",
  },
  {
    title: "Processo de síntese de EPDM via polimerização em estado sólido",
    description:
      "Processo de baixo custo de síntese de EPDM através da polimerização em estado sólido de EPM.",
  },
  {
    title: "Bioativos para estimulo de crescimento de cultivares",
    description:
      "Bioativos desenvolvidos especificamente para acelerarem a multiplicação celular de plantas monocotiledôneas.",
  },
  {
    title: "Bioativos para controle de pragas em cultivares",
    description:
      "Bioativos desenvolvidos especificamente para controle de pragas causadas por microrganismos, sejam eles fungos ou bactérias.",
  },
  {
    title: "Desenvolvimento de polímeros especiais",
    description:
      " Desenvolvimento de polímeros especiais para aplicações diversas, incluindo impressão 3D, embalagens e filamentos de uso gráfico.",
  },
  {
    title: "Encapsulamento para conservação de frutos e sementes",
    description:
      "Biofilme capaz de encapsular frutos e sementes para aumentar seu tempo de prateleira.",
  },
  {
    title: "Desenvolvimento de novas substâncias antibióticas",
    description:
      "Isolamento e caracterização de novas substâncias antibióticas produzidas por fungos filamentosos.",
  },
  {
    title: "Bioativos para estimulo de crescimento de cultivares",
    description:
      "Bioativos desenvolvidos especificamente para acelerarem a multiplicação celular de plantas monocotiledôneas.",
  },
  {
    title: "Desenvolvimento de medicamentos fitoterápicos",
    description:
      " Extração de princípios ativos fitoterápicos para formulação de composições medicamentosas",
  },
  {
    title:
      " Desenvolvimento de biocompostos através de processos fermentativos",
    description:
      " Desenvolvimento de processos biotecnológicos para produção de substâncias de interesse industrial.",
  },
  {
    title:
      "Tratamento de água residual de processo de lavagem de garrafas pós-consumo",
    description:
      "Processo de tratamento de água residual de lavagem de garrafas PET pós consumo com contaminantes orgânicos e inorgânicos.",
  },
  {
    title: "Metodologias para identificação e quantificação de contaminantes",
    description:
      "Desenvolvimento de sensores para detecção e quantificação de contaminantes específicos.",
  },
  {
    title: "Processo de produção biotecnológica de isopreno",
    description:
      "Processo biotecnológico para produção de isopreno em biorreatores.",
  },
  {
    title: "Despolimerização de poliuretano",
    description:
      "Processo biotecnológico de despolimerização do poliuretano, resultando na obtenção de monômeros de isocianatos e polióis que podem ser polimerizados novamente, gerando novas moléculas de poliuretano.​ ",
  },
  {
    title: "Multiplicação de microrganismos para uso industrial",
    description:
      "Processos fermentativos em biorreatores para multiplicação de microrganismos de interesse industrial.",
  },
];

export default function Tecnologies() {
  return (
    <PageWrapper>
      <Section
        hero
        className="justify-start items-start pt-20 flex-col gap-20 md:gap-20 pb-10 px-0 sm:px-0 md:px-0"
      >
        <h1 className="px-5 sm:px-20 font-overused-grotesk text-5xl font-semibold tracking-tighter text-black md:text-7xl text-pretty drop-shadow-2xl max-w-5xl">
          Selecionamos algumas de nossas principais{" "}
          <span className="font-thin">tecnologias</span>.
        </h1>
        <div className="flex flex-col gap-0 w-full">
          {TechnologyCards.map((t, i) => (
            <div className="w-full flex flex-col pt-8 pb-10 gap-6 px-5 sm:px-20">
              <div className="h-fit w-full md:max-w-xs flex flex-row items-center gap-2">
                <h3 className="font-geist-mono text-[#aaa] tracking-wide text-base max-w-xl">
                  {String(i + 1).padStart(
                    String(TechnologyCards.length).length,
                    "0"
                  )}{" "}
                </h3>
                <div className="h-px w-full bg-[#ddd]" />
              </div>
              <h1 className="text-start font-overused-grotesk text-4xl font-[400]">
                {t.title}
              </h1>
              <h2 className="text-pretty max-w-xl tracking-tighter text-2xl font-[350]">
                {t.description}
              </h2>
            </div>
          ))}
        </div>
        <div className="hidden _grid grid-cols-1 grid-flow-row md:grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] auto-rows-auto md:flex-row gap-10 w-full">
          {TechnologyCards.map((t) => (
            <div className="relative hover:scale-[1.02] transition-all shadow-lg p-8 flex flex-col gap-6 rounded-4xl flex-1 border border-default-border min-w-0">
              <LiquidEffectBackground />
              <h2 className="text-start font-overused-grotesk text-3xl font-bold leading-tighter tracking-tight w-full">
                {t.title}
              </h2>
              <div className="flex-1" />
              <p className="text-pretty max-w-xl font-overused-grotesk font-regular tracking-tight text-xl">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
