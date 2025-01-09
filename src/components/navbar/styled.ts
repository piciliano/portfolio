import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.backgound};
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.7);
  align-items: center;

  @media (max-width: 768px) {
    box-shadow: none;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const SpanHashtag = styled.span`
  color: ${(props) => props.theme.colors.hashtag};
`;

export const ImgLogo = styled.img`
  object-fit: cover;
  width: 100%;
`;
