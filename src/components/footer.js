import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Link} from 'react-scroll'
//main function
export default function Footer() {
  return (  
    <Container>
       <Link to="about"> <OptionElement>About</OptionElement></Link>
       <Link to="skills"> <OptionElement>Skills</OptionElement></Link>
       <Link to="experience"> <OptionElement>Experience</OptionElement></Link>
       <Link to="portfolio"> <OptionElement>Portfolio</OptionElement></Link>
       <Link to="contact"> <OptionElement>Contact</OptionElement></Link>
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
