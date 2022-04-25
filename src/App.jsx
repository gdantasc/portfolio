import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  GlobalStyle,
  ProfileContainer,
  ProfileContent,
  AboutContainer,
  TechnologiesContainer,
  ProjectContainer,
  ContactContainer,
} from "./style";

function App() {
  return (
    <>
      <Header />
      <ProfileContainer>
        <ProfileContent>
          <h1>Gabriel Cavalcante</h1>
          <p>Desenvolvedor Web Front-End</p>
        </ProfileContent>
      </ProfileContainer>
      <AboutContainer>
        <h1>Sobre</h1>
      </AboutContainer>
      <TechnologiesContainer>
        <h1>Tecnologias</h1>
      </TechnologiesContainer>
      <ProjectContainer>
        <h1>Projetos</h1>
      </ProjectContainer>
      <ContactContainer>
        <h1>Contato</h1>
      </ContactContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
