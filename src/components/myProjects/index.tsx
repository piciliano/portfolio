import * as S from "./styled";
import cripto from "../../assets/CriptMoeda.png";
import prime from "../../assets/PrimeFlix.png";

const MyProjects: React.FC = () => {
  return (
    <>
      <S.MyProjectContainer >
        <S.Title>
          <S.Span>Meus </S.Span>Projetos
        </S.Title>
        <S.Description>
          Hallo selamat datang, disini saya akan menampilkan beberapa projects
          web dan web desain yang sudah saya kerjakan.
        </S.Description>
        <S.ContainerProjects>
          <S.ImgContent>
            <S.Img src={cripto} />
          </S.ImgContent>
          <S.ImgContent>
            <S.Img src={prime} />
          </S.ImgContent>
        </S.ContainerProjects>
      </S.MyProjectContainer>
    </>
  );
};

export default MyProjects;
