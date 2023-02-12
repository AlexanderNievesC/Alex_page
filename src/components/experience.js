import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import guy from '../assets/programme.jpeg';
import imaginery from '../assets/imaginery.jpg';
//data
const data=[
  {
  key:1,
  school:"National University of San Agustin of Arequipa",
  title:"Mining Engineer (2011 - 2015)"
  },
  
  {
  key:2,
  school:"GORE",
  title:"Mining Technical Assistant (2017-2018)"

  },

  {
  key:3,
  school:"SIMSA/PAN AMERICAN",
  title:"Mining Intern (2019)",
  },
  {
  key:4,
  school:"CIBERTEC/CODEABLE",
  title:"Data Architect-Full Stack Developer (2020-2023)"
  },
]
//main function
export default function Experience() {
  return (
    <Container id="experience">
      <Title>Experience</Title>
      <SubContainer>
        <img src={guy} alt="guy" height="300px" width="450px"></img>
        <Text1>
          <First><b>Education</b></First>
          <div>2022 <br/> Full Stack Developer <br/>Codeable</div>
          <br/>
          <div>2020-2022 <br/> Data Architect <br/>Cibertec</div>
          <br/>
          <div>2011-2015 <br/> Mining Engineer <br/>UNSA</div>
        </Text1>
      </SubContainer>

      <SubContainer>
        <Text2>
          <First><b>Work Experience</b></First>
            <div>2017-2018 <br/> Mining Assistant <br/>GORE</div>
            <br/>
            <div>2019 <br/> Mining Intern <br/>SIMSA/PAN AMERICAN</div>
            <br/>
            <div>2021-2022 <br/> Environmental Supervisor <br/>OEFA/BUREAU VERITAS</div>
          </Text2>
          <img src={imaginery} alt="guy" height="300px"></img>
      </SubContainer>
      <Title id="portfolio">My Portfolio</Title>
    </Container>
  )
}
//styled components
const Title =styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  color:${colors.black};
  padding-bottom:20px;
  padding-top:20px;
`
const Container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:1000px;
  background-color:${colors.gray[300]};
  padding-top:40px;
  padding-bottom:10px;
  text-align:center;
`
const SubContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:20px 90px 10px 90px;
`
const Text1=styled.div`
  display:flex;
  flex-direction:column;
  height:300px;
  width:450px;
  text-align:left;
  padding-left:30px;
`
const First=styled.div`
  font-family: Lato;
  font-weight: 400;
  font-size: 17.76px;
  padding-bottom:10px;
`
const Text2=styled.div`
  display:flex;
  flex-direction:column;
  height:300px;
  width:450px;
  text-align:right;
  padding-right:30px;
`