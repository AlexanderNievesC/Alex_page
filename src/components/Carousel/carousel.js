import styled from "@emotion/styled";
import React from "react";
import DataCarousel from "./data-carousel";
import Slider from "react-slick";
import Button from "../Button/button";



const StyledDiv = styled.div`
  height: 60vh;
  padding-top: 10px;
`;

const StyledImg = styled.img`
  height: 40vh;
  width:100vh;
  padding: 10px;
  text-shadow: 2px 2px;

`;

const Container = styled.div`
  padding:10px;
  width:400px;
  align-items:center;
  text-align:center;
  padding-bottom:40px;
`;

const MainContainer = styled.div`
  height:10vh;
`


export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <MainContainer>
      <Slider {...settings}>
        {DataCarousel.map((Element) => (
          <StyledDiv>
            <StyledImg src={Element.imagen}/>
            <Container> 
              <h3>{Element.title}</h3>
              <div>{Element.description}</div>
              <br></br>
              <a
                href={Element.link}
                target="_blank"
              >
                <Button>{Element.button}</Button></a>
            </Container>
          </StyledDiv>
        ))}
      </Slider>
    </MainContainer>
  );
}
