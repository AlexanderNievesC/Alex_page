import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { BsTwitter,BsGithub,BsLinkedin } from 'react-icons/bs';

//main function
export default function Contact() {
  return (
    <Container id="contact">
      <SubContainer>
        <Title>Contact me</Title>
        <Subtitle>
          <div>Please contact me via this form and I will reply back within 24 hours.</div>
          <div>Or call me at +51 959922344</div>
          <div>This is my email <u>paulalexander.nieves@gmail.com</u></div>
          <div>Find me on:</div>
          <IconZone>
            <a href="https://twitter.com/alexand73785231" ><BsTwitter color="rgb(73, 175, 115)" size={20}/></a>
            <a href="https://github.com/AlexanderNievesC" ><BsGithub color="rgb(73, 175, 115)" size={20}/></a>
            <a href="https://www.linkedin.com/in/alexander-nieves-6669bb136/"><BsLinkedin color="rgb(73, 175, 115)" size={20}/></a>
          </IconZone>
        </Subtitle>
      </SubContainer>
      <SubContainer>
        <StyledForm>
          <InputStyled type="text" placeholder="Name" main></InputStyled>
          <InputStyled type="text" placeholder="Email" main></InputStyled>
          <InputStyled type="text" placeholder="Leave a message here"></InputStyled>
          <Button>Send</Button>
        </StyledForm>
      </SubContainer>
    </Container>
  )
}

//styled components
const Container=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:420px;
  background-color:${colors.gray[300]};
  padding:60px;
`
const SubContainer=styled.div`
  display:flex;
  flex-direction:column;
`
const StyledForm=styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`
const Title=styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 31.52px;
  padding-bottom:20px;
`
const Subtitle=styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: 13px;
  line-height: 35px;
`
const IconZone= styled.div`
  display:flex;
  flex-direction:row;
  gap:20px;
`
const InputStyled=styled.input`
  display:flex;
  flex-direction:column;
  text-align:left;
  justify-content:flex-end;
  padding:20px;
  border-radius:${props=>props.main? "50px":"25px"};
  height:${props=>props.main? "47px":"120px"};
  width:320px;
  border:0.1px solid gray;
  font-size:14px;
`
const Button=styled.button`
  border: none;
  border-radius: 50px;
  background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
  max-width: 100px;
  height:40px;
  color:${colors.white};
  text-shadow: 1px 1px 1px #000;
` 