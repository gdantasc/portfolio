import styled from "styled-components";

export const HeaderComponent = styled.header`
  background: var(--background);
  border-bottom: 2px solid var(--blue-light);
  display:flex ;
  width: 100%;
  top: 0;
  position: fixed;
  color: #fff;
  font-weight: bold;

  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

    nav {
        height: 5rem;
        display: flex;
        width: 100% ;
        justify-content: space-around;
        }
  }
  `;

export const Menu = styled.div`
  a {
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    cursor: pointer;
    transition: color 0.2s;
    text-decoration: none;
    color: #fff;

    & + a {
      margin-left: 2rem;
    }
    &:after {
      content: "";
      position: absolute;
      top: 30px;
      width: 0;
      height: 3px;
      display: block;
      right: 15px;
      background: linear-gradient(135deg, #5c258d, #4389a2);
      -webkit-text-fill-color: transparent;
      transition: width 0.5s ease;
    }

    &:hover {
      /* color: var(--green); */
      background: linear-gradient(135deg, #5c258d, #4389a2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:hover:after {
      width: 80%;
      left: 10px;
      background: linear-gradient(135deg, #5c258d, #4389a2);
      -webkit-text-fill-color: transparent;
      cursor: pointer;
    }
  }
  @media (max-width: 670px) {
    display: none;
  }
`;

export const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.5rem;
  height: 5rem;
  transition: color 0.2s;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #fff;

    :hover {
      cursor: pointer;
      background: linear-gradient(135deg, #5c258d, #4389a2);
      -webkit-text-fill-color: transparent;
      border-radius: 50px;
      width: 30px;
      height: 30px;
    }
  }
`;
