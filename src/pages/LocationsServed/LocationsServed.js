import React, { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../shared/components/Header";
import "../../App.css";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { getApiCall } from "../../shared/api-utils";

function LocationsServed() {
  const [found, setFound] = useState(false);
  const navigate = useNavigate();
  const [zips, setZips] = useState([]);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  function Save(data) {
    let flag = false;
    zips.forEach((x) => {
      if (x.zip === data.zip) {
        // setTimeout(() => {
        // if (!found) {
        //   alert("No");
        //   return data.zip;
        // }
        setFound(true);
        // }, [3000]);
        flag = true;

        alert(
          "Your location is in our delivery area. Please click the Home Page link and contact us!"
        );
        return x.zip;
      }
    });
    // return data.zip;
    // setTimeout(() => {
    if (!flag) {
      alert("No");
      return data.zip;
    }
    // });
    // if (found === false) {
    //   alert("no");
    //   return data.zip;
    // }
  }

  useEffect(() => {
    // on page load this code will ge execute
    // componentDidMount()

    getApiCall("/zips").then((response) => {
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
      <div className="container">
        <h3>
          We deliver to many areas along the east coast between
          <br /> southern Connecticut and Norfolk Virginia and west to
          <br />
          Harrisburg Pennsylvania. We also deliver to the Pittsburgh <br />
          area. Please enter your desired delivery location's zipcode.
          <br />
          If it matches you will see an alert confirming this.
          <br /> Then contact us to order your equipment. <br />
          Otherwise you will see an alert saying your zipcode is <br />
          not in our delivery area.
        </h3>
        <form onSubmit={handleSubmit(Save)}>
          <TextField label="Zip Code" {...register("zip")} />
          <br />
          {/* <br />
          <TextField label="City" {...register("city")} />
          <br />
          <br /> */}
          {/* <FileUpload onUpload={(n) => setFileName(n)} /> */}
          <Button variant="contained" type="submit">
            Save
          </Button>
        </form>
      </div>
    </Fragment>
  );
}

export default LocationsServed;
