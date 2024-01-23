import React from "react";

import TextField from "@mui/material/TextField";

const NumberInput = ({ field, register, setFocused }) => {
	let extraProps = field.props ? field.props : null;

	return (
		<TextField
			{...register(field.name, { valueAsNumber: true })}
			{...extraProps}
			label={field.label}
			fullWidth
			type={"number"}
			size="small"
			onFocus={() => setFocused && setFocused(field.name)}
			onBlur={() => setFocused && setFocused(null)}
		/>
	);
};

export default React.memo(NumberInput);
