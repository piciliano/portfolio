import * as S from "./styled";
import Logo from "./../../assets/logo.png";

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
      <S.Logo>
        <S.ImgLogo src={Logo} alt="logo" />
      </S.Logo>
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
