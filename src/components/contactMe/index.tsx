import { useState } from "react";
import * as S from "./styled";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { contactFormSchema, ContactFormData } from "./validationSchema";
import toast, { Toaster } from "react-hot-toast";

const validateForm = (data: ContactFormData) => {
  try {
    const allFieldsEmpty = Object.values(data).every(
      (value) => value.trim() === ""
    );
    if (allFieldsEmpty) {
      toast.dismiss();
      toast.error("Por favor, insira seus dados antes de enviar.");
      return false;
    }

    contactFormSchema.parse(data);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast.dismiss();
      error.errors.forEach((err) => {
        toast.error(err.message);
      });
    }
    return false;
  }
};

const ContactMe: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsDisabled(true);

    if (validateForm(formData)) {
      try {
        await emailjs.send(
          "service_qxliqka",
          "template_vzqggo8",
          formData,
          "ZR2Ph7JKu_okX-uFT"
        );

        toast.success("Mensagem enviada com sucesso!");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
        console.error("Erro ao enviar mensagem:", error);
      } finally {
        setIsDisabled(false);
      }
    } else {
      setIsDisabled(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <S.ContactMeContainer>
      <Toaster position="top-right" reverseOrder={false} />
      <S.Title>
        Entre em <S.Span>Contato </S.Span>
      </S.Title>
      <S.Description>
        Preencha o formulário abaixo com seus dados e uma breve mensagem sobre o
        seu projeto ou ideia. Estou sempre aberto a novas colaborações e
        adoraria saber mais sobre como podemos trabalhar juntos!
      </S.Description>
      <S.DivForm>
        <S.FormContainer>
          <S.Form onSubmit={handleSubmit}>
            <S.Row>
              <S.Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Nome"
              />
              <S.Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Sobrenome"
              />
            </S.Row>
            <S.Row>
              <S.Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <S.Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefone"
              />
            </S.Row>
            <S.Row>
              <S.TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Mensagem"
              />
            </S.Row>
            <S.SubmitButton disabled={isDisabled} type="submit">
              {isDisabled ? "Enviando..." : "Enviar"}
            </S.SubmitButton>
          </S.Form>
        </S.FormContainer>
      </S.DivForm>
    </S.ContactMeContainer>
  );
};

export default ContactMe;
