import React from 'react';
import styled from 'styled-components';
import background from '../assets/programming.jpg';
import { colors } from '../styles/colors';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

export default function Header() {
  return (
    <MainContainer>
      {/* <StyleImg src={background} alt="background" width="100%"/> */}

      <OptionBar>
        <OptionElement>About</OptionElement>
        <OptionElement>Skills</OptionElement>
        <OptionElement>Experience</OptionElement>
        <OptionElement>Portfolio</OptionElement>
        <OptionElement>Contact</OptionElement>
      </OptionBar>

    <SubArea>
      <SectionText>
        <Text color="white" size="80px">Alexander Nieves</Text>
        <Text color="rgb(73, 175, 115)" size="41.4px">Full Stack Developer</Text>
      </SectionText>

      <SectionIcon>
        <a href="https://www.linkedin.com/in/alexander-nieves-6669bb136/" target="_blank"><TiSocialLinkedinCircular color="white" size={50}/></a>
        <a href="https://twitter.com/alexand73785231" target="_blank"><TiSocialTwitterCircular color="white" size={50}/></a>
        <a href="https://github.com/AlexanderNievesC" target="_blank"><DiGithub color="white" size={50}/></a>
      </SectionIcon>
    </SubArea>
    </MainContainer>
  )
}

const MainContainer=styled.div`
  background-image:url(${background});
  background-size:cover;  
  height:500px;
`
const OptionBar=styled.div`
  display:flex;
  flex-direction:row;
  gap:20px;
  color:${colors.white};
  justify-content: right;
  padding-top:20px;
  padding-right:20px;
`;

const OptionElement=styled.div`
  cursor:pointer;

  &:hover {
    color:${colors.gray[400]};
  }
`

const Text=styled.div`
  ${({color, size})=>SetProperties(color, size)};
  font-family: 'Roboto Slab', serif;
  font-weight:700;
  justify-content: center;
  text-shadow: 1px 1px 1px #000;
`
const SubArea=styled.div`
  padding-top:100px;
  display:flex;
  flex-direction:row;
`

const SectionText=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:50px;
  width:95%;
`

const SectionIcon=styled.div`
  right:20px;
  top:300px;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:10px;
`

//Functions to support styled components

const SetProperties=(color, size)=>{
  return (`
    color:${color};
    font-size:${size};
  `)
}