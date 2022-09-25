import React from "react";
import Insta from "../assets/ImagesFooter/iconInsta.png";
import Twitter from "../assets/ImagesFooter/iconTwitter.png";
import Face from "../assets/ImagesFooter/iconFacebook.png";
import Pinterest from "../assets/ImagesFooter/iconPinterest.png";
import * as S from "../Styles/StyleFooter";

const Footer = () => {
  return (
    <S.Footer>
      <S.ContainerNavFooter>
        <S.BoxNetworks>
          <S.ImageNetworks src={Insta} alt="" />
          <S.ImageNetworks src={Twitter} alt="" />
          <S.ImageNetworks src={Face} alt="" />
          <S.ImageNetworks src={Pinterest} alt="" />
        </S.BoxNetworks>
        <S.BoxNav>
          <S.Ul>
            <S.Li>
              <S.Link href="#about" alt="">
                About
              </S.Link>
            </S.Li>
            <S.Li>
              <S.Link href="#recipes" alt="">
                Recipes
              </S.Link>
            </S.Li>
            <S.Li>
              <S.Link href="#subscribe" alt="">
                Subscribe
              </S.Link>
            </S.Li>
          </S.Ul>
        </S.BoxNav>
      </S.ContainerNavFooter>
      <S.ContainerInfo>
        <S.P>
          Layout produzido por Vai na Web para fins exclusivamente educacionais.
          Referência:
          https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
        </S.P>
        <S.P>&copy; by Taíse Jungthon and Raquel Muniz</S.P>
      </S.ContainerInfo>
    </S.Footer>
  );
};

export default Footer;
