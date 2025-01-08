import styled from "styled-components";

export const AboutMeContainer = styled.section`
  display: flex;
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const AboutContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 50rem;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const AboutImg = styled.img`
  max-width: 100%;
  height: auto;
  flex: 1;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }
`;

export const Title = styled.h1`
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2rem;
  }
`;

export const Description = styled.p`
  text-align: left;
  max-width: 50rem;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: justify;
    line-height: 1.5;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;
