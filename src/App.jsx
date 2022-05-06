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

      <ContactContainer id="contact">
        <h1>Contato</h1>
      </ContactContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
