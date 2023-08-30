import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../shared/components/Header";
import "../../App.css";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { getApiCall } from "../../shared/api-utils";

function LocationsServed() {
  // const [zips, setZips] = useState([]);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // function save(data) {
  //   console.log("zipsss1");
  //   // getApiCall("/zips", data).then((x) => {
  //   //   alert("zip added");
  //   // });
  //   getApiCall("/zips").then((response) => {
  //     if (response?.status === true) {
  //       setZips(response);
  //     }
  //   });
  //   zips.map((x) => (
  //     <div className="zip-item">
  //       {/* <span>{x.zip}</span> */}
  //       {/* <span>{x.city}</span> */}
  //       console.log(x.zip);
  //     </div>
  //   ));
  // }

  const [zips, setZips] = useState([]);

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
        setZips(response);
      }
    });
  }, [navigate]);
  return (
    <Fragment>
      <Header />

      {/* <div className="container">
        <form onSubmit={handleSubmit(save)}>
          <TextField label="Zip Code" {...register("zip")} />
          <br />
          <br />
          <TextField label="City" {...register("city")} />
          <br />
          <br />
          {/* <FileUpload onUpload={(n) => setFileName(n)} /> */}
      {/* <Button variant="contained" type="submit">
            Save
          </Button>
        </form> */}
      {/* </div> */}

      {zips.map((x) => (
        <div className="zip-item">
          <span>{x.zip}</span>
          <span>
            <span>{x.city}</span>
          </span>
        </div>
      ))}
    </Fragment>
  );
}

export default LocationsServed;
