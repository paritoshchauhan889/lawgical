import React, { useEffect } from "react";
//sections
import PracticeAreas from "@/components/HomePageComponents/PracticeAreas";
import AboutUs from "@/components/HomePageComponents/AboutUs";
import Box from "@mui/material/Box";
import practiceAreas from "../data/practiceAreas";
import Awards from "@/components/HomePageComponents/Awards";
import ContactUs from "@/components/HomePageComponents/ContactUs";
import Slider from "@/components/HomePageComponents/Slider";
import { Typography } from "@mui/material";
import LandingLayout from "@/components/LandingLayout";
import BasicModal from "@/components/Modal";

export default function Home() {
	return (
		<LandingLayout>
			<Box
				sx={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)),url(${"/HomeBackground.png"})`,
					backgroundSize: "cover",
				}}>
				<Box>
					<Slider />
				</Box>
				<Box>
					<Typography
						sx={{
							fontSize: { sx: "15px", sm: "15px", md: "25px" },
							fontWeight: 600,
							lineHeight: { sx: "15px", sm: "15px", md: "25px" },
							color: "#DA9042",
							textAlign: "center",
							mt: { xs: "0.5cm", sm: "0.5cm", md: "2cm" },
						}}>
						What We Do
					</Typography>
					<Typography
						sx={{
							fontSize: { sx: "20px", sm: "20px", md: "40px" },
							fontWeight: 700,
							lineHeight: { sx: "30px", sm: "30px", md: "60px" },
							color: "#252E4E",
							textAlign: "center",
						}}>
						Practice Areas
					</Typography>
					<PracticeAreas dataList={practiceAreas} />
				</Box>
				<BasicModal />
				<Box
					sx={{
						display: { xs: "flex", sm: "flex", md: "none" },
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
				<AboutUs />
				<Box>
					<Awards />
				</Box>
				<Box>
					<ContactUs />
				</Box>
			</Box>
		</LandingLayout>
	);
}
