import styled from "@emotion/styled";
import Carousel from "../components/Carousel/carousel";
import { colors } from "../styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainContainer = styled.div`
  background-color: ${colors.white};
  height:60vh;
`;

const Styledh1 = styled.h1`
  display: grid;
  text-align: center;
  padding-top: 30px;
`;

const StyledP = styled.p`
  display: grid;
  text-align: center;
  padding-top: 10px;

`;

function Portfolio() {
  return (
    <MainContainer>
      <Styledh1>My Folder</Styledh1>
      <StyledP>Take a look at some of my projects</StyledP>
      <Carousel />
    </MainContainer>
  );
}

export default Portfolio;
