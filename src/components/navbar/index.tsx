import * as S from "./styled";

const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.Title>Neto Dev</S.Title>
      <S.NavList>
        <S.NavItem>
          <a href="#home">
            <S.SpanContainer>
              <S.SpanHastag>#</S.SpanHastag>
              <S.Span>Início</S.Span>
            </S.SpanContainer>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#about">
            <S.SpanContainer>
              <S.SpanHastag>#</S.SpanHastag>

              <S.Span>Sobre</S.Span>
            </S.SpanContainer>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#projects">
            <S.SpanContainer>
              <S.SpanHastag>#</S.SpanHastag>

              <S.Span>Projetos</S.Span>
            </S.SpanContainer>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#skills">
            <S.SpanContainer>
              <S.SpanHastag>#</S.SpanHastag>

              <S.Span>Tecnologias</S.Span>
            </S.SpanContainer>
          </a>
        </S.NavItem>
        <S.NavItem>
          <a href="#contact">
            <S.SpanContainer>
              <S.SpanHastag>#</S.SpanHastag>

              <S.Span>Contato</S.Span>
            </S.SpanContainer>
          </a>
        </S.NavItem>
      </S.NavList>
    </S.NavbarContainer>
  );
};

export default Navbar;
