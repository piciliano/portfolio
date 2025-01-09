import styled from "styled-components";

export const Section = styled.section`
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding-top: 4.8rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const BeginningContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 50rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    align-items: center;
    text-align: center;
  }
`;

export const BeginningProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkButtons = styled.div`
  display: flex;
  padding-left: 4rem;

  @media (max-width: 768px) {
    padding-left: 0;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .social-icon {
      width: 3rem !important;
      height: 3rem !important;
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  border-radius: 0.3rem;
  width: 10rem;
  height: 3rem;

  @media (max-width: 768px) {
    width: 80%;
    max-width: 10rem;
  }
`;

export const SubTitle = styled.h3`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  text-align: left;
  max-width: 50rem;
  padding-bottom: 2rem;
  text-align: justify;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    text-align: justify;
    line-height: 1.5;
    font-size: 1.1rem;
    word-spacing: normal;
    hyphens: auto;
  }
`;

export const HomePageImg = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
