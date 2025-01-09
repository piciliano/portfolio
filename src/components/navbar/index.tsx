import * as S from "./styled";

const Navbar: React.FC = () => {
  const menuItems = [
    { id: 1, href: "#home", text: "Início" },
    { id: 2, href: "#about", text: "Sobre" },
    { id: 3, href: "#projects", text: "Projetos" },
    { id: 4, href: "#skills", text: "Tecnologias" },
    { id: 5, href: "#contact", text: "Contato" },
  ];

  return (
    <S.NavbarContainer>
      <S.Title>Neto Dev</S.Title>
      <S.NavList>
        {menuItems.map((item) => (
          <S.NavItem key={item.id}>
            <a href={item.href}>
              <S.Span>
                <S.SpanHashtag>#</S.SpanHashtag>
                {item.text}
              </S.Span>
            </a>
          </S.NavItem>
        ))}
      </S.NavList>
    </S.NavbarContainer>
  );
};

export default Navbar;
