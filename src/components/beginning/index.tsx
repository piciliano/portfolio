import * as S from "./styled";
import homePageImg from "../../assets/homepageimg.svg";
import { SocialIcon } from "react-social-icons";

const Beginning: React.FC = () => {
  return (
    <>
      <S.Section >
        <S.BeginningContent>
          <S.Title>Olá, Meu Nome é Neto</S.Title>
          <S.SubTitle>Desenvolvedor Fullstack</S.SubTitle>
          <S.Description>
            Bem-vindo ao meu portfólio! Eu sou Neto, um desenvolvedor web
            full-stack focado em criar aplicações web eficientes, escaláveis e
            dinâmicas. Com habilidades em diversas tecnologias, incluindo
            front-end como HTML, CSS e JavaScript, e back-end utilizando
            Node.js, Express e bancos de dados, estou comprometido em oferecer
            soluções inovadoras e responsivas. Neste portfólio, você encontrará
            diversos projetos que abrangem o desenvolvimento de aplicações web
            de ponta a ponta, desde o design de interfaces atraentes até a
            implementação de lógica de negócios robusta. Explore meus trabalhos
            e descubra como posso ajudar a transformar suas ideias digitais em
            soluções com performance otimizada e design intuitivo.
          </S.Description>
          <S.ContainerButtons>
            <S.Button>Contato</S.Button>
            <S.LinkButtons>
              <SocialIcon
                url="https://github.com/piciliano"
                style={{ margin: "10px" }}
                bgColor="#333"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/picilianovasconcelos"
                style={{ margin: "10px" }}
                bgColor="#0077b5"
                fgColor="#fff"
              />
              <SocialIcon
                url="https://www.instagram.com/SeuPerfil"
                style={{ margin: "10px" }}
                bgColor="#E4405F"
                fgColor="#fff"
              />
            </S.LinkButtons>
          </S.ContainerButtons>
        </S.BeginningContent>
        <S.BeginningProfile>
          <S.HomePageImg src={homePageImg} alt="pageImg" />
        </S.BeginningProfile>
      </S.Section>
    </>
  );
};

export default Beginning;
