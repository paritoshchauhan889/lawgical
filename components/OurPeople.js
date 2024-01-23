import React from "react";
import Image from "next/image";

//components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const OurPeople = ({ productData }) => {
	const heading = {
		fontSize: { xs: "30px", sm: "30px", md: "40px" },
		fontWeight: 700,
		lineHeight: { xs: "40px", sm: "40px", md: "60px" },
		color: "#252E4E",
		mt: "1.5cm",
	};
	const desc = {
		fontSize: { xs: "12px", sm: "12px", md: "16px" },
		lineHeight: { xs: "18px", sm: "18px", md: "23px" },
		fontWeight: 500,
		mt: "0.5cm",
		textAlign: "justify",
		color: "#252E4E",
	};
	return (
		<Container sx={{ mt: "1.5cm", mb: "1cm" }}>
			<Typography sx={heading}>{productData.name}</Typography>
			<Box sx={{ border: "2px solid #DA9042", width: "4.5cm" }} />

			<Grid container sx={{ justifyContent: "center" }}>
				<Grid item xs={12} md={7}>
					<Typography sx={desc}>{productData.desc1}</Typography>
					<Typography sx={desc}>{productData.desc2}</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={5}
					sx={{
						paddingLeft: { xs: "0px", sm: "0px", md: "1cm" },
						textAlign: "center",
						mt: { xs: "0.5cm", sm: "0.5cm", md: "-1cm" },
					}}>
					<Image
						src={productData.image}
						alt="nidhi-mathur"
						width={300}
						height={330}
						style={{
							borderRadius: "5px",
						}}
					/>
				</Grid>
			</Grid>
			<Typography sx={desc}>{productData.desc3}</Typography>
			<Typography sx={desc}>{productData.desc4}</Typography>
			<Typography sx={desc}>{productData.desc5}</Typography>
			<Typography sx={desc}>{productData.desc6}</Typography>
			<Typography sx={desc}>{productData.desc7}</Typography>
			<Typography sx={desc}>{productData.desc8}</Typography>
		</Container>
	);
};

export default OurPeople;
