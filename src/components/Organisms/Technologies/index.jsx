import React from "react";
import { TechnologiesContainer } from "./style";
import Card from "../../Atoms/Card";
const Technologies = () => {
  return (
    <TechnologiesContainer id="technologies">
      <div>
        <h1>Tecnologias</h1>
        <Card name="HTML" />
      </div>
    </TechnologiesContainer>
  );
};

export default Technologies;
