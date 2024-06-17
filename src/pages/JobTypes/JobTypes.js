import React from "react";
import ListBox from "./ListBox";
import "./JobTypes.css";
import { countryList } from "../../util/countries.js";
// import { useForm } from "react-hook-form";
// import { Button, TextField } from "@mui/material";
// import { postApiCall } from "../../api-utils";
// import FileUpload from "../FileUpload";

export default function JobTypes() {
  // const { register, handleSubmit } = useForm();
  // const [fileName, setFileName] = useState("");

  // on submit comes here
  // function save(data) {
  //   // data["zip"] = fileName;
  //   postApiCall("/zips", data).then((x) => {
  //     alert("zip added");
  //     // console.log("zip added");
  //   });
  // }
  return (
    <div>
      <div className="jtTitle">
        <h2>Select a Job Type or multiple Jobs Types from the list below.</h2>
      </div>
      <ListBox list={countryList} widthPct={80} />
    </div>
  );
}
