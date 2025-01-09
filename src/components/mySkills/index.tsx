import * as S from "./styled";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaJs,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiStyledcomponents,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiTypeorm,
  SiInsomnia,
} from "react-icons/si";

const MySkill: React.FC = () => {
  return (
    <S.MySkillContainer>
      <S.Title>
        Minhas <S.Span>Skills</S.Span>
      </S.Title>
      <S.Description>
        Estas são as habilidades e ferramentas que tenho desenvolvido ao longo
        da minha jornada como desenvolvedor web fullstack. Cada tecnologia
        representa um passo no meu aprendizado e evolução, desde a criação de
        interfaces modernas e responsivas até a implementação de sistemas
        robustos
      </S.Description>
      <S.Carousel>
        <S.SkillIcons>
          <FaReact size={50} color="#61DAFB" />
          <FaCss3Alt size={50} color="#1572B6" />
          <FaHtml5 size={50} color="#E34F26" />
          <FaNodeJs size={50} color="#339933" />
          <FaJs size={50} color="#F7DF1E" />
          <FaBootstrap size={50} color="#7952B3" />
          <SiStyledcomponents size={50} color="#DB7093" />
          <SiExpress size={50} color="#000000" />
          <SiNestjs size={50} color="#E0234E" />
          <SiMongodb size={50} color="#47A248" />
          <SiTypescript size={50} color="#3178C6" />
          <SiPostgresql size={50} color="#336791" />
          <FaSass size={50} color="#CC6699" />
          <SiTypeorm size={50} color="#E535AB" />
          <SiInsomnia size={50} color="#5849BE" />
          <FaReact size={50} color="#61DAFB" />
          <FaCss3Alt size={50} color="#1572B6" />
          <FaHtml5 size={50} color="#E34F26" />
          <FaNodeJs size={50} color="#339933" />
          <FaJs size={50} color="#F7DF1E" />
          <FaBootstrap size={50} color="#7952B3" />
          <SiStyledcomponents size={50} color="#DB7093" />
          <SiExpress size={50} color="#000000" />
          <SiNestjs size={50} color="#E0234E" />
          <SiMongodb size={50} color="#47A248" />
          <SiTypescript size={50} color="#3178C6" />
          <SiPostgresql size={50} color="#336791" />
          <FaSass size={50} color="#CC6699" />
          <SiTypeorm size={50} color="#E535AB" />
          <SiInsomnia size={50} color="#5849BE" />
        </S.SkillIcons>
      </S.Carousel>
    </S.MySkillContainer>
  );
};

export default MySkill;
