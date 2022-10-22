import styled from "@emotion/styled";
import TimeLine from "../components/Timeline/time-line";
import { colors } from "../styles";
import { GrReactjs, GrMysql } from "react-icons/gr";
import { SiJavascript, SiRubyonrails } from "react-icons/si";
import { DiRuby, DiCss3 } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoPython } from "react-icons/io";

const MainContainer = styled.div`
  background-color: ${colors.gray[300]};
`;

const Styledh1 = styled.h1`
  display: grid;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
`;

const StyledP = styled.p`
  display: grid;
  text-align: center;
  padding-top: 10px;
`;

const StyleIcon = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

const About = () => {
  return (
    <MainContainer>
      <Styledh1>My path</Styledh1>
      <StyledP>Take a look at the main events of my laboral life</StyledP>
      <TimeLine />
      <Styledh1>My skills </Styledh1>

      <StyleIcon>
        <IoLogoPython size={40} />
        <DiRuby size={40} />
        <SiRubyonrails size={40} />
        <GrMysql size={40} />
        <TiHtml5 size={40} />
        <DiCss3 size={40} />
        <SiJavascript size={40} />
        <GrReactjs size={40} />
      </StyleIcon>
    </MainContainer>
  );
};

export default About;
