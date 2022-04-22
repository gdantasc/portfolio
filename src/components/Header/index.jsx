import React from "react";
import { HeaderComponent, Path, Media } from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <a
            href="https://github.com/gdantasc"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-d-cavalcante/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </Media>
      </nav>
    </HeaderComponent>
  );
};

export default Header;
