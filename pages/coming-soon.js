import React from "react";

//components
import LandingLayout from "@/components/LandingLayout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const ComingSoon = () => {
	const heading = {
		fontSize: { xs: "25px", sm: "25px", md: "40px" },
		fontWeight: 600,
		fontFamily: "Poppins",
		textAlign: "center",
		m: "2cm",
	};
	return (
		<>
			<LandingLayout>
				<Container>
					<Typography sx={heading}>Coming Soon !</Typography>
				</Container>
			</LandingLayout>
		</>
	);
};
export default ComingSoon;
