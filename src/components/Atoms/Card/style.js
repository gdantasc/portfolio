import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  filter: grayscale(1);
  transition: filter 0.1s linear;

  &:hover {
    filter: grayscale(0);
  }
`;
