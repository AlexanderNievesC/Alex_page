import About from "./components/about";
import AboutDetail from "./components/about-detail";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Language from "./components/languaje";
import Portfolio from "./components/portfolio";
import Skill from "./components/skill";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <AboutDetail/>
      <Skill/>
      <Language/>
      <Experience/> 
      <Portfolio/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
