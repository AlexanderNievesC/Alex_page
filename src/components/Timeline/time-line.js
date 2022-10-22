import Data from "./data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import styled from "@emotion/styled";
import Button from "../Button/button";

const Styledh5 = styled.h5`
  margin: 0px;
`;

const Styledp = styled.p`
  padding-bottom: 10px;
`;

function Timeline() {
  const workIconStyle = { background: "#06D6A0" };
  const schoolIconStyle = { background: "#f9c74f" };

  return (
    <div>
      <VerticalTimeline>
        {Data.map((element) => {
          const isSchool = element.type === "school";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={isSchool ? schoolIconStyle : workIconStyle}
              icon={isSchool ? <MdSchool /> : <GiMining />}
            >
              <h3>{element.title}</h3>
              <Styledh5>{element.location}</Styledh5>
              <Styledp>{element.description}</Styledp>
              <a
                href={element.link}
                target="_blank"
                download={element.download}
              >
                <Button>{element.buttonText}</Button>
              </a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
