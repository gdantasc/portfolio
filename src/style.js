import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #010715;
        --text-title: #363f5f;
        --text-body: #969cb3;

        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --purple: #241359;
        --blue-light: #6933ff;
        
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media(max-width:1080px) {
            font-size: 93.75%;
        }
        @media(max-width:720px){
            font-size: 87.5%; 
        }
    }
    body{ 
        background:  var(--background);
        -webkit-font-smoothing: antialiased;

    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }      
`;

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
