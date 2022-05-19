import Header from "./components/Atoms/Header";
import Footer from "./components/Atoms/Footer";
import Navbar from "./components/Atoms/Navbar";
import About from "./components/Organisms/About";
import Technologies from "./components/Organisms/Technologies";
import Projects from "./components/Organisms/Projects";
import Contact from "./components/Organisms/Contact";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Navbar />
      <About id="about" />
      <Technologies id="technologies" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
