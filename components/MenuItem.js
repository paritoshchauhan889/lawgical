import React from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";

function MenuItem(props) {
	const handleClick = (e) => {
		if (props.onClose) props.onClose();
	};
	return (
		<Grid item xs>
			<Button
				onClick={handleClick}
				color="inherit"
				size="large"
				fullWidth>
				{props?.link ? (
					<Link
						href={props.link}
						style={{ textDecoration: "none", color: "#000" }}>
						{props.text}
					</Link>
				) : (
					props.text
				)}
			</Button>
		</Grid>
	);
}

export default MenuItem;
