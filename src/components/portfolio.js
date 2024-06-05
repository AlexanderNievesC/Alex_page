import React from 'react'
import styled from 'styled-components';
import job from '../assets/job.png';
import keepableimg from '../assets/keepable.jpg';
import Contactabl from '../assets/Contactable.jpg';
import Doable from '../assets/Doable.jpg';
import Organizable from '../assets/Organizable.png';
import { colors } from '../styles/colors'
import { SlMagnifier as Lupa } from 'react-icons/sl';
import { AiFillGithub as GithubSymbol } from 'react-icons/ai';

const ButtonZone= (props)=>{
  return (
      <Main>
        <Button><a href={props.link1}><Lupa color="white" size="20px"/></a></Button>
      </Main>
  );
}

 const Main=styled.div`
  display:flex;
  flex-direction:row;
  gap:10px;
  width:150px;
  height:50px;
 `

export default function Portfolio() {
  return (
    <MainContainer id="portfolio">
      <Title1>
            Portfolio
      </Title1>

    <Container> 
      <JobDiv>
        <ButtonZone link1={"https://get-that-job-nieves.netlify.app/"}/>
      </JobDiv>
      <Keepabl>
        <ButtonZone link1={"https://keepable-alex.netlify.app/"}
                     />
      </Keepabl>
      <Contactable>
        <ButtonZone link1={"https://contactable.netlify.app/"}
                    />
      </Contactable>
      <Doabl>
        <ButtonZone link1={"/"}
                     />
      </Doabl>
      <Organizabl>
        <ButtonZone link1={"/"}
                     />
      </Organizabl>
    </Container>
  </MainContainer>
  )
  
}

const MainContainer=styled.div`
  
`

const Container=styled.div`
   display:flex;
   flex-direction:row;
   flex-wrap:wrap;
   gap:10px;
   align-items:center;
   text-align:center;
   height:100%;
   justify-content:center;
   padding:50px;
   background-color:black;

   @media screen and (max-width: 360px){
     display:flex;
     flex-direction:column;
     gap:30px;   
     height:2500px;
     padding:0px;
   }
 `

const Title1 =styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  background-color:${colors.black};
  padding-top:20px;
  height:60px;
  text-align:center;
  background-color:black;
  color:white;
  padding:40px;
`

 const JobDiv=styled.div`
   display:flex;
   flex-direction:column;
   background-image:url(${job});
   width:350px;
   height:500px;
   background-size:cover;
   justify-content:flex-end;
   padding:20px;

   @media screen and (max-width: 360px){   
     width:90%;
     height:400px;
   }
 `

 const Keepabl=styled.div`
   display:flex;
   flex-direction:column;
   background-image:url(${keepableimg});
   width:700px;
   height:450px;
   background-size:cover;
   justify-content:flex-end;
   padding:20px;

   @media screen and (max-width: 360px){   
     width:90%;
     height:400px;
   }
 `

 const Doabl=styled.div`
   display:flex;
   flex-direction:column;
   background-image:url(${Doable});
   width:310px;
   height:550px;
   background-size:cover;
   justify-content:flex-end;
   padding:20px;

   @media screen and (max-width: 360px){   
     width:90%;
     height:400px;
   }
 `
 const Organizabl=styled.div`
   display:flex;
   flex-direction:column;
   background-image:url(${Organizable});
   width:800px;
   height:500px;
   background-size:cover;
   justify-content:flex-end;
   padding:20px;

   @media screen and (max-width: 360px){   
     width:90%;
     height:400px;
   }
 `

 const Contactable=styled.div`
   display:flex;
   flex-direction:column;
   background-image:url(${Contactabl});
   width:300px;
   height:550px;
   background-size:cover;
   justify-content:flex-end;
   padding:20px;

   @media screen and (max-width: 360px){   
     width:90%;
     height:400px;
   }
 `

 const Button=styled.button`
   border: none;
   border-radius: 50px;
   background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
   width: 37px;
   height:40px;
   color:${colors.white};
   box-shadow: 3px 3px 3px black;
   right:38%;
   cursor:pointer;
 ` 
 