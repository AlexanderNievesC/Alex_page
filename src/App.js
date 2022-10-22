import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/nav-bar";
import { Contact, Home, NotFound, About, Experience, Portfolio } from "./pages";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
