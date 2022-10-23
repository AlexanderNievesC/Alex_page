import styled from "@emotion/styled";
import Foto from "../assets/foto.png";
import Button from "../components/Button/button";
import { colors } from "../styles";

const DivStyled = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: 50% auto;
  height: 80vh;
  background-color: ${colors.white};
  text-align: center;
  /* margin-top: 10px; */
  align-items: center;

  @media screen and (max-width: 500px){
     display:flex;
     flex-direction: column;
     align-items:center;
     gap:-200px;
   }

`;

const StyledH1 = styled.h1`
  color: ${colors.gray[800]};
`;

const StyledP = styled.p`
  color: ${colors.gray[800]};
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 17px;
  text-align: center;
`;

const FirstDiv = styled.div`
  background-color: ${colors.white};
  padding: 100px;
`;

const SecondDiv = styled.div`
  background-color: ${colors.white};
`;

const StyleImg = styled.img`
  display: block;
  height:500px;
  border-radius: 500px;

  @media screen and (max-width: 360px){
     
    display: block;
    height:300px;
    border-radius: 500px;
    }
`;

const Home = () => {
  return (
    <DivStyled>
      <FirstDiv>
        <StyledH1>Hello! I'm Alexander</StyledH1>
        <StyledP>
          I am a mining engineer specialized in environmental management in the
          process of becoming a Full Stack Developer.{" "}
        </StyledP>
        <a href="cv.pdf" download={"cv.pdf"}>
          <Button>Donwload my CV!</Button>
        </a>
      </FirstDiv>

      <SecondDiv>
        <StyleImg src={Foto}></StyleImg>
      </SecondDiv>
    </DivStyled>
  );
};

export default Home;
