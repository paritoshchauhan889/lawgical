import React from "react";
import TextField from "@mui/material/TextField";

const ContactInput = ({ field, register }) => {
  let extraProps = field.props ? field.props : null;
  return (
    <TextField
      {...register(field.name)}
      {...extraProps}
      label={field.label}
      fullWidth
      variant="filled"
      InputProps={{
        disableUnderline: true,
        sx: {
          borderRadius: 1,
          color: "#808080",
          backgroundColor: field?.backgroundColor
            ? field.backgroundColor
            : "#fff",
        },
      }}
    />
  );
};

export default React.memo(ContactInput);
