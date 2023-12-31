import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Container>
        <Skills />
      </Container>
      <Container>
        <Projects />
      </Container>
      <Footer />
    </>
  );
}

export default App;
