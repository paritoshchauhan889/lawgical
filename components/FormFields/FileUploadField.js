import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const FileUploadField = ({ field, register }) => {
  const [fileName, setFileName] = useState("");
  const handleFile = (e) => {
    console.log(e.target.files[0].name);
    setFileName(e.target.files[0].name);
  };
  return (
    <>
      <Button
        variant="contained"
        component="label"
        sx={{
          backgroundColor: "#218CEE",
        }}
      >
        Choose File
        <input
          {...register(field.name)}
          name={field.name}
          onChange={handleFile}
          type="file"
          hidden
        />
      </Button>
      <Typography component={"span"}>{fileName}</Typography>
    </>
  );
};

export default FileUploadField;
