import React, { Fragment } from "react";
import Header from "../../shared/components/Header";
import "../../App.css";

function About() {
  return (
    <Fragment>
      <Header />
      <p align="left" className="desc3">
        <b>Company Information:</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <a href="https://WWW.CopyMachineRental.com">
          WWW.CopyMachineRental.com
        </a>
        &nbsp; is a division of Copying Technologies, Inc.&nbsp; We are located
        conveniently throughout the NY,NJ,DC,PA,VA and DE areas.&nbsp; We are
        very strong in Philadelphia , Newark , Atlantic City and New York
        City!Our main office is at 101 E. Main Street in Maple Shade, NJ 08052.
        Ask for Mike.
      </p>
    </Fragment>
  );
}

export default About;
