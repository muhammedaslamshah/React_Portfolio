import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
function App() {
  return (
    <>
    <Header />
    <Home />
    <About/>
    <Skills/>
    </>
  );
}

export default App;
