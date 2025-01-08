import * as S from "./styled";
import aboutMeImg from "../../assets/aboutMeImg.svg";

const AboutMe: React.FC = () => {
  return (
    <>
      <S.AboutMeContainer >
        <S.AboutImg src={aboutMeImg} />
        <S.AboutContentTexts>
          <S.Title>
            Sobre <S.Span>mim</S.Span>
          </S.Title>
          <S.Description>
            Selamat datang di portofolio web saya! Saya Bayu Weda, seorang
            front-end website developer dengan hasrat untuk menciptakan
            pengalaman web yang menarik dan responsif. Dengan keahlian dalam
            HTML, CSS, dan JavaScript, saya fokus pada desain yang estetis dan
            performa yang optimal. Jelajahi berbagai proyek saya di sini, yang
            mencakup desain responsif dan interaktivitas yang menawan. Saya
            percaya bahwa setiap klik harus membawa pengguna lebih dekat dengan
            tujuan bisnis. Saya senang berkolaborasi dan membawa ide-ide kreatif
            menjadi kenyataan. Mari diskusikan bagaimana saya dapat membantu
            Anda mencapai visi online Anda. Terima kasih atas kunjungan Anda!
          </S.Description>
        </S.AboutContentTexts>
      </S.AboutMeContainer>
    </>
  );
};

export default AboutMe;
