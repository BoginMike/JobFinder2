import React from "react";
// import Header from "../../shared/components/Header";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { postApiCall } from "../../shared/api-utils";
// import FileUpload from "../../shared/components/FileUpload";

export default function Searches() {
  const { register, handleSubmit } = useForm();
  // const [fileName, setFileName] = useState("");

  // on submit comes here
  function save(data) {
    // data["zip"] = fileName;
    postApiCall("/zips", data).then((x) => {
      alert("zip added");
      console.log("zip added");
    });
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="container">
        <form onSubmit={handleSubmit(save)}>
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
    </div>
  );
}
