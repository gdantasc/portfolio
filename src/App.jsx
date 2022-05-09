import Header from "./components/Atoms/Header";
import Footer from "./components/Atoms/Footer";
import Profile from "./components/Organisms/Profile";
import About from "./components/Organisms/About";
import Technologies from "./components/Organisms/Technologies";
import Projects from "./components/Organisms/Projects";
import Contact from "./components/Organisms/Contact";

import { GlobalStyle } from "./style";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
