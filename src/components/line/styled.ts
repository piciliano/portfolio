import styled from "styled-components";

export const Line = styled.div`
  margin: auto;
  width: 70%;
  height: 0.125rem;
  background: linear-gradient(to right, #61dafb, rgba(97, 218, 251, 0.2));
  margin-top: 10rem;
  margin-bottom: 10rem;

  @media (max-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
