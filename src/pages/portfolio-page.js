import styled from "@emotion/styled";
import Carousel from "../components/Carousel/carousel";
import { colors } from "../styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let data = [
  {
    id: 1,
    name: "Classroom",
    figure_link:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/512px-Google_Classroom_Logo.svg.png?20221017163738",
    deployment: "****",
    repository: "https://github.com/AlexanderNievesC/1_AppClassRoom",
    API: "****",
  },
  {
    id: 2,
    name: "Request data",
    figure_link:
      "https://www.svgrepo.com/show/190371/analytics-data-analytics.svg",
    deployment: "https://request-data.netlify.app/",
    repository: "https://github.com/AlexanderNievesC/2_AppRequestData",
    API: "https://randomuser.me/api",
  },
  {
    id: 3,
    name: "Online Market",
    figure_link: "https://cdn-icons-png.flaticon.com/512/2230/2230606.png",
    deployment: "https://bsale-app.netlify.app/",
    repository: "https://github.com/AlexanderNievesC/3_AppMarket_FrontEnd",
    API: "https://github.com/AlexanderNievesC/3_AppMarket_BackEnd",
  },
  {
    id: 4,
    name: "Get that job",
    figure_link: "https://cdn-icons-png.flaticon.com/512/1694/1694787.png",
    deployment: "****",
    repository: "https://github.com/AlexanderNievesC/4_AppGetThatJob_FrontEnd",
    API: "https://github.com/AlexanderNievesC/4_AppGetThatJob_BackeEnd",
  },
];

function Portfolio() {
  return (
    <div>
      <Title>
        <h1>My Folder</h1>
        <div>Take a look at some of my projects</div>
      </Title>
      <DirectionContainer>
        {data.map((element) => {
          return (
            <div>
              <ImageItem src={element.figure_link} alt="Image"></ImageItem>
              <h3>
                <Link simple href={element.deployment}>
                  {element.name}
                </Link>
              </h3>

              <div>
                Repository: <Link href={element.repository}>Click Here</Link>
              </div>

              <div>
                API: <Link href={element.API}>Click Here</Link>
              </div>
            </div>
          );
        })}
      </DirectionContainer>
    </div>
  );
}

const DirectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  padding: 0px 200px 0px 200px;
  text-align: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 50px;
  align-items: center;
  padding-bottom: 20px;
`;

const ImageItem = styled.img`
  border-radius: 4px;
  width: 300px;
  height: 300px;
  padding: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.simple ? "black" : "blue")};
`;

export default Portfolio;
