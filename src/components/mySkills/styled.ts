import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const MySkillContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 1.1rem;
    word-spacing: normal;
    hyphens: auto;
  }
`;

export const Title = styled.h1`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 2rem;
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
    word-spacing: .05em;
    hyphens: auto;
  }
`;

export const Carousel = styled.div`
  overflow: hidden;
  width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  gap: 2rem;
  animation: ${scrollAnimation} 20s linear infinite;
  width: fit-content;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;
