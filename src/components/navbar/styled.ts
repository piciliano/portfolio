import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.backgound};
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    box-shadow: none;
    justify-content: center;
  }
`;

export const Title = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.li`
  a {
    @media (max-width: 768px) {
      text-decoration: none;
      color: white;
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
      transition: transform 0.3s, filter 0.3s;
      filter: blur(2px);
      font-size: 0.6rem;
    }
  }

  a:hover {
    transform: scale(2);
    filter: blur(0);
  }
  @media (max-width: 768px) {
    @keyframes zoomBlurFocus {
      0% {
        transform: scale(1);
        filter: blur(2px);
        font-size: 0.6rem;
      }
      50% {
        transform: scale(1.2);
        filter: blur(0);
        font-size: 0.8rem;
      }
      100% {
        transform: scale(1);
        filter: blur(2px);
      }
    }
  }

  @media (max-width: 768px) {
    a {
      animation: zoomBlurFocus 5s infinite ease-in-out;
    }
  }
`;
