import React from "react";
import { HeaderComponent, Path, Media } from "./style";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderComponent>
      <nav>
        <Path>
          <a href="#start">Home</a>
          <a href="#about">Sobre</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
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
