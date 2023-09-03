import React, { Fragment } from "react";
import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import "./Index.css";

function Index() {
  return (
    <Fragment>
      <Header />
      <div className="desc1">
        We RENT Copiers, Fax Machines &amp; Printers for use in
        Pennsylvania(east of Harrisburg), New Jersey, Delaware (parts of
        Maryland), Washington, DC, Southern New York, Southern Connecticut,
        Virginia and Pittsburgh.
      </div>
      <div className="desc2">
        <div className="desc3">
          <strong>
            IN OUR 23rd YEAR!!!!!! We were one of the FIRST and we are the
            BEST!!!!
          </strong>
        </div>
        <b>Reasons to Rent a Photocopier:</b>
        <b>
          <br />
          1. No maintenance issues. <br />
          We fix any problems with the machine quickly and free.
        </b>
        <b>
          <br />
          2. It's much cheaper than buying and the cost can be written off as a
          business expense.
        </b>

        <b>
          <br />
          3. Everything you need to complete your task is included
          <br />
          (except paper) toner and copier parts, sorter, stapler, <br />
          auto feeder and color capability (if required). <br />
          (we can add scanning, faxing and printer options as well!!!!!)
        </b>
        <b>
          <br />
          4.&nbsp; We have many flexible rental plans.&nbsp; Just contact us!
        </b>
      </div>

      <div className="desc4">
        Former Satisfied Clients:
        <div className="desc5">
          1. MTV - Music Television, NY <br />
          2. White House Communication Agency - The White House, D.C.
          <br />
          3. NBA Playoffs - NJ Nets - Meadowlands, NJ <br />
          4. Harpo Productions <br />
          5. Miss America Pageant <br />
          6. Addidas Corporation <br />
          7. 2012 Democratic National Convention <br />
          8. NBC and CBS Sports
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Index;
