import React from "react";
import Image from "next/image";
import Slider from "react-slick";

function SlickSlider() {
	return (
		<Slider>
			<Image
				src={"/home-slides/Slider1.png"}
				alt={"Slide One"}
				width={800}
				height={350}
			/>
			<Image
				src={"/home-slides/Slider2.png"}
				alt={"Slide Two"}
				width={800}
				height={350}
			/>
			<Image
				src={"/home-slides/Slider3.png"}
				alt={"Slide Three"}
				width={800}
				height={350}
			/>
		</Slider>
	);
}

export default SlickSlider;
