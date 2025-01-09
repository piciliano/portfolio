import * as S from "./styled";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.Title>Neto Dev</S.Title>
      <S.NavList>
        <S.NavItem>
          <a href="#home">Início</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#about">Sobre</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#projects">Projetos</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#skills">Tecnologias</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#contact">Contato</a>
        </S.NavItem>
      </S.NavList>
    </S.NavbarContainer>
  );
};

export default Navbar;
