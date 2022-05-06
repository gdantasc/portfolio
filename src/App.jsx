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

      <AboutContainer id="about">
        <h1>Sobre</h1>
      </AboutContainer>
      <TechnologiesContainer id="technologies">
        <h1>Tecnologias</h1>
      </TechnologiesContainer>
      <ProjectsContainer id="projects">
        <h1>Projetos</h1>
      </ProjectsContainer>
      <ContactContainer id="contact">
        <h1>Contato</h1>
      </ContactContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
