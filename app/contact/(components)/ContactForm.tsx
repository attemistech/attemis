import { sendContactEmail } from "@/app/actions/send-contact-email";
import LiquidButton from "@/components/LiquidButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <form action={sendContactEmail}>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="col-span-2">
          <Label className="text-lg" htmlFor="name">
            Nome
          </Label>{" "}
          <Input
            placeholder=""
            id="name"
            name="name"
            className="mt-2 bg-white h-10 shadow-none text-lg"
          />
        </div>
        <div className="col-span-2">
          <Label className="text-lg" htmlFor="email">
            Email
          </Label>{" "}
          <Input
            type="email"
            placeholder=""
            id="email"
            name="email"
            className="mt-2 bg-white h-10 shadow-none text-lg"
          />
        </div>
        <div className="col-span-2">
          <Label className="text-lg" htmlFor="message">
            Mensagem
          </Label>{" "}
          <Textarea
            id="message"
            name="message"
            placeholder=""
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
        type="submit"
        size="xl"
        className="w-full mt-6 rounded-full text-xl tracking-tight font-semibold font-overused-grotesk"
      >
        Enviar
      </LiquidButton>
    </form>
  );
};
