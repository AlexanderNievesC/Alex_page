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
        <Image src={guy} alt="guy" height="290px" width="450px"></Image>
        <Text1>
          <First><b>Education</b></First>
          <SimpleText>2022 <br/> Full Stack Developer <br/>Codeable</SimpleText>
          <br/>
          <SimpleText>2020-2022 <br/> Data Architect <br/>Cibertec</SimpleText>
          <br/>
          <SimpleText>2011-2015 <br/> Mining Engineer <br/>UNSA</SimpleText>
        </Text1>
      </SubContainer>

      <SubContainer>
        <Text2>
          <First><b>Work Experience</b></First>
            <SimpleText>2017-2018 <br/> Mining Assistant <br/>GORE</SimpleText>
            <br/>
            <SimpleText>2019 <br/> Mining Intern <br/>PAN AMERICAN</SimpleText>
            <br/>
            <SimpleText>2021-2022 <br/> Supervisor <br/>OEFA</SimpleText>
            <br/>
            <SimpleText>2023 <br/> Application Analyst <br/>MS4M</SimpleText>
          </Text2>
          <Image src={imaginery} alt="guy" height="290px" width="450px"></Image>
      </SubContainer>
      <br></br>
      <br></br>
      <br></br>
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
  padding-bottom:50px;
  padding-top:40px;
`
const Container=styled.div`
  display:flex;
  flex-direction:column;
  height:950px;
  background-color:${colors.gray[300]};
  padding-top:10px;
  text-align:center;

  @media screen and (max-width: 596px){   
    padding:10px;
  }

  @media screen and (max-width: 360px){   
    height:1250px;
  }
`
const SubContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  padding:10px;
  align-items:center;

  @media screen and (max-width: 596px){   
    padding:10px;
    justify-content:center;
    align-content:center;
    align-items:center;
  }

  @media screen and (max-width: 360px){
    flex-wrap:wrap;
  }
`
const Text1=styled.div`
  display:flex;
  flex-direction:column;
  height:300px;
  width:400px;
  text-align:left;
  padding-left:40px;

  @media screen and (max-width: 596px){   
    width:100%;
  }

  @media screen and (max-width: 360px){   
    padding-left:0px;
    padding-top:10px;
    text-align:center;
  }
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
  padding-right:40px;

  @media screen and (max-width: 360px){   
    padding-right:0px;
    padding-bottom:20px;
    text-align:center;
  }
`
const SimpleText=styled.div`
  color: rgb(66, 84, 117);
  font-family: Lato;
  font-weight: 400;
  font-size: 13px;
`
const Image=styled.img`
    @media screen and (max-width: 596px){   
    height:250px;
    width:330px;
  }

  @media screen and (max-width: 360px){   
    height:180px;
  }
`