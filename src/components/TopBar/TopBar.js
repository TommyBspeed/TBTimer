import React, { useState, useEffect } from "react";
import "./TopBar.css";
import Logo from "./TBTimerLogo.png";

export default function Header() {
  return (
    <>
      <header className="TopBar">
        <img
          className="LogoImg"
          src={Logo}
          alt="TBTimer Logo"
          onClick={(event) => (window.location.href = "/")}
        ></img>

        <h1 className="headerText">TBTimer</h1>
      </header>
    </>
  );
}
