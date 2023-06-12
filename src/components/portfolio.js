import React from 'react'
import styled from 'styled-components';
import job from '../assets/job.png';
import keepableimg from '../assets/keepable.jpg';
import Contactabl from '../assets/Contactable.jpg';
import Doable from '../assets/Doable.jpg';
import Organizable from '../assets/Organizable.png';
import { colors } from '../styles/colors'
import { SlMagnifier as Lupa } from 'react-icons/sl';


export default function Portfolio() {


  return (
   <Container> 
           <JobDiv><Button><a href="https://get-that-job-nieves.netlify.app/"><Lupa color="white"/></a></Button></JobDiv>
           <Keepabl><Button><a href="https://keepable-alex.netlify.app/"><Lupa color="white"/></a></Button></Keepabl>
           <Contactable><Button><a href="/"><Lupa color="white"/></a></Button></Contactable>
           <Doabl><Button><a href="/"><Lupa color="white"/></a></Button></Doabl>
           <Organizabl><Button><a href="/"><Lupa color="white"/></a></Button></Organizabl>
           </Container>

  )
}

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
  
   background-color:${colors.black};

   @media screen and (max-width: 360px){
     display:flex;
     flex-direction:column;
     gap:10px;   
     height:900px;
   }
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