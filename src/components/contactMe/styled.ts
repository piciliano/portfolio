import styled from "styled-components";

export const ContactMeContainer = styled.section`
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 93%;
    margin: auto;
  }
`;

export const Title = styled.h1`
  padding-bottom: 2rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  text-align: center;
  max-width: 50rem;
  padding-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
    text-align: center;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    max-width: 90%;
    text-align: justify;
    line-height: 1.5;
  }
`;

export const DivForm = styled.div`
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(
    257deg,
    rgba(217, 217, 217, 0.13) -36.46%,
    rgba(217, 217, 217, 0) 100%
  );
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-bottom: 2px solid rgba(204, 204, 204, 0.5);
  font-size: 1rem;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #61dafb;
    box-shadow: 0 2px 4px rgba(97, 218, 251, 0.5);
  }

  &::placeholder {
    color: #ccc;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-bottom: 2px solid rgba(204, 204, 204, 0.5);
  font-size: 1rem;
  resize: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #61dafb;
    box-shadow: 0 2px 4px rgba(97, 218, 251, 0.5);
  }

  &::placeholder {
    color: #ccc;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: rgba(204, 204, 204, 0.5);
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #61dafb;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;
