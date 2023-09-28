import About from "./components/about";
import AboutDetail from "./components/about-detail";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio";
import Skill from "./components/skill";
import {BrowserRouter,  Routes,Route,} from "react-router-dom";
import Header from "./components/header";
import Other from "./components/others";

//main function
function App() {
  return (
   <div>
    <Header/> 
    <About/>
    <AboutDetail/> 
    {/* <Skill/>  */}
    {/* <Language/> */}
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Other/>
    <Footer/>
   </div> 
  );
}

export default App;
