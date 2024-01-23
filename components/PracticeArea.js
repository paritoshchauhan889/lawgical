import React from "react";
import Image from "next/image";

//mui-components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//components
import ContactForm from "./ContactForm";

const PracticeArea = ({ productData }) => {
	const heading = {
		fontSize: { xs: "30px", sm: "30px", md: "40px" },
		fontWeight: 700,
		lineHeight: { xs: "40px", sm: "40px", md: "60px" },
		color: "#252E4E",
		mt: { xs: "1cm", sm: "1cm", md: "1.5cm" },
		fontFamily: "Poppins",
	};
	const desc = {
		fontSize: { xs: "13px", sm: "13px", md: "18px" },
		fontWeight: 500,
		lineheight: { xs: "20px", sm: "20px", md: "25px" },
		mt: "0.5cm",
		textAlign: "justify",
		color: "#252E4E",
		fontFamily: "Roboto",
	};
	return (
		<>
			<Box>
				<img
					src={productData.image}
					alt="img-banner"
					width="100%"
					style={{ background: "rgba(0, 0, 0, 0.4)" }}
				/>
			</Box>

			<Container sx={{ textAlign: "center" }}>
				<Typography sx={heading}>
					{productData.titleOne}
					<span style={{ color: "#DA9042" }}>
						&nbsp;{productData.titleTwo}
					</span>
				</Typography>
				<Typography sx={desc}>{productData.desc1}</Typography>
				<Typography sx={desc}>{productData.desc2}</Typography>
				<Typography sx={desc}>{productData.desc3}</Typography>
				<Typography sx={desc}>{productData.desc4}</Typography>

				<ContactForm
					title="How can we assist you?"
					textAlign="center"
					md="8"
				/>
			</Container>
		</>
	);
};

export default PracticeArea;
