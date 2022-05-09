import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContent = styled.div`
  text-align: center;
  h1 {
    background: linear-gradient(135deg, #5c258d, #4389a2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 10px 0;
  }
  p {
    color: #fff;
  }
`;
