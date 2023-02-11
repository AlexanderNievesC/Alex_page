import React from 'react'
import styled from 'styled-components';
import job from '../assets/job.png';
import { colors } from '../styles/colors'
//main function
export default function Portfolio() {
  return (
    <Container id="portfolio">
      <Title>Portfolio</Title>
      <JobDiv></JobDiv>
      <Button>See Here</Button>
    </Container>
  )
}
//styled components
const Title =styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  color:${colors.white};
  padding-bottom:20px;
`
const Container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  align-items:center;
  padding:20px;
  gap:10px;
  height:500px;
  background-color:${colors.black};
`
const JobDiv=styled.div`
  display:flex;
  flex-direction:column;
  background-image:url(${job});
  width:290px;
  height:400px;
  justify-content:flex-end;
  align-items:center;
  background-size:cover;
  border-radius:0px;
`
const Button=styled.button`
  border: none;
  border-radius: 50px;
  background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
  width: 100px;
  height:40px;
  color:${colors.white};
  text-shadow: 1px 1px 1px #000;
` 