import React from "react";
import Typography from "@mui/material/Typography";

// hooks
// import useCompanyContext from "../../hooks/useCompanyContext";

// const replaceVariableInText = (variable, text, companyData) => {
// 	switch (variable) {
// 		case "COMPANY_CURRENCY":
// 			return text.replace(variable, companyData?.config?.currency);
// 	}
// };

const SimpleTextLabel = ({ field }) => {
	// const { companyData } = useCompanyContext();
	let extraProps = field?.props ? field.props : null;

	let text = field.text;

	// field?.variable
	// 	? replaceVariableInText(field?.variable, field?.text, {})
	// 	: field.text;

	return (
		<Typography
			{...extraProps}
			sx={{ color: "text.primary", fontFamily: "IBM Plex Sans, Regular" }}
		>
			{text}
		</Typography>
	);
};

export default SimpleTextLabel;
