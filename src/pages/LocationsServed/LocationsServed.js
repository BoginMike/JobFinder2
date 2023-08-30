import React, { useState, Fragment } from "react";
import Header from "../../shared/components/Header";
import "../../App.css";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { getApiCall } from "../../shared/api-utils";

function LocationsServed() {
  const [zips, setZips] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function save(data) {
    console.log("zipsss1");
    // getApiCall("/zips", data).then((x) => {
    //   alert("zip added");
    // });
    getApiCall("/zips", data).then((response) => {
      if (response?.status === true) {
        setZips(response);
      }
    });
    zips.map((x) => (
      <div className="zip-item">
        {/* <span>{x.zip}</span> */}
        {/* <span>{x.city}</span> */}
        console.log(x.zip);
      </div>
    ));
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit(save)}>
          <TextField label="Zip Code" {...register("zip")} />
          <br />
          <br />
          <TextField label="City" {...register("city")} />
          <br />
          <br />
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
