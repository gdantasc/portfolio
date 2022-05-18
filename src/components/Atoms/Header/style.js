import styled, { keyframes } from "styled-components";

const animateTitle = keyframes`
  from {
      transform: translateY(-100px);
      opacity: 0;
    }
      
  to {
      transform: translateY(0);
      opacity: 1;
    }
`;

export const HeaderComponent = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 25px;
  backdrop-filter: blur(20px);
  animation: ${animateTitle} 1s ease;

  h3 {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    font-family: Poppins;
  }

  h2 {
    font-size: 16px;
    font-weight: 100;
    color: var(--color-pri);
    font-family: "Open Sans";
    letter-spacing: 1px;
  }
`;
