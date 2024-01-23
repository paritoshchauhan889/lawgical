import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { Grid } from "@mui/material";
import Popover from "@mui/material/Popover";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function DropdownMenu(props) {
	const { text, children, color } = props;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	const childrenWithNewProps = React.Children.map(props.children, (child) =>
		React.cloneElement(child, { onClose: handleClose })
	);

	return (
		<>
			<Grid item xs>
				<Button
					variant="text"
					size="large"
					onMouseEnter={handleClick}
					sx={{ color: "#252E4E", fontWeight: 600 }}>
					{text}
					<ArrowDropDownIcon />
				</Button>
				<Popover
					id="dropdown-id"
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "center",
					}}>
					<Grid container direction="column">
						{childrenWithNewProps}
					</Grid>
				</Popover>
			</Grid>
		</>
	);
}

export default DropdownMenu;
