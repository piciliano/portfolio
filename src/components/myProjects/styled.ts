import styled from "styled-components";

export const MyProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

export const Description = styled.p`
  text-align: left;
  max-width: 50rem;
  padding-bottom: 2rem;
  text-align: justify;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 90%;
    text-align: justify;
    text-justify: inter-word;
    word-spacing: normal;
    line-height: 1.5;
    hyphens: auto;
  }
`;

export const Title = styled.h2`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1260px) {
    justify-content: center;
  }
`;

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 15rem;

  @media (max-width: 768px) {
    width: 12rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
  }
`;
