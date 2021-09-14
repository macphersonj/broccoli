import React from "react";
import "../Header/header.scss";
import logo from "../../assets/images/broccoli-co.svg";

const Header = () => {
  return (
    <div className="c-header">
      <div className="l-container">
        <div className="c-logo">
          <img src={logo} alt="Broccoli&Co" />
        </div>
      </div>
    </div>
  );
};

export default Header;
