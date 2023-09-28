import React from 'react';
import styled from 'styled-components';
import coding from '../assets/coding.gif';
import { colors } from '../styles/colors';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import { Link} from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai';

//Main Function
export default function Header() {
  return (
      <MainContainer id="header">
        {/* Section1 */}
        <Section1>
          <OptionBar>
            <Link to="about"> <OptionElement>About</OptionElement></Link>
            <Link to="experience"> <OptionElement>Experience</OptionElement></Link>
            <Link to="portfolio"> <OptionElement>Portfolio</OptionElement></Link>
            <Link to="contact"> <OptionElement>Contact</OptionElement></Link>
            <Link to="others"> <OptionElement>Others</OptionElement></Link>
          </OptionBar>

          <StyledMenuIcon />
        </Section1>

        {/* Section2 */}
        <SubArea>
          <SectionText>
            <Text primary>Alexander Nieves</Text>
            <Text >Full Stack Developer</Text>
            <a href="cv.pdf" download={"cv.pdf"}><Button > Download my CV</Button></a>
          </SectionText>

          <SectionIcon>
            <Links href="https://www.linkedin.com/in/alexander-nieves-6669bb136/" ><TiSocialLinkedinCircular color="white" size={50}/></Links>
            <Links href="https://github.com/AlexanderNievesC"><DiGithub color="white" size={50}/></Links>
          </SectionIcon>
        </SubArea>
      </MainContainer> 
  )
}
//Styled components
const MainContainer=styled.div`
  background-image:url(${coding});
  background-size:cover;  
  height:500px;

  @media screen and (max-width: 600px){
    height:500px;
  }
`

const Section1 =styled.div`
  display:flex;
  flex-direction:row;
  justify-content: right;
  padding:20px;
`

const OptionBar=styled.div`
  display:flex;
  flex-direction:row;
  color:${colors.white};
  gap:20px;

  @media screen and (max-width: 600px){
    display:none;
  }
`

const OptionElement=styled.div`
  cursor:pointer;

  &:hover {
    color:${colors.gray[400]};
  }

  @media screen and (max-width: 360px){
    gap:10px;
    font-size:15px;
  }
`

const StyledMenuIcon = styled(AiOutlineMenu)`
  color: white;
  display:none;

  @media screen and (max-width: 600px){
    display:block;
    font-size: 30px
  }
`;
 
const Text=styled.div`
  font-family: 'Roboto Slab', serif;
  font-size: 40px;
  justify-content: center;
  text-shadow: 1px 1px 1px black;
  color:${props => props.primary ? "white" : "rgb(73, 175, 115)"};

  @media screen and (max-width: 600px){
    flex-wrap:wrap;   
    font-size:40px;
    line-height: 0.9;
  }

  &:hover{
    text-shadow: ${props => props.primary ? "1px 1px 1px black" : "1px 1px 1px white"};
  }
`
const SubArea=styled.div`
  padding-top:50px;
  display:flex;
  flex-direction:row;

  @media screen and (max-width: 600px){
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
    gap:40px;
  }

`
const SectionText=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  gap:30px;
  width:95%;

  @media screen and (max-width: 600px){   
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

  @media screen and (max-width: 600px){   
    display:flex;
    flex-direction:row;
  }
  
`

const Links =styled.a`
  &:hover{
    animation: rotate360 5s linear infinite;
  }
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
  

  &:hover{
    box-shadow: inset 0 0 5px black;
  }
` 
