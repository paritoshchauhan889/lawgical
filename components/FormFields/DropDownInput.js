import React from "react";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;

const SelectProps = {
  MenuProps: {
    style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250 },
  },
};

const DropDownInput = ({ field, register, defaultFieldValue }) => {
  let extraProps = field?.props || null;

  if (!("menuItems" in field)) return <span>Please provide a menu list</span>;

  return (
    <TextField
      select
      fullWidth
      size="small"
      label={field.label}
      SelectProps={SelectProps}
      {...register(field.name)}
      defaultValue={defaultFieldValue}
      {...extraProps}
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
    >
      {field?.menuItems?.map((item, index) => (
        <MenuItem
          key={index.toString()}
          value={item?.value}
          disabled={
            field?.useDisabled &&
            field?.selectedValueArray?.includes(item?.value)
          }
        >
          {item?.option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default React.memo(DropDownInput);
