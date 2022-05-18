import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { NavContainer, IconContainer } from "./style";

function Navbar() {
  const iconsList = [
    { link: "#home", icon: <AiOutlineUser /> },
    { link: "#User", icon: <TiGroupOutline /> },
    { link: "#home", icon: <BiMessageRoundedDots /> },
    { link: "#home", icon: <BsArrowDownCircle /> },
  ];
  return (
    <NavContainer>
      {iconsList.map((iconElement) => (
        <div href={iconElement.link}>
          <IconContainer>{iconElement.icon}</IconContainer>
        </div>
      ))}
    </NavContainer>
  );
}

export default Navbar;
