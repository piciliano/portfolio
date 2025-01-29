import * as S from "./styled";
import cripto from "../../assets/CriptMoeda.png";
import prime from "../../assets/PrimeFlix.png";
import simleToDoListImage from "../../assets/simple-todo-list.png";
import arnia from "../../assets/arnia.png";
import simpleAlbum from "../../assets/simple-album.png";

const MyProjects: React.FC = () => {
  return (
    <>
      <S.MyProjectContainer>
        <S.Title>
          <S.Span>Meus </S.Span>Projetos
        </S.Title>
        <S.Description>
          Nesta seção, você encontrará uma seleção dos projetos de web e design
          que desenvolvi. Cada trabalho foi pensado para unir estética,
          funcionalidade e uma experiência única para o usuário. Explore os
          detalhes de cada criação e descubra como transformei ideias em
          soluções visuais e digitais.
        </S.Description>

        <S.ContainerProjects>
          <S.ImgContent>
            <a
              href="https://cripto-app-flame.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Img src={cripto} alt="criptoImg" />
            </a>
          </S.ImgContent>
          <S.ImgContent>
            <a
              href="https://prime-flix-zeta-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Img src={prime} alt="primeflix" />
            </a>
          </S.ImgContent>
          <S.ImgContent>
            <a
              href="https://simple-to-do-list-vert.vercel.app//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Img src={simleToDoListImage} alt="toDoList" />
            </a>
          </S.ImgContent>
          <S.ImgContent>
            <a
              href="https://github.com/piciliano/ProjetoArnia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Img src={arnia} alt="toDoList" />
            </a>
          </S.ImgContent>
          <S.ImgContent>
            <a
              href="https://simple-album.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Img src={simpleAlbum} alt="simple-album" />
            </a>
          </S.ImgContent>
        </S.ContainerProjects>
      </S.MyProjectContainer>
    </>
  );
};

export default MyProjects;
