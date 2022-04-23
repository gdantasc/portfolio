import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle, ProfileContainer } from "./style";

function App() {
  return (
    <>
      <Header />
      <ProfileContainer>
        <h1>Desenvolvedor Front-End</h1>
      </ProfileContainer>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
