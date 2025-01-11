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
    padding-left: 2rem;
  }
`;

export const AboutImgProfile = styled.img`
  z-index: 1;
  position: absolute;
  width: 12rem;
  left: 5.5rem;
  object-fit: cover;
  bottom: 2.6rem;
  @media (max-width: 768px) {
    bottom: 2rem;
    left: 8.4rem;
    width: 10rem;
  }
`;

export const Title = styled.h1`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};

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
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: justify;
    line-height: 1.5;
    font-size: 1.1rem;
    word-spacing: normal;
    hyphens: auto;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;
