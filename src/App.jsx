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
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
