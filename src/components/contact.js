import React,{useRef} from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import emailjs from '@emailjs/browser';


//main function
export default function Contact() {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3js3pb8', 'template_cfkwdiv', form.current, 'Q4JQEMp0i6mWZfQ7h')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });

    };

  return (
    <Container id="contact">
        <Title>Contact me</Title>
        <SubContainer>
          <StyledForm ref={form} onSubmit={sendEmail}>
            <InputStyled type="text" name="user_name" placeholder="¿What's your name?" main></InputStyled>
            <InputStyled type="text" name="user_email"  placeholder="¿What's your email?" main></InputStyled>
            <InputStyled type="text" name="message" placeholder="Leave your message here"></InputStyled>
            <Button>Send</Button>
          </StyledForm>
        </SubContainer>
    </Container>
  )
}

//styled components
const Container=styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  height:420px;
  background-color:${colors.gray[300]};
  padding:30px;
  align-items:center;
  align-content:center;

  @media screen and (max-width: 360px){   
    flex-wrap:wrap;
    height:500px;
  }
`
const SubContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`
const StyledForm=styled.form`
  display:flex;
  flex-direction:column;
  gap:10px;
`
const Title=styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 31.52px;
  padding:20px;
`
const InputStyled=styled.input`
  display:flex;
  flex-direction:column;
  text-align:left;
  justify-content:flex-end;
  padding:20px;
  border-radius:${props=>props.main? "50px":"25px"};
  height:${props=>props.main? "47px":"120px"};
  width:600px;
  border:0.1px solid gray;
  font-size:14px;

  @media screen and (max-width: 596px){   
    width:250px;
    padding:20px;
  }
`
const Button=styled.button`
  border: none;
  border-radius: 50px;
  background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
  height:40px;
  color:${colors.white};
  text-shadow: 1px 1px 1px #000;
` 