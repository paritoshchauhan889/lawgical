import React from "react";
import TextField from "@mui/material/TextField";

const AddressInput = ({ field, register }) => {
	let extraProps = field.props ? field.props : null;
	return (
		<TextField
			{...register(field.name)}
			{...extraProps}
			label={field.label}
			fullWidth
			multiline
			rows={2}
		/>
	);
};

export default React.memo(AddressInput);
