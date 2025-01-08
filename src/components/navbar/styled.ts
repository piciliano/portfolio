import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.backgound};
  padding: 1rem;
  padding-left: ${(props) => props.theme.paddings.section};
  padding-right: ${(props) => props.theme.paddings.section};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.7);
`;

export const Title = styled.p``;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
