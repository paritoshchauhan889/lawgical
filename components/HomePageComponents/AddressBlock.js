import React from "react";
import Image from "next/image";

//mui-components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function AddressBlock() {
	return (
		<>
			<Grid
				item
				xs={12}
				md={12}
				sx={{
					justifyContent: "center",
					alignItems: "center",
					m: { xs: "0.2cm", sm: "0.2cm", md: "1cm 1.5cm" },
				}}>
				<Typography
					sx={{
						color: "#3A4668",
						fontWeight: 600,
						lineHeight: "30pX",
						fontSize: { xs: "15px", sm: "15px", md: "20px" },
						m: "20px 10px",
						textAlign: "left",
						fontFamily: "Poppins",
					}}>
					Our Office Address
				</Typography>
				<Box>
					<Box sx={{ display: "flex", flexDirection: "row" }}>
						<LocationOnIcon sx={{ color: "#DA9042", mr: "5px" }} />
						<Typography
							sx={{
								color: "#3A4668",
								fontSize: {
									xs: "12px",
									sm: "12px",
									md: "15px",
								},
								lineHeight: {
									xs: "14px",
									sm: "14px",
									md: "20px",
								},
							}}>
							Lawgical Associates <br />
							<span style={{ color: "#3A4668" }}>
								C-452, LGF, Defence Colony, New Delhi, 110024
							</span>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							mt: "20px",
						}}>
						<AttachEmailIcon sx={{ color: "#DA9042", mr: "5px" }} />
						<Typography
							sx={{
								fontSize: {
									xs: "12px",
									sm: "12px",
									md: "15px",
								},
								lineHeight: {
									xs: "14px",
									sm: "14px",
									md: "20px",
								},
							}}>
							<a
								href="mailto:admin@lawgicalassociates.com"
								style={{
									color: "#3A4668",
									textDecoration: "none",
								}}>
								admin@lawgicalassociates.com
							</a>
							<br />
							<a
								href="mailto:info@lawgicalassociates.com"
								style={{
									color: "#3A4668",
									textDecoration: "none",
								}}>
								info@lawgicalassociates.com
							</a>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							mt: "20px",
						}}>
						<LocalPhoneIcon sx={{ color: "#DA9042", mr: "5px" }} />
						<Typography
							sx={{
								fontSize: {
									xs: "12px",
									sm: "12px",
									md: "15px",
								},
								lineHeight: {
									xs: "14px",
									sm: "14px",
									md: "20px",
								},
							}}>
							<a
								href="tel:+91 1142474098"
								style={{
									color: "#3A4668",
									textDecoration: "none",
								}}>
								+91 1142474098, &nbsp;&nbsp;
							</a>
							<a
								href="tel:+91 7428181222"
								style={{
									color: "#3A4668",
									textDecoration: "none",
								}}>
								+91-7428181222
							</a>
						</Typography>
					</Box>
				</Box>
			</Grid>
		</>
	);
}

export default AddressBlock;
