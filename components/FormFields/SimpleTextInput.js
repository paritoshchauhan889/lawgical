import React from "react";
import TextField from "@mui/material/TextField";

const SimpleTextInput = ({ field, register, setFocused }) => {
  let extraProps = field?.props ? field.props : null;

  return (
    <TextField
      {...register(field?.name)}
      defaultValue={field?.defaultValue}
      {...extraProps}
      placeholder={field?.label}
      fullWidth
      size="small"
      onBlur={() => setFocused && setFocused(null)}
      onFocus={() => setFocused && setFocused(field?.name)}
      helperText={field?.errors?.[field?.name]?.message || null}
      error={field?.errors?.[field?.name]?.message ? true : false}
      variant="filled"
      InputProps={{
        disableUnderline: true,
        sx: {
          paddingBottom: "8px",
          borderRadius: 1,
          backgroundColor: field?.backgroundColor
            ? field.backgroundColor
            : "#fff",
          color: "#000",
        },
      }}
    />
  );
};

export default React.memo(SimpleTextInput);
