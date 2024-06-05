import React, { useEffect, useState, Fragment } from "react";
import jwt_decode from "jwt-decode";
// import { Avatar } from "@mui/material";
import { getApiCall } from "../api-utils";
import Navbar from "./Navbar";
import "./Header.css";
import "./Navbar.css";
import twit from "../pages/Index/webimages/twitter.png";
import face from "../pages/Index/webimages/facebook.png";
import pint from "../pages/Index/webimages/pinterest.png";
import inst from "../pages/Index/webimages/instagram.jpeg";
import linked from "../pages/Index/webimages/linkedIn.png";
import phila from "../pages/Index/webimages/jobfinderimage1.jpg";
import phila1 from "../pages/Index/webimages/jobfinderimage2.jpg";
// import newyork from "../../pages/Index/webimages/NEWYORK1.jpg";
// import wash from "../../pages/Index/webimages/washington-dc2.jpg";
// import AC from "../../pages/Index/webimages/ac1.jpg";
import Footer from "./Footer";

export default function Header() {
  //For users that do not wish to sign in, a guest login is created.
  //When they signup guest will be overwritten.
  const [username, setUsername] = useState("guest");
  const [password, setPassword] = useState("guest");

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let decoded = jwt_decode(token);
      setPassword(decoded.password);
      setUsername(decoded.username);
    } else {
      getApiCall("/users/generate-token", {
        username: username,
        password: password,
      }).then((response) => {
        // response is json response sent from the server
        if (response.token) {
          // username and passord is correct and token is generated successfully.
          localStorage.setItem("token", response.token);
        }
      });
    }
  }, [username, password]);

  // Brought over from old program to recreate look....some things will be updated.
  return (
    <Fragment>
      <div className="Index"></div>
      <div className="marvel-device s5 white">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen"></div>
        {/* <div className="home"> */}
        <div className="auto-style4">
          <a href="https://twitter.com/CopierRental">
            <img
              alt="copy machine rental twitter"
              height="33"
              longdesc="Twitter/copierrental"
              src={twit}
              width="35"
            />
          </a>
          &nbsp;
          <a href="https://www.facebook.com/copymachinerental/">
            <img
              alt="Facebook.com/copymachinerental"
              // className="auto-style5"
              height="33"
              longdesc="Facebook Copy Machine Rental"
              src={face}
              width="35"
            />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/copierrental/">
            <img
              alt="Instagram.com/copierrental"
              // className="auto-style4"
              height="33"
              longdesc="Instagram Copy Machine Rental"
              src={inst}
              width="35"
            />
          </a>
          <a href="https://www.linkedin.com/in/michael-bogin-02366b29/">
            <img
              alt="https://www.linkedin.com/in/michael-bogin-02366b29/"
              // className="auto-style4"
              height="33"
              longdesc="LinkedIn CopierRental"
              src={linked}
              width="35"
            />
          </a>
          <a href="https://www.pinterest.com/copierrental/">
            <img
              alt="pinterest.com/copierrental"
              // className="auto-style4"
              height="33"
              longdesc="Pinterest Copy Machine Rental or Copier Rental"
              src={pint}
              width="35"
            />
          </a>
          <span className="auto-style6">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <font face="Perpetua" color="#000000" size="4">
              <a href="mailto:Jobs@jobsfinderai.com">Jobs@JobsFinderAI.com</a>
              <img
                border="0"
                src="https://www.copymachinerental.com/Images/animated_mail_box.gif"
                width="58"
                height="40"
                alt="Phila Philly Philadelphia"
              />
            </font>
          </span>
          <div className="auto-style7">
            <strong>609-332-5839</strong>
          </div>
        </div>
      </div>

      <blockquote>
        <p>
          <span className="title1">Jobs Finder AI</span>
          <span className="title2">
            <p>Find your perfect job!</p>
          </span>
        </p>
        <p>
          <b>
            <font face="Abadi MT Condensed Light" color="#0000FF" size="6">
              <img
                className="auto-style2"
                border="0"
                width="150"
                height="70"
                src={phila}
                alt="Phila Philly Philadelphia"
              />
              <img
                className="auto-style1"
                border="0"
                width="150"
                height="70"
                src={phila1}
                alt="Phila Philly Philadelphia"
              />
              &nbsp;
            </font>

            {/* <font size="6" color="#0000FF">
              <img
                border="0"
                src={newyork}
                width="213"
                height="156"
                alt="Phila Philly Philadelphia"
              />
            </font>
            <font size="6" color="#0000FF">
              &nbsp;&nbsp;
            </font>
            <img
              border="0"
              src={wash}
              width="213"
              height="154"
              alt="Phila Philly Philadelphia"
            />
            <font size="6" color="#0000FF">
              &nbsp;&nbsp;
              <img
                border="0"
                src={AC}
                width="216"
                height="165"
                alt="Phila Philly Philadelphia"
              />
             </font> */}
          </b>
        </p>

        {/* <p align="center">
          <b>
            <font size="5" color="#0000FF">
              &nbsp;&nbsp;&nbsp;{" "}
            </font>
            <font color="#0000FF" size="1">
              <br />
            </font>

            <font face="Lucida Console" size="1" color="#000000">
              &nbsp;&nbsp;&nbsp;
            </font>
          </b>
        </p> */}
        <Navbar />
      </blockquote>

      {/* <div className="app-header"></div> */}

      <Footer />
    </Fragment>
  );
}
