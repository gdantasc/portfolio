import Header from "./components/Atoms/Header";
import Footer from "./components/Atoms/Footer";
import {
  GlobalStyle,
  ProfileContainer,
  ProfileContent,
  AboutContainer,
  TechnologiesContainer,
  ProjectsContainer,
  ContactContainer,
} from "./style";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
