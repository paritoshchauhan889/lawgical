import React from "react";
import TextField from "@mui/material/TextField";

const EmailInput = ({ field, register }) => {
  let extraProps = field.props ? field.props : null;

  return (
    <TextField
      {...register(field.name)}
      {...extraProps}
      type="email"
      placeholder={field.label}
      fullWidth
      size="small"
      variant="filled"
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingBottom: "8px",
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

export default React.memo(EmailInput);
