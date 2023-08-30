import React, { Fragment } from "react";
import Header from "../../shared/components/Header";
import "../../App.css";

function Contact() {
  return (
    <Fragment>
      <Header />
      <div className="chatpage">
        Login or Signup to Chat with us then return here and click on the CHAT
        Button when it apprears or click on the Home Page to return to the main
        screen!
      </div>
    </Fragment>
  );
}

export default Contact;
