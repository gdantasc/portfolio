import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 5rem;
  background: var(--purple);
  border-bottom: 2px solid var(--blue-light);
  display:flex ;
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

export const Path = styled.div`
  color: #fff;
  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    cursor: pointer;
    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: var(--green);
    }

    &.active {
      color: var(--white);
      font-weight: bold;
    }

    &.active::after {
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--yellow);
    }
  }
`;

export const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.5rem;
  height: 5rem;
  transition: color 0.2s;
  cursor: pointer;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #fff;

    :hover {
      filter: brightness(0.5);
    }
  }
`;
