import React from "react";
import TextField from "@mui/material/TextField";

const TextAreaInput = ({ field, register }) => {
	return (
		<TextField
			multiline
			maxRows={field?.maxRows || 4}
			{...register(field.name)}
			{...field?.props}
			label={field.label}
			fullWidth
			size="small"
			variant="filled"
			InputProps={{
				disableUnderline: true,
				sx: {
					paddingBottom: "8px",
					borderRadius: 1,
					color: "#808080",
					height: "3cm",
					backgroundColor: field?.backgroundColor
						? field.backgroundColor
						: "#fff",
				},
			}}
		/>
	);
};

export default React.memo(TextAreaInput);
