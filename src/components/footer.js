import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
//main function
export default function Footer() {
  return (  
    <Container>
        <OptionElement>About</OptionElement>
        <OptionElement>Skills</OptionElement>
        <OptionElement>Experience</OptionElement>
        <OptionElement>Portfolio</OptionElement>
        <OptionElement>Contact</OptionElement>
    </Container>
  )
}
//styled components
const Container=styled.div`
  display:flex;
  flex-direction:row;
  gap:30px;
  text-align:center;
  align-content:center;
  justify-content:center;
  align-items:center;
  background-color:${colors.black};
  height:100px;
`
const OptionElement=styled.div`

  color:${colors.white};
  cursor:pointer;

  &:hover {
    color:${colors.gray[400]};
  }
`
