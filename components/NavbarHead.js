import React from "react";
import Image from "next/image";
import imageUrl from "./imageUrl";
import Link from "next/link";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//mui-icon
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const NavbarHead = () => {
	return (
		<Grid
			container
			sx={{
				backgroundColor: "#252E4E",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "20px 30px ",
			}}>
			<Grid
				item
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "column", md: "row" },
				}}>
				<AttachEmailIcon sx={{ color: "#DA9042", mr: "5px" }} />
				<Typography>
					<a
						href="mailto:admin@lawgicalassociates.com"
						style={{ color: "#fff" }}>
						admin@lawgicalassociates.com,
					</a>
				</Typography>
				<Typography sx={{ ml: { xs: "0", sm: "0", md: "10px" } }}>
					<a
						href="mailto:info@lawgicalassociates.com"
						style={{
							color: "#fff",
						}}>
						info@lawgicalassociates.com
					</a>
				</Typography>
			</Grid>
			<Grid
				item
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "column", md: "row" },
					mt: { xs: "20px", sm: "20px", md: "0px" },
				}}>
				<LocalPhoneIcon sx={{ color: "#DA9042", mr: "5px" }} />

				<a href="tel:+91 1142474098" style={{ color: "#fff" }}>
					+91 1142474098
				</a>

				<WhatsAppIcon
					sx={{
						color: "#DA9042",
						mr: "5px",
						ml: { xs: "0", sm: "0", md: "20px" },
					}}
				/>

				<a href="https://wa.me/7428181222" style={{ color: "#fff" }}>
					+91 7428181222
				</a>
			</Grid>
		</Grid>
	);
};

export default NavbarHead;
