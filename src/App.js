import React from "react";
import * as S from "./Styles/StyleHeader";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div>
      <S.GlobalStyle />      
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
