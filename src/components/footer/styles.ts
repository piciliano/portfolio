import styled from "styled-components";

export const FooterContainer = styled.section`
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;
