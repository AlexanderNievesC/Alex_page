import React from 'react'
import { colors } from '../styles/colors'
import styled from 'styled-components';
//Main function
export default function Language() {
  return (
    <Container>
      <Title>Language</Title>
      <Subtitle>English</Subtitle>
      <Detail>Proficient</Detail>
    </Container>
  )
}
//styled components
const Title =styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  color:${colors.white};
  padding-top:20px;
`
const Subtitle=styled.div`
  color:rgb(109, 219, 154);
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 19.76px;
`
const Detail=styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: 13.88px;
  color:${colors.white}
`
const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  background-color:${colors.black};
  height:160px;
  padding:20px;
  text-align:center;
  align-content:center;
  align-items:center;
` 