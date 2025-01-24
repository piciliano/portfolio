import * as S from "./styled";
import homePageImg from "../../assets/homepageimg.svg";
import { SocialIcon } from "react-social-icons";

const SOCIAL_LINKS = [
  { url: "https://github.com/piciliano", color: "#333" },
  { url: "https://www.linkedin.com/in/picilianovasconcelos", color: "#0077b5" },
  { url: "https://www.instagram.com/", color: "#E4405F" },
];

const Beginning: React.FC = () => {
  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.Section>
      <S.BeginningContent>
        <S.Title>Olá, Meu Nome é Neto</S.Title>
        <S.SubTitle>Desenvolvedor Fullstack</S.SubTitle>
        <S.Description>
          Bem-vindo ao meu portfólio! Eu sou Neto, um desenvolvedor web
          full-stack focado em criar aplicações web eficientes, escaláveis e
          dinâmicas. Com habilidades em diversas tecnologias, incluindo
          front-end como HTML, CSS e JavaScript, e back-end utilizando Node.js,
          Express e bancos de dados, estou comprometido em oferecer soluções
          inovadoras e responsivas. Neste portfólio, você encontrará diversos
          projetos que abrangem o desenvolvimento de aplicações web de ponta a
          ponta, desde o design de interfaces atraentes até a implementação de
          lógica de negócios robusta. Explore meus trabalhos e descubra como
          posso ajudar a transformar suas ideias digitais em soluções com
          performance otimizada e design intuitivo.
        </S.Description>
        <S.ContainerButtons>
          <S.Button onClick={handleScrollToContact}>Contato</S.Button>
          <S.LinkButtons>
            {SOCIAL_LINKS.map(({ url, color }, index) => (
              <SocialIcon
                key={index}
                url={url}
                bgColor={color}
                fgColor="#fff"
                style={{ margin: "10px" }}
              />
            ))}
          </S.LinkButtons>
        </S.ContainerButtons>
      </S.BeginningContent>
      <S.BeginningProfile>
        <S.HomePageImg src={homePageImg} alt="Imagem do Perfil" />
      </S.BeginningProfile>
    </S.Section>
  );
};

export default Beginning;
