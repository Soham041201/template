import React from "react";
import logo from "../assets/logo.svg";
import "./navbar.css";

type Props = {};

const Appbar = (props: Props) => {
  return (
    <div className="Navbar-Main">
      <div className="Navbar-Logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="Navbar-Link">
        <a href="/" className="Nav-link">
          Sign In
        </a>
        <button className="Dukaan-For-PC-Button">Dukaan for PC</button>
      </div>
    </div>
  );
};

export default Appbar;
