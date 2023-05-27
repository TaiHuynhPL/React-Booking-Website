import React from "react";

import HeaderBackground from "./HeaderBackground/HeaderBackground";
import HeaderInput from "./HeaderInput/HeaderInput";
import "./Header.css";

//Component header chứa 2 component là input và background
const Header = () => {
  return (
    <div>
      <HeaderBackground></HeaderBackground>
      <HeaderInput></HeaderInput>
    </div>
  );
};

export default Header;
