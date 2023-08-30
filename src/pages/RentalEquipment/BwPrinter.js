import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getApiCall } from "../../shared/api-utils";
import Header from "../../shared/components/Header";

function BwPrinter() {
  const [printers, setPrinters] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // on page load this code will ge execute
    // componentDidMount()

    getApiCall("/bwprinters").then((response) => {
      if (response?.status === false) {
        // redirect to login
        localStorage.clear();
        navigate("/login");
      } else {
        setPrinters(response);
      }
    });
  }, [navigate]);

  return (
    <Fragment>
      <Header />
      {printers.map((x) => (
        <div className="ptr-item">
          <span>
            <img src={x.ptrurl} width="600" height="556" alt="copier" />
          </span>
          <span>
            <pre>{x.description}</pre>
          </span>
        </div>
      ))}
    </Fragment>
  );
}

export default BwPrinter;
