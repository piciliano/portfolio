import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .regex(/^[^<>]+$/, "O nome não pode conter caracteres HTML"),
  lastName: z
    .string()
    .min(2, "O sobrenome deve ter pelo menos 2 caracteres")
    .regex(/^[^<>]+$/, "O sobrenome não pode conter caracteres HTML"),
  email: z.string().email("Insira um email válido"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "O telefone deve ter 10 ou 11 dígitos"),
  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .regex(/^[^<>]+$/, "A mensagem não pode conter caracteres HTML"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
