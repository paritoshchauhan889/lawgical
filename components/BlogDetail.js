import React from "react";

//mui-components
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const heading = {
	textAlign: "center",
	fontWeight: 600,
	fontSize: { xs: "25px", sm: "25px", md: "40px" },
	lineHeight: { xs: "30px", sm: "30px", md: "60px" },
};
const desc = {
	textAlign: "justify",
	marginTop: "0.5cm",
};
const BlogDetailPage = ({ productData }) => {
	return (
		<Container sx={{ padding: "2cm 0cm" }}>
			<Typography sx={heading}>{productData.title}</Typography>
			<Typography sx={desc}>{productData.desc}</Typography>
		</Container>
	);
};

export default BlogDetailPage;
