import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle, ProfileContainer, ProfileContent } from "./style";

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
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
