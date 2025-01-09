import * as S from "./styled";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.Title>Neto Dev</S.Title>
      <S.NavList>
        <S.NavItem>
          <a href="#home">
            <S.SpanHastag>#</S.SpanHastag>
            <S.Span>Início</S.Span>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#about">
            <S.SpanHastag>#</S.SpanHastag>

            <S.Span>Sobre</S.Span>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#projects">
            <S.SpanHastag>#</S.SpanHastag>

            <S.Span>Projetos</S.Span>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#skills">
            <S.SpanHastag>#</S.SpanHastag>

            <S.Span>Tecnologias</S.Span>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#contact">
            <S.SpanHastag>#</S.SpanHastag>

            <S.Span>Contato</S.Span>
          </a>
        </S.NavItem>
      </S.NavList>
    </S.NavbarContainer>
  );
};

export default Navbar;
