import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Saira Extra Condensed', sans-serif;
    }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 95vw;
  height: 145vh;
  position: absolute;
  top: 3%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveLogo = styled.img`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    width: 95%;
    heigth: 100%;
    padding-top: 2vh;
  }
`;

export const RC = styled.img`
  position: fixed;
  top: 5%;
  left: 5%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  width: 50%;
  position: fixed;
  top: 5%;
  right: 5%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
  height: 10vh;
  @media (max-width: 800px) {
    position: absolute;
    backdrop-filter: blur(3px);
    width: 40vw;
    height: 30%;
    top: 16%;
    left: 35%;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 5;
    background: rgb(255, 200, 190);
    background: radial-gradient(
      circle,
      rgba(255, 200, 190, 1) 0%,
      rgba(208, 206, 205, 1) 100%
    );
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Li = styled.li`
  font-size: 1.2rem;
  width: 15vw;
  height: 8vh;
  color: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 35vw;
    height: 8vh;
    align-items: center;
  }
  &:hover {
    border: solid 3px;
    cursor: pointer;
  }
`;

export const H1 = styled.h1`
  font-size: 5rem;
  width: 50vw;
  position: absolute;
  top: 75vh;
  left: 40vw;
  color: #373737;
  @media (max-width: 800px) {
    font-size: 2rem;
    top: 50vh;
    left: 30vw;
  }
`;
export const Button = styled.button`
  display: none;
  @media (max-width: 800px) {
    position: absolute;
    top: 2%;
    right: 2%;
    width: 20vw;
    height: 10vh;
    border: none;
    background-color: transparent;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
  }
`;
