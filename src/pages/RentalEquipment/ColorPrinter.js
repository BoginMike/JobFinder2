import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getApiCall } from "../../shared/api-utils";
import Header from "../../shared/components/Header";

function ColorPrinter() {
  const [clrprinter, setClrPrinter] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // on page load this code will ge execute
    // componentDidMount()

    getApiCall("/clrprinters").then((response) => {
      if (response?.status === false) {
        // redirect to login
        localStorage.clear();
        navigate("/login");
      } else {
        setClrPrinter(response);
      }
    });
  }, [navigate]);

  return (
    <Fragment>
      <Header />
      {clrprinter.map((x) => (
        <div className="ptr-item">
          <span>
            <img src={x.clrptrurl} width="600" height="556" alt="copier" />
          </span>
          <span>
            <pre>{x.clrdescription}</pre>
          </span>
        </div>
      ))}
    </Fragment>
  );
}

export default ColorPrinter;
