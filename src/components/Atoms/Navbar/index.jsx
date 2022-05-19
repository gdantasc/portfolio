import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BsArrowDownCircle } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { NavContainer, IconContainer } from "./style";

function Navbar() {
  const iconsList = [
    { link: "#home", icon: <AiOutlineUser /> },
    { link: "#about", icon: <TiGroupOutline /> },
    { link: "#technologies", icon: <GrTechnology /> },
    { link: "#contact", icon: <BsArrowDownCircle /> },
  ];
  return (
    <NavContainer>
      {iconsList.map((iconElement) => (
        <a href={iconElement.link}>
          <IconContainer>{iconElement.icon}</IconContainer>
        </a>
      ))}
    </NavContainer>
  );
}

export default Navbar;
