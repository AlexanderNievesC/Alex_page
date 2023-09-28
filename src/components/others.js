import styled from 'styled-components';
import { SlMagnifier as Lupa } from 'react-icons/sl';
import tesis from '../assets/Tesis.JPG';
import mapa from '../assets/mapa.JPG';
import autocad from '../assets/autocad.JPG';
import notion from '../assets/notion.jpg';
import React from 'react';

const ButtonZone= (props)=>{
    return (
      <Main>
        <Button><a href={props.link1}><Lupa color="white" size="20px"/></a></Button>
      </Main>
    );
  }

export default function Other() {
    return (
        <Container id="others">
            <Title>Others</Title>
            <Images>
                <JobDiv>
                    <ButtonZone link1={"https://repositorio.unsa.edu.pe/server/api/core/bitstreams/4371974a-4a22-49dc-a13a-33a0c20e1ad0/content"}/>    
                </JobDiv>

                <MapDiv>
                    <ButtonZone link1={"https://drive.google.com/file/d/1Looeup_RLgphItvvaEBdnqEqV_0-FhtY/view?usp=sharing"}/>    
                </MapDiv>

                <Autocad>
                    <ButtonZone link1={"https://drive.google.com/file/d/160_ikr2j_f8X0Ts4ME79EDiQHW0rhcb5/view?usp=sharing"}/>    
                </Autocad>

                <Notion>
                    <ButtonZone link1={"https://spiky-pineapple-e55.notion.site/ec98deb001bd4e44a79461c3513ff0c7?v=b900bdf5e44148fa96fc418b1f386a15&pvs=4"}/>    
                </Notion>                     
            </Images>
        </Container>
    )
}

const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    height:100%;
    padding:10px;
    background-color:black;

    @media screen and (max-width: 350px){   
      padding:0px;
      height:1900px;
  }
`

const Title=styled.div`

  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 31.52px;
  padding:40px;
  color:white

`
const Images=styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    flex-direction: row;
    gap:50px;
    padding: 30px;
    align-items:center;
    align-self:center;
    align-content:center;

    @media screen and (max-width: 596px){   
      padding:4px;
  }


`
const Main=styled.div`
display:flex;
flex-direction:row;
gap:10px;
width:150px;
height:50px;
`

const Button=styled.button`
border: none;
border-radius: 50px;
background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
width: 37px;
height:40px;
color:white;
box-shadow: 3px 3px 3px black;
right:38%;
cursor:pointer;
` 
const JobDiv=styled.div`
display:flex;
flex-direction:column;
background-image:url(${tesis});
width:350px;
height:500px;
background-size:cover;
justify-content:flex-end;
padding:20px;
box-shadow: 3px 3px 3px black;

@media screen and (max-width: 360px){   
  width:90%;
  height:400px;
}
`

const MapDiv=styled.div`
display:flex;
flex-direction:column;
background-image:url(${mapa});
width:700px;
height:500px;
background-size:cover;
justify-content:flex-end;
padding:20px;
box-shadow: 3px 3px 3px black;

@media screen and (max-width: 360px){   
  width:90%;
  height:400px;
}
`

const Autocad =styled.div`
display:flex;
flex-direction:column;
background-image:url(${autocad});
width:700px;
height:500px;
background-size:cover;
justify-content:flex-end;
padding:20px;
box-shadow: 3px 3px 3px black;

@media screen and (max-width: 360px){   
  width:90%;
  height:400px;
}
`

const Notion =styled.div`
display:flex;
flex-direction:column;
background-image:url(${notion});
width:900px;
height:500px;
background-size:cover;
justify-content:flex-end;
padding:20px;
box-shadow: 3px 3px 3px black;

@media screen and (max-width: 360px){   
  width:90%;
  height:400px;
}
`