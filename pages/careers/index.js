import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CareersForm from "@/components/CareersForm";
import LandingLayout from "@/components/LandingLayout";

function CareersPage() {
	return (
		<LandingLayout>
			<Box
				sx={{
					backgroundImage: `url(${"/CareersCover1.png"})`,
					height: "auto",
					maxwidth: "1600px",
					minHeight: "300px",
				}}
				textAlign={"center"}>
				<Typography
					color={"#fff"}
					fontSize="54px"
					pt={"120px"}
					fontWeight="600">
					Careers
				</Typography>
			</Box>
			<CareersForm />
		</LandingLayout>
	);
}

export default CareersPage;
