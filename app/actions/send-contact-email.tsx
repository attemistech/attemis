"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import z from "zod";

const contactEmail = process.env.CONTACT_EMAIL;
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string({
    invalid_type_error: "Email inválido",
  }),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export async function sendContactEmail(formData: FormData) {
  "use server";

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  const validatedFields = schema.safeParse({
    email,
    name,
    message,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    console.log(errors);
  }

  const { data, error } = await resend.emails.send({
    from: `Attemis (Website) <onboarding@resend.dev>`,
    to: [contactEmail ?? ""],
    subject: `Mensagem recebida de ${name}.`,
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    console.log(error);
  }

  return;
}
