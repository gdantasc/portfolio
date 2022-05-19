import styled, { keyframes } from "styled-components";

export const IconContainer = styled.div`
  svg {
    font-size: 50px;
    border-radius: 50%;
    padding: 10px;
    transition: fill 0.1s ease;
    fill: rgb(209, 217, 252);

    &:hover {
      fill: rgba(88, 117, 248, 0.151);
      border: 2px solid rgba(88, 117, 248, 0.192);
    }
    @media (max-width: 820px) {
      font-size: 70px;
      border-radius: 50%;
      padding: 10px;
      transition: fill 0.1s ease;
      fill: rgb(209, 217, 252);
    }

    @media (max-width: 500px) {
      font-size: 50px;
      border-radius: 50%;
      padding: 10px;
      transition: fill 0.1s ease;
      fill: rgb(209, 217, 252);
    }
  }
`;

const fadeNavIn = keyframes`
from {
    transform: translateY(-50%) translateX(-100px);
    opacity: 0 ;
} to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
    
}
`;

const fadeNavBottom = keyframes`
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    } from {
        transform: translateX(-50%) translateY(100px);
        opacity: 0;
    }
`;

export const NavContainer = styled.nav`
  position: fixed;
  left: 40px;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.596);
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  border-radius: 50px;
  animation: ${fadeNavIn} 1s ease forwards;

  a {
    position: relative;
    background-color: rgba(0, 0, 0, 0.397);
    border-radius: 50%;
  }

  @media (max-width: 820px) {
    position: fixed;
    z-index: 1000;
    backdrop-filter: blur(30px);
    left: 50%;
    top: 88%;
    background-color: rgba(0, 0, 0, 0.596);
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 23px;
    border-radius: 100px;
    animation: ${fadeNavBottom} 1s ease forwards;
  }

  @media (max-width: 500px) {
    position: fixed;
    z-index: 1000;
    backdrop-filter: blur(30px);
    left: 50%;
    top: 88%;
    background-color: rgba(0, 0, 0, 0.596);
    padding: 12px 20px;
    max-width: 99%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 23px;
    border-radius: 50px;
    animation: ${fadeNavBottom} 1s ease forwards;
  }
`;

export const AContainer = styled.a`
  position: relative;
  background-color: rgba(0, 0, 0, 0.397);
  border-radius: 50%;

  font-size: 50px;
  border-radius: 50%;
  padding: 10px;
  transition: fill 0.1s ease;
  fill: rgb(209, 217, 252);

  &:hover {
    fill: rgba(88, 117, 248, 0.151);
    border: 2px solid rgba(88, 117, 248, 0.192);
  }

  @media (max-width: 820px) {
    font-size: 70px;
    border-radius: 50%;
    padding: 10px;
    transition: fill 0.1s ease;
    fill: rgb(209, 217, 252);
  }

  @media (max-width: 500px) {
    font-size: 50px;
    border-radius: 50%;
    padding: 10px;
    transition: fill 0.1s ease;
    fill: rgb(209, 217, 252);
  }
`;

///////FALTA O ACTIVE
