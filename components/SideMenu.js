import React, { Fragment } from "react";

import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

//mui-icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function SideMenu(props) {
	const { text, children } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		if (props.onClose) props.onClose();
		setAnchorEl(null);
	}

	const childrenWithNewProps = React.Children.map(props.children, (child) =>
		React.cloneElement(child, { onClose: handleClose })
	);

	return (
		<>
			<Grid item xs>
				<Button
					color="inherit"
					size="large"
					fullWidth
					onClick={handleClick}>
					{text}
					<ArrowRightIcon />
				</Button>
				{childrenWithNewProps ? (
					<Popover
						id="dropdown-id"
						open={open}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}>
						<Grid container direction="column">
							{childrenWithNewProps}
						</Grid>
					</Popover>
				) : null}
			</Grid>
		</>
	);
}

export default SideMenu;
