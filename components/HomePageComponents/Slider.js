import React from "react";

//components
import Carousel from "react-material-ui-carousel";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

//mui-components
import Box from "@mui/material/Box";

function Slider() {
	var items = [
		{
			title: "Invest time in Understanding the client's business.",
			description: "Probably the most random thing you have ever seen!",
			imageUrl: "/home-slides/Slider1.png",
		},
		{
			title: "Invest time in Understanding the client's business.",
			imageUrl: "/home-slides/Slider2.png",
		},
		{
			title: "Invest time in Understanding the client's business.",
			imageUrl: "/home-slides/Slider3.png",
		},
		{
			title: "Invest time in Understanding the client's business.",
			imageUrl: "/home-slides/Slider4.png",
		},
	];

	return (
		<Carousel
			navButtonsAlwaysVisible
			swipe
			animation="slide"
			indicators={false}
			NextIcon={<ArrowCircleRightIcon sx={{ color: "#fff" }} />}
			PrevIcon={<ArrowCircleLeftIcon sx={{ color: "#fff" }} />}
			navButtonsProps={{
				style: {
					backgroundColor: "rgba(37, 46, 78, 0.55)",
					borderRadius: 5,
					margin: "0px 30px",
				},
			}}>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props) {
	return (
		<Box>
			<img
				src={props.item.imageUrl}
				alt="slide"
				width={"100%"}
				height={"100%"}
			/>
		</Box>
	);
}

export default Slider;
