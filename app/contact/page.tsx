import LiquidButton from "@/components/LiquidButton";
import { PageWrapper } from "@/components/PageWrapper";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <PageWrapper className="md:flex-row flex-col pb-0">
      <Section
        hero
        className="justify-center items-center flex-col gap-20 md:gap-20"
      >
        <div className="w-full flex items-center justify-center py-16">
          <div className="w-full px-6 xl:px-0">
            <h2 className="mt-3 font-overused-grotesk text-6xl sm:text-6xl font-semibold tracking-tighter text-black md:text-7xl text-pretty drop-shadow-2xl max-w-6xl">
              Entre em <span className="font-thin">contato</span> conosco.
            </h2>
            <div className="mt-12 lg:mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-3 items-center">
                  <MailIcon />
                  <Link
                    className="text-xl"
                    href="mailto:douglas.spalato@attemistecnologia.com.br"
                  >
                    douglas.spalato@attemistecnologia.com.br
                  </Link>
                </div>
                <div className="flex flex-row gap-3 items-start">
                  <MapPinIcon />
                  <Link
                    className="text-xl"
                    href="https://map.google.com"
                    target="_blank"
                  >
                    Rua Anuar Dequech, n°350, galpão 11. Bairro Iporanga.
                    <br />
                    Sorocaba, SP, Brasil.
                  </Link>
                </div>
                <div className="flex flex-row gap-3 items-center hidden">
                  <PhoneIcon />
                  <Link
                    className="text-xl"
                    href="tel:douglas.spalato@attemistecnologia.com.br"
                  >
                    +1 (555) 000-0000
                  </Link>
                </div>
              </div>
              {/* Form */}
              <Card className="border border-default-border py-0 rounded-2xl shadow-lg">
                <CardContent className="p-6 md:p-8 font-overused-grotesk text-xl">
                  <form>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="col-span-2 sm:col-span-1">
                        <Label className="text-lg" htmlFor="firstName">
                          Primeiro nome
                        </Label>{" "}
                        <Input
                          placeholder="Primeiro nome"
                          id="firstName"
                          className="mt-2 bg-white h-10 shadow-none text-lg"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label className="text-lg" htmlFor="lastName">
                          Último nome
                        </Label>{" "}
                        <Input
                          placeholder="Último nome"
                          id="lastName"
                          className="mt-2 bg-white h-10 shadow-none text-lg"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label className="text-lg" htmlFor="email">
                          Email
                        </Label>{" "}
                        <Input
                          type="email"
                          placeholder="Email"
                          id="email"
                          className="mt-2 bg-white h-10 shadow-none text-lg"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label className="text-lg" htmlFor="message">
                          Mensagem
                        </Label>{" "}
                        <Textarea
                          id="message"
                          placeholder="Mensagem"
                          className="mt-2 bg-white shadow-none text-lg"
                          rows={6}
                        />
                      </div>
                      {/*}
                      <div className="col-span-2 flex items-center gap-2">
                        <Checkbox id="acceptTerms" className="bg-background" />
                        <Label htmlFor="acceptTerms" className="gap-0">
                          You agree to our
                          <Link href="#" className="underline ml-1">
                            terms and conditions
                          </Link>
                          <span>.</span>
                        </Label>
                      </div>
                      */}
                    </div>
                    <LiquidButton
                      size="xl"
                      className="w-full mt-6 rounded-full text-xl tracking-tight font-semibold font-overused-grotesk"
                    >
                      Enviar
                    </LiquidButton>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
