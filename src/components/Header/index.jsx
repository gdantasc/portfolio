import React from "react";
import { HeaderComponent, Path, Media } from "./style";

const Header = () => {
  return (
    <HeaderComponent>
      <nav>
        <Path>
          <a>Home</a>
          <a>Sobre</a>
          <a>Tecnologias</a>
          <a>Projetos</a>
          <a>Contato</a>
        </Path>
        <Media>
          <a>Github</a>
          <a>Linkedin</a>
        </Media>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
