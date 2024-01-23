import React from "react";
import Image from "next/image";

//mui-components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

//icons
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function GetInTouch() {
	return (
		<Box textAlign={"center"} sx={{ m: "2cm 0cm" }}>
			<Typography
				sx={{
					fontSize: {
						xs: "25px",
						sm: "25px",
						md: "36px",
					},
					fontWeight: 600,
				}}>
				GET IN TOUCH WITH US TODAY
			</Typography>
			<Divider
				sx={{
					borderBottomWidth: 3,
					mx: 87,
					backgroundColor: "#DA9042",
				}}
			/>
			<Typography
				sx={{
					fontSize: {
						xs: "15px",
						sm: "15px",
						md: "16px",
					},
					lineheight: { xs: "20px", sm: "20px", md: "26px" },
					fontWeight: 600,
					mt: "20px",
				}}>
				We can be reached at
			</Typography>
			<Grid
				container
				sx={{
					flexDirection: "column",
				}}>
				<Grid
					item
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						mt: "20px",
					}}>
					<AttachEmailIcon sx={{ color: "#DA9042", mr: "5px" }} />
					<Typography>
						<a
							href="mailto:admin@lawgicalassociates.com"
							style={{
								color: "#3A4668",
								textDecoration: "none",
							}}>
							admin@lawgicalassociates.com
						</a>
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						mt: "20px",
					}}>
					<LocalPhoneIcon sx={{ color: "#DA9042", mr: "5px" }} />

					<a
						href="tel:+91-7428181222"
						style={{ color: "#3A4668", textDecoration: "none" }}>
						+91-7428181222
					</a>
				</Grid>
			</Grid>
			<a
				href="/lawgical-associate-profile.pdf"
				download="LAWGICAL ASSOCIATES CORPORATE PROFILE"
				style={{ textDecoration: "none" }}>
				<Button
					sx={{
						color: "#fff",
						backgroundColor: "#DA9042",
						m: "40px 0px",
						textTransform: "none",
						fontWeight: 600,
						px: 3,
						"&:hover": {
							color: "#fff",
							backgroundColor: "#DA9042",
						},
					}}>
					Firm Profile
				</Button>
			</a>
		</Box>
	);
}

export default GetInTouch;
