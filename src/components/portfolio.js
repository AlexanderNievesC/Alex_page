import React from 'react'
import styled from 'styled-components';
import job from '../assets/job.jpg';


export default function Portfolio() {
  return (
    <Container>
      <Title>Portfolio</Title>
      <JobDiv>Get that job</JobDiv>
    </Container>
  )
}

const Container=styled.div`
  height:425px;
  padding:40px;
  align-content:center;
  text-align:center;
`
const Title=styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 38px;
  padding-bottom:20px
`
const JobDiv=styled.div`
  display:flex;
  align-items:center;
  align-content:center;
  padding: 20px;
  background-image:url(${job});
  height:300px;
  max-width:450px;
  background-size:cover;
  justify-content:center;

`