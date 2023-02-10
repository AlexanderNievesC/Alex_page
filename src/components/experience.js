import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';

export default function Experience() {
  return (
    <Container>
      <Title>Experience</Title>
      <Subtitle>Take a look</Subtitle>
    </Container>
  )
}

const Title =styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  color:${colors.black};
  padding-bottom:20px;
`

const Subtitle=styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: 17.76px;
  color:rgb(66, 84, 117);
`

const Container=styled.div`
  height:1000px;
  background-color:${colors.gray[100]};
  padding:40px;
`


