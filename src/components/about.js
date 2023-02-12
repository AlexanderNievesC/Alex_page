import React from 'react'
import styled from 'styled-components';
import foto from '../assets/foto.jpg';
import { colors } from '../styles/colors';

//main function
export default function About() {
  return (
    <Container id="about">
      <div>
        <Title>I code ...</Title>
        <br/>
        <Paragraph>
          <div>I have a deep passion for programming and data analysis. Passion that I discovered while working as a mining engineer.</div>  
          <br/>
          <div>Today I would like to work as a full stack developer to create quality software.</div>
          <br/>
          <div>"I believe that technology is becoming a great tool for humanity to overcome the problems that we all face now"</div>
        </Paragraph> 
      </div>
      <SecondPart>
        <TitleSecond>I live in Peru, Lima</TitleSecond>
        <Year>28 years old</Year>
        <StyledImg src={foto} alt="my_photo" width="200px"/>
      </SecondPart>
    </Container>
  )
}
//styled components
const Container =styled.div`
  display:flex;
  height:432px;
  padding:20px;
  align-items:center;
  align-content: center;
  justify-content:center;
  background-color:${colors.gray[300]};
  gap:200px;
  text-align:center;

`
const Title=styled.div`
  color:rgb(73, 175, 115);
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 40px;
  padding-bottom:20px;
  text-align:left;
  text-shadow: 1px 1px 1px #000;
`
const Paragraph=styled.div`
  color: rgb(66, 84, 117);
  font-family: Lato;
  font-weight: 400;
  font-size: 17.76px;
  line-height: 1.4;
  width:300px;
  text-align:justify;
`
const StyledImg=styled.img`
  display:flex;
  justify-content:center;
  border-radius:50%;
`
const TitleSecond=styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 31.52px;
  padding-bottom:30px;
  
`
const Year=styled.div`
  color: rgb(73, 175, 115);
  font-weight: 500;
  font-family: Lato;
  font-weight: 400;
  font-size: 17.76px;
  line-height: 1.4;
  padding-bottom:20px;
  
`
const SecondPart=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`