import React from 'react'
import styled, { keyframes } from 'styled-components';
import foto from '../assets/foto.jpg';
import { colors } from '../styles/colors';
import { useState, useEffect } from 'react';

//main function
export default function About() {
  return (
    <Container id="about">
      <div>
        <Title>I code ...</Title>
        <br/>
        <Paragraph>
        <div>Through programming, I firmly believe that I can improve people's lives and productivity in a company </div>
        <br/> 
        <div>That's the reason I seek to create quality software, preparing myself every day to achieve mastery.</div>  
        </Paragraph> 
      </div>
      <SecondPart>
        <TitleSecond>I live in Peru, Lima</TitleSecond>
        <StyledImg src={foto} alt="my_photo" width="200px"/>
      </SecondPart>
    </Container>
  )
}
//styled components
const Container =styled.div`
  display:flex;
  flex-direction:row;
  height:432px;
  padding:20px;
  align-items:center;
  align-content: center;
  gap:40px;
  justify-content:center;
  text-align:center;
  background-color:${colors.gray[300]};
  


  @media screen and (max-width: 596px){   
    gap:20px;
  }

  @media screen and (max-width: 360px){
    flex-wrap:wrap;
    height:800px;
  }

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
  text-align:justify;
  max-width:450px;

  @media screen and (max-width: 360px){
    
  }

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
const SecondPart=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`