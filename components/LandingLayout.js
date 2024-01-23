import React from "react";
import Box from "@mui/material/Box";

import Footer from "./Footer";
import NavbarHead from "./NavbarHead";

import Navbar from "./Navbar";

const LandingLayout = ({ children }, props) => (
	<>
		<Box style={{ margin: "-8px" }}>
			<NavbarHead />
			<Navbar />
			{children}
			<Footer />
		</Box>
	</>
);

export default LandingLayout;
