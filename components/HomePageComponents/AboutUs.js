import React from "react";
import Image from "next/image";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";

function AboutUs() {
	return (
		<Grid
			container
			sx={{
				mt: "1cm",
				justifyContent: "center",
				flexDirection: {
					xs: "column-reverse",
					sm: "column-reverse",
					md: "row",
				},
			}}>
			<Grid item xs={12} md={6}>
				<Box
					sx={{
						display: { xs: "none", sm: "none", md: "flex" },
						flexDirection: "column",
					}}>
					<Typography
						sx={{
							fontSize: { xs: "15px", sm: "15px", md: "20px" },
							color: "#C18F5A",
							lineHeight: "30px",
							fontWeight: 600,
							paddingTop: "20px",
							textAlign: {
								xs: "center",
								sm: "center",
								md: "justify",
							},
						}}>
						About Us
					</Typography>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: { xs: "14px", sm: "14px", md: "35px" },
							lineHeight: { xs: "28px", sm: "28px", md: "60px" },
							color: "#252E4E",
							textAlign: {
								xs: "center",
								sm: "center",
								md: "justify",
							},
						}}>
						Welcome to Lawgical Associates
					</Typography>
				</Box>
				<Box sx={{ m: { xs: "20px", sm: "20px", md: "0px" } }}>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: { xs: "12px", sm: "12px", md: "16px" },
							lineHeight: { xs: "18px", sm: "18px", md: "23px" },
							color: "#3A4668",
							textAlign: "justify",
						}}>
						Lawgical Associates is a full-service law firm which
						believes in guiding its Clients lawfully. We understand
						our Client’s need and are committed to consistently
						deliver relevant, cost-effective and result oriented
						legal advice to them. Our network of international
						relationships brings in seamless cross-border support to
						our clients.
					</Typography>
					<Typography
						sx={{
							fontWeight: 400,
							fontSize: { xs: "12px", sm: "12px", md: "16px" },
							lineHeight: { xs: "18px", sm: "18px", md: "23px" },
							color: "#3A4668",
							mt: "20px",
							textAlign: "justify",
						}}>
						All the Partners of the Firm have more than 20 years’
						experience in their respective practice areas and bring
						in strong experience and value addition in providing
						pragmatic and resulted oriented solutions to our
						Clients.
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: {
								xs: "center",
								sm: "center",
								md: "flex-start",
							},
							mt: "20px",
						}}>
						<Link
							href="/about-us"
							style={{ textDecoration: "none" }}>
							<Button
								sx={{
									color: "#fff",
									backgroundColor: "#DA9042",
									m: "10px 0px",
									textTransform: "none",
									fontWeight: 600,
									px: 3,
									"&:hover": {
										color: "#fff",
										backgroundColor: "#DA9042",
									},
								}}>
								Learn More
							</Button>
						</Link>
					</Box>
				</Box>
			</Grid>
			<Grid
				item
				md={3}
				sx={{
					margin: { xs: "0cm", sm: "0cm", md: "1cm" },
					textAlign: { xs: "center", sm: "center", md: "justify" },
				}}>
				<Image
					src={"/HomeAboutUsSquare.png"}
					height={360}
					width={360}
					alt={"image"}
				/>
			</Grid>
		</Grid>
	);
}

export default AboutUs;
