import React, { useState } from "react";
import Image from "next/image";

//mui-components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";

//hooks
import useWindowSize from "../hooks/useWindowSize";

function PracticeAreaComponent({ item }) {
	const windowSize = useWindowSize();
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};
	return (
		<Box onMouseEnter={handleShow} onMouseLeave={handleClose}>
			{show === true ? (
				<Box
					sx={{
						backgroundColor: "#fff",
						borderRadius: 2,
					}}>
					<Grid container>
						<Grid item sx={{ p: 2 }}>
							<Image
								src={item.image}
								alt="image-logo"
								width={30}
								height={30}
							/>
						</Grid>
						<Grid
							item
							sx={{
								pt: 2,
							}}>
							<Typography
								sx={{
									color: "#252E4E",
									fontSize: {
										xs: "13px",
										sm: "13px",
										md: "16px",
									},
									fontWeight: 600,
								}}>
								{item.heading}
							</Typography>
						</Grid>
					</Grid>
					<Typography
						sx={{
							fontSize: "12px",
							fontWeight: 400,
							textAlign: "justify",
							color: "#3A4668",
							padding: "0px 15px",
							lineHeight: "16px",
						}}>
						{item.desc}
					</Typography>
					<Link href={item.link} style={{ textDecoration: "none" }}>
						<Typography
							sx={{
								textAlign: "initial",
								padding: "10px 0px 20px 15px",
								color: "#DA9042",
								fontSize: "12px",
							}}>
							Learn More
						</Typography>
					</Link>
				</Box>
			) : (
				// <>
				//   <Box item justifyContent="center" textAlign={"center"}>
				//     <Image src={item.cover} alt={"logo"} height={300} width={338} />
				//   </Box>
				// </>

				<Grid
					textAlign="center"
					justifyContent={"center"}
					sx={{
						backgroundColor: "transparent",
						borderRadius: "5px",
					}}>
					<Image
						src={item.cover}
						alt={"logo"}
						width={windowSize.width > 700 ? 350 : 270}
						height={191}
					/>
				</Grid>
			)}
		</Box>
	);
}

export default PracticeAreaComponent;
