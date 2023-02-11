import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//data
const data=[
  {
  id:1,
  title:"Skills",
  content:"Learn about my skills in programming",
  link:`Learn more`
  },
  
  {
  id:2,
  title:"Experience",
  content:"Get to know the timeline of my education",
  link:"Learn more"

  },

  {
  id:3,
  title:"Portfolio",
  content:"Check my previous works",
  link:"Learn more "
  },
]
//main function
export default function Experience() {
  return (
    <Container id="experience">
      <Title>Experience</Title>
      <VerticalTimeline>
        {data.map(element=>{
          return (
              <VerticalTimelineElement>
                <div>{element.id}</div>
                <div>{element.content}</div>
              </VerticalTimelineElement>
          )
        })}

      </VerticalTimeline>
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
`
const Container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:1000px;
  background-color:${colors.gray[100]};
  padding-top:40px;
  padding-bottom:10px;
  text-align:center;
`


