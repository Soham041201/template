import React from "react";
import logo from "../assets/logo.svg";
import "./footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="Footer-Container">
      <img src={logo} alt="" className="Footer-logo"/>
      <div className="Footer-Links">
        <a href="/" className="Footer-Link">
          Contact
        </a>
        <a href="/" className="Footer-Link">
          Tutorials
        </a>
        <a href="/" className="Footer-Link">
          Privacy
        </a>
        <a href="/" className="Footer-Link">
          About
        </a>
        <a href="/" className="Footer-Link">
          Facebook
        </a>
        <a href="/" className="Footer-Link">
          FAQ's
        </a>
        <a href="/" className="Footer-Link">
          Blog
        </a>
        <a href="/" className="Footer-Link">
          Banned items
        </a>
        <div className="Footer-Link Jobs">
          <a href="/">Jobs</a>
          <div className="Jobs-Number">
            <span>3</span>
          </div>
        </div>
        <a href="/" className="Footer-Link">
          Twitter
        </a>
        <a href="/" className="Footer-Link Last">
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;
