import ListItemIndex from "@/components/ListItemIndex";
import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const PatentList = [
  {
    title:
      "Medicinal composition having antibiotic, anti-inflammatory, and wound healing activity",
    number: "9980998",
    abstract:
      "A medicinal composition having antibiotic, anti-inflammatory, and wound healing activity that inhibits the growth of pathogens by means of a synergistic association of plant extracts of Matricaria recutita, Psidium guajava L., and Plantago major L., and, optionally, Casearia sylvestris SW, for topical application either in the form of biofilm or in the solid dosage form without the use of preservatives is described.",
    type: "Grant",
    filed: "October 7, 2015",
    date: "May 29, 2018",
    assignee: "BRAERG - GRUPO BRASILEIRO DE PESQUISAS ESPECIALIZADAS LTDA.",
    inventors: ["Douglas Spalato Marques", "Marcos Spalato Marques"],
  },
  {
    title:
      "Medicinal composition having antibiotic, anti-inflammatory, and wound healing activity",
    number: "20170100443",
    abstract:
      "A medicinal composition having antibiotic, anti-inflammatory, and wound healing activity that inhibits the growth of pathogens by means of a synergistic association of plant extracts of Matricaria recutita, Psidium guajava L., and Plantago major L., and, optionally, Casearia sylvestris SW, for topical application either in the form of biofilm or in the solid dosage form without the use of preservatives is described.",
    type: "Application",
    filed: "October 7, 2015",
    date: "April 13, 2017",
    assignee: null,
    inventors: ["Douglas Spalato Marques", "Marcos Spalato Marques"],
  },
  {
    title:
      "Method for obtaining biofuel from lignocellulosic and/or amylaceous biomass",
    number: "20150322463",
    abstract:
      "A method for obtaining biofuel from lignocellulosic and/or amylaceous biomass through fermentation in at least one step by using a consortium of microorganisms in order to obtain sugars that later will be converted into alcohols by using environmentally friendly and economically viable methods, as opposed to conventional acid and enzymatic hydrolysis.",
    type: "Application",
    filed: "December 3, 2013",
    date: "November 12, 2015",
    assignee: null,
    inventors: ["Douglas Spalato Marques", "Marcos Spalato Marques"],
  },
];

export default function Patents() {
  return (
    <PageWrapper>
      <Section
        hero
        className="justify-center md:justify-start items-start pt-20 flex-col gap-20 md:gap-20 pb-10 px-0 sm:px-0"
      >
        <h1 className="px-5 sm:px-20 font-overused-grotesk text-5xl font-semibold tracking-tighter text-black md:text-7xl text-pretty drop-shadow-2xl max-w-5xl">
          Temos autores de
          <br />
          diversas <span className="font-thin">patentes</span> como:
        </h1>
        <div className="flex flex-col gap-0 w-full">
          {PatentList.map((p, i) => (
            <div
              className={cn(
                "w-full flex flex-col pt-8 pb-10 gap-6 px-5 sm:px-20"
              )}
            >
              <ListItemIndex index={i} total={PatentList.length} />
              <h1 className="text-start font-overused-grotesk text-4xl font-[400]">
                {p.title}
              </h1>
              <h2 className="[font-variation-settings:'slnt'_-5] text-pretty max-w-xl font-overused-grotesk tracking text-lg font-[370]">
                {p.abstract}
              </h2>
              <h3 className="text-[#999] text-base">
                por {p.inventors.join(", ")}
              </h3>
            </div>
          ))}
        </div>
        <div className="hidden flex flex-col w-full">
          {PatentList.map((p) => (
            <div className="w-full border-t border-default-border gap-2 flex flex-col p-8 pl-1">
              <h2 className="text-4xl font-bold font-overused-grotesk tracking-tight mb-2">
                {p.title}
              </h2>
              <p className="font-overused-grotesk text-xl tracking-tight max-w-4xl">
                <b>Abstract:</b> {p.abstract}
              </p>
              <p className="font-overused-grotesk text-xl tracking-tight">
                <b>Number:</b> {p.number}
              </p>
              <p className="font-overused-grotesk text-xl tracking-tight">
                <b>Type:</b> {p.type}
              </p>
              <p className="font-overused-grotesk text-xl tracking-tight">
                <b>Filed:</b> {p.filed}
              </p>
              <p className="font-overused-grotesk text-xl tracking-tight">
                <b>Date:</b> {p.date}
              </p>
              <p className="font-overused-grotesk text-xl tracking-tight">
                <b>Assignee:</b> {p.assignee ?? "N/A"}
              </p>
              <p className="font-overused-grotesk text-xl tracking-tight">
                <b>Inventors:</b> {p.inventors.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
