import styled from "@emotion/styled";
import { colors } from "../styles";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const MainContainer = styled.div`
  background-color: ${colors.white};
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

const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;

function Contact() {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3js3pb8', 'template_cfkwdiv', form.current, 'Q4JQEMp0i6mWZfQ7h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <MainContainer>
      <Styledh1>Contact me</Styledh1>
      <StyledP>Leave a message to me!</StyledP>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name" name="user_name" required></input>
        <input type="email" placeholder="Email" name="user_email" required></input>
        <input type="text" placeholder="Subject" name="subject" required></input>
        <textarea name="message" cols="30" rows="10"></textarea> 
        <button type="submit">Send message</button>
      </StyledForm>
    </MainContainer>
  );
}

export default Contact;