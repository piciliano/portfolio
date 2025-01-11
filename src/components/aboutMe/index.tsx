import * as S from "./styled";
import aboutMeImg from "../../assets/aboutMeImg.svg";
import neto from "../../assets/neto.png";

const AboutMe: React.FC = () => {
  return (
    <>
      <S.AboutMeContainer>
        <div style={{ position: "relative", textAlign: "center" }}>
          <S.AboutImg src={aboutMeImg} alt="about-me" />
          <S.AboutImgProfile src={neto} alt="neto img" />
        </div>

        <S.AboutContentTexts>
          <S.Title>
            Sobre <S.Span>mim</S.Span>
          </S.Title>
          <S.Description>
            Sou um desenvolvedor fullstack apaixonado por criar experiências web
            atraentes, responsivas e marcantes. Com habilidades essenciais, meu
            foco está em desenvolver designs estéticos, com alta performance e
            interatividade envolvente. Cada projeto que realizo reflete meu
            compromisso com os detalhes e a experiência do usuário. Explore meu
            portfólio para descobrir alguns dos trabalhos que já concluí,
            incluindo designs responsivos e soluções web inovadoras. Acredito
            que cada clique deve aproximar os usuários dos objetivos do negócio.
            Estou sempre aberto a colaborações e adoraria ajudar a transformar
            suas ideias criativas em realidade. Vamos conversar sobre como posso
            contribuir para realizar sua visão online. Obrigado pela sua visita!
          </S.Description>
        </S.AboutContentTexts>
      </S.AboutMeContainer>
    </>
  );
};

export default AboutMe;
