import React from "react";
import Image from "next/image";

//mui-components
import Grid from "@mui/material/Grid";

//components
import ContactForm from "../ContactForm";
import AddressBlock from "./AddressBlock";

//data
import address from "@/data/address";

const ContactUs = () => {
	return (
		<Grid
			container
			justifyContent={"center"}
			sx={{ mt: { xs: "0.5cm", sm: "0.5cm", md: "1cm 0cm" } }}>
			<Grid
				item
				maxWidth={660}
				sx={{
					paddingTop: { md: 1.4 },
				}}>
				<ContactForm title="Get in touch" textAlign="left" />
			</Grid>
			<Grid item paddingTop={1.4}>
				<AddressBlock />
			</Grid>
		</Grid>
	);
};

export default ContactUs;
