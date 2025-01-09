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
      text-decoration: underline;
      color: white;
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
      transition: transform 0.3s, filter 0.3s;
      font-size: 1rem;
    }
    @media (max-width: 370px) {
      font-size: 0.8rem;
    }
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;
export const SpanHastag = styled.span`
  color: ${(props) => props.theme.colors.hastag};
`;
