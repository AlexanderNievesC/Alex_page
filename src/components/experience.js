import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaSuitcase,FaUniversity } from 'react-icons/fa';

//data
const data=[
  {
  key:1,
  school:"National University of San Agustin of Arequipa",
  title:"Mining Engineer (2011 - 2015)",
  icon:<FaUniversity/>
  },
  
  {
  key:2,
  school:"Regional Government of Arequipa",
  title:"Mining Analyst (2017-2018)",
  icon:<FaSuitcase/>
  },

  {
  key:3,
  school:"SIMSA/PAN AMERICAN",
  title:"Mining Intern (2019)",
  icon:<FaSuitcase/>
  },
  
  {
  key:4,
  school:"CIBERTEC",
  title:"Data Architect (2020-2023)",
  icon:<FaUniversity/>
  },
  {
    key:5,
    school:"CODEABLE",
    title:"Full Stack Developer (2022)",
    icon:<FaUniversity/>
    },
  {
      key:6,
      school:"OEFA/BUREAU VERITAS",
      title:"Supervisor (2022)",
      icon:<FaSuitcase/>
  },
  {
    key:6,
    school:"MS4M",
    title:"Application Analyst (2023)",
    icon:<FaSuitcase/>
},
]
//main function
export default function Experience() {
  return (
    <div>
      <Language>
        <Title1>Experience & Education</Title1>
      </Language>

      <Container id="experience">
        <VerticalTimeline lineColor='gray'>

        {data.map(item => (
          <VerticalTimelineElement
            iconStyle={{background:'rgb(109, 219, 154)'}}
            icon={item.icon} 
          >
              <p>{item.school}</p>
              <p>{item.title}</p>
          </VerticalTimelineElement> 
        ))}
          
        </VerticalTimeline>
      </Container>
    </div>
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
  height:1500px;
  padding:50px;
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
const Language=styled.div`
  display:flex;
  flex-direction:column;
  background-color:${colors.black};
  align-items:center;
  text-align:center;
  padding:40px;
  gap:20px;
  background-color:${colors.gray[300]};
`
const Title1 =styled.div`
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 41.4px;
  color:${colors.black};
  padding-top:20px;
`
const Subtitle=styled.div`
  color:rgb(109, 219, 154);
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 19.76px;
`