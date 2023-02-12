import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
//main function
export default function Skill() {
  return (
    <Container id="skills">
      <FirstPart>
        <TitleFirst>Programming Skills</TitleFirst>
        <TextFirst>I want to be a Full Stack Developer creating quality apps for people.</TextFirst>
        
        <TextFirst> 
          I have some skills with CSS/JS animations and Ruby on Rails.I'm keen on exploring new languages
          and I always try to stay up-to-minute. 
        </TextFirst>
      </FirstPart>
      <SeconPart>
          <Item>
            <Title>Ruby </Title>
            <div>ROR</div>  
          </Item>

          <Item>
            <Title>Web</Title>
            <div>JS(React) /HTML /CSS</div>  
          </Item>

          <Item>
            <Title>DB</Title>
            <div>Sql/Psql</div>  
          </Item>   
      </SeconPart> 

    </Container>
  )
}
//Styled components
const Container=styled.div`
  display:flex;
  flex-direction:row;
  height:350px;
  background-color:${colors.gray[300]};
  padding:40px;
  justify-content:center;
  align-items:center;

  @media screen and (max-width: 596px){   
    padding:30px;
    gap:10px;
  }

  @media screen and (max-width: 360px){
    height:700px;
    flex-wrap:wrap;
  }

`
const FirstPart=styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  max-width:500px;
`
const TitleFirst=styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  line-height:40px;

  @media screen and (max-width: 596px){   
    font-size: 30px;
  }
  
`
const TextFirst=styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: 17.76px;
  text-align:justify;
`
const SeconPart=styled.div`
  display:flex;
  flex-direction:column;
  gap:30px;
  text-align:center;
  padding:30px;
  align-content:center;
`
const Item=styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`
const Title=styled.div`
  color: rgb(73, 175, 115);
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 53.28px;
  text-shadow: 1px 1px 1px #000;

  @media screen and (max-width: 360px){
    font-size: 40px;
  }

`
