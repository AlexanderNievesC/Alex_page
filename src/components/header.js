import React from 'react';
import styled from 'styled-components';
import background from '../assets/programming.jpg';
import { colors } from '../styles/colors';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import { Link} from 'react-scroll'
import { FaBars } from 'react-icons/fa';

//Main Function
export default function Header() {
  return (
    <MainContainer id="header">

      <OptionBar>
       <Link to="about"> <OptionElement>About</OptionElement></Link>
       <Link to="skills"> <OptionElement>Skills</OptionElement></Link>
       <Link to="experience"> <OptionElement>Experience</OptionElement></Link>
       <Link to="portfolio"> <OptionElement>Portfolio</OptionElement></Link>
       <Link to="contact"> <OptionElement>Contact</OptionElement></Link>
      <FaBars/> 
      </OptionBar>

      <SubArea>
        <SectionText>
          <Text color="white" size="60px">Alexander Nieves</Text>
          <Text color="rgb(73, 175, 115)" size="41.4px">Full Stack Developer</Text>
          <a href="cv.pdf" download={"cv.pdf"}><Button > Download my CV</Button></a>
        </SectionText>

        <SectionIcon>
          <a href="https://www.linkedin.com/in/alexander-nieves-6669bb136/" ><TiSocialLinkedinCircular color="white" size={50}/></a>
          <a href="https://github.com/AlexanderNievesC"><DiGithub color="white" size={50}/></a>
        </SectionIcon>
      </SubArea>
    </MainContainer>
  )
}
//Styled components
const MainContainer=styled.div`
  background-image:url(${background});
  background-size:cover;  
  height:500px;

  @media screen and (max-width: 360px){
    height:400px;
  }
`
const OptionBar=styled.div`
  display:flex;
  flex-direction:row;
  gap:20px;
  color:${colors.white};
  justify-content: right;
  padding-top:20px;
  padding-right:20px;
  align-items:center;

  @media screen and (max-width: 360px){

  }
`

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

  @media screen and (max-width: 596px){   
    font-size:50px;
  }

  @media screen and (max-width: 360px){
    flex-wrap:wrap;   
    font-size:30px;
  }
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
  text-align:center;
  gap:50px;
  width:95%;

  @media screen and (max-width: 596px){   
    gap:20px;
  }
`
const SectionIcon=styled.div`
  right:20px;
  top:300px;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:10px;
`
const Button=styled.button`
  border: none;
  border-radius: 50px;
  background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
  width: 200px;
  height:40px;
  color:${colors.white};
  text-shadow: 1px 1px 1px #000;
  cursor:pointer;
` 
//Functions to support styled components

const SetProperties=(color, size)=>{
  return (`
    color:${color};
    font-size:${size};
  `)
}