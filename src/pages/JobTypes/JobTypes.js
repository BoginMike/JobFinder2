import React from "react";
import ListBox from "./ListBox";
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
      <ListBox list={countryList} widthPct={40} />
    </div>
  );
}
