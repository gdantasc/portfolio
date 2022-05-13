import React from "react";
import { CardContainer, Logo } from "./style";
import Html from "../../../assets/html5.svg";

const Card = (props) => {
  return (
    <CardContainer>
      <h1>{props.name}</h1>
      <Logo src={Html} />
    </CardContainer>
  );
};

export default Card;
