import React, { useState } from "react";
import Logo from "../assets/Images/Grupo de máscara 2.png";
import * as S from "../Styles/StyleHeader";
import RC from "../assets/Images/RC.svg";
import ResponsiveLogo from "../assets/Images/Grupo de máscara 4.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Modal = () => {
    return (
      <nav>
        <S.Ul>
          <S.Link href="#about" alt="">
            <S.Li>ABOUT</S.Li>
          </S.Link>
          <S.Link href="#recipes" alt="">
            <S.Li>RECIPES</S.Li>
          </S.Link>
          <S.Link href="#subscribe" alt="">
            <S.Li>SUBSCRIBE</S.Li>
          </S.Link>
        </S.Ul>
      </nav>
    );
  };

  return (
    <S.Header>
      <S.Logo src={Logo} alt="logo do site" />
      <S.ResponsiveLogo src={ResponsiveLogo} alt="Logo Responsiva" />
      <S.RC src={RC} alt="RC" />
      <S.Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? "x" : "="}
      </S.Button>
      {open && Modal()}
      <S.Menu>
        <S.Ul>
          <S.Link>
            <S.Li>ABOUT</S.Li>
          </S.Link>
          <S.Link>
            <S.Li>RECIPES</S.Li>
          </S.Link>
          <S.Link>
            <S.Li>SUBSCRIBE</S.Li>
          </S.Link>
        </S.Ul>
      </S.Menu>
      <S.H1>RECIPES</S.H1>
    </S.Header>
  );
};

export default Header;
