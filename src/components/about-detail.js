import React from 'react'
import {Link} from 'react-scroll'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineDollarCircle, AiFillGithub, AiFillHtml5,AiFillFileExcel } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { SiRuby,SiPowerbi } from 'react-icons/si'
import { DiCss3, DiReact} from 'react-icons/di';
import { IoLogoJavascript} from 'react-icons/io';
import { HiDatabase} from 'react-icons/hi';
import { FaLinux,FaAws} from 'react-icons/fa';

//data 
const data=[
  {
  id:1,
  title:"Github",
  icon:<AiFillGithub size={40} color="rgb(109, 219, 154)"/>,
  to:"skills"
  },
  
  {
  id:2,
  title:"Ruby",
  icon:<SiRuby size={40}  color="rgb(109, 219, 154)"/>,
  to:"experience"
  },

  {
  id:3,
  title:"HTML/CSS",
  icon:<AiFillHtml5 size={40} color="rgb(109, 219, 154)"/>,
  to:"portfolio"
  },

  {
    id:5,
    title:"Javascript",
    icon:<IoLogoJavascript size={40} color="rgb(109, 219, 154)"/>,
    to:"portfolio"
  },
  {
    id:6,
    title:"React",
    icon:<DiReact size={40} color="rgb(109, 219, 154)"/>,
    to:"portfolio"
  },
  {
    id:7,
    title:"SQL",
    icon:<HiDatabase size={40} color="rgb(109, 219, 154)"/>,
    to:"portfolio"
  },
  {
    id:8,
    title:"Linux",
    icon:<FaLinux size={40} color="rgb(109, 219, 154)"/>,
    to:"portfolio"
  },
  {
    id:10,
    title:"AWS",
    icon:<FaAws size={40} color="rgb(109, 219, 154)"/>,
    to:"portfolio"
  }
]
//main function
export default function AboutDetail() {
  return (
    <MainContainer>
      <Language>
        <Title1>Language</Title1>
        <Subtitle>English - Spanish</Subtitle>
      </Language>

      <Container>
          {data.map(element => 
              <ContElement>
                {element.icon}
                <Title>{element.title}</Title>
                <div>{element.content}</div>
              </ContElement>
          )}
      </Container>
    </MainContainer>
  )
}
//styled components
  const MainContainer=styled.div`
  height:350px;
  background-color:${colors.black};


  @media screen and (max-width: 600px){
    height:800px;
    gap:40px;
  }
`

const Container=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:60px;
  height:200px;
  color:${colors.white};
  font-family: Lato;
  align-items:center;
  text-align:center;
  justify-content:center;


  @media screen and (max-width: 360px){   
    display:flex;
    flex-direction:row;
    gap:40px;
  }
`
const ContElement=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
  justify-content:center;
`

const Language=styled.div`
  display:flex;
  flex-direction:column;
  background-color:${colors.black};
  align-items:center;
  text-align:center;
  padding:40px;
  gap:20px;
`

const Title=styled.div`
  font-size: 20px;
  font-family: "Roboto Slab";
`
const Title1 =styled.div`
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