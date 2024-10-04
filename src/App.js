import NavBar from "./components/NavBar";
import Home from './components/Home';
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
