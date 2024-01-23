// import React from "react";
// import Image from "next/image";

// //mui-components
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";

// function Awards() {
// 	return (
// 		<Box>
// 			<Typography
// 				sx={{
// 					fontSize: { xs: "30px", sm: "30px", md: "40px" },
// 					textAlign: "center",
// 					fontWeight: 700,
// 					color: "#252e4e",
// 					margin: "1cm 0cm",
// 					fontFamily: "Poppins",
// 				}}>
// 				Awards & Accolades
// 			</Typography>
// 			<Box>
// 				<Grid
// 					container
// 					sx={{
// 						alignItems: "center",
// 						justifyContent: "space-evenly",
// 					}}>
// 					<Grid
// 						item
// 						xs={11}
// 						md={2}
// 						sx={{
// 							paddingRight: { xs: "0px", sm: "0px", md: "0px" },
// 							textAlign: {
// 								xs: "center",
// 								sm: "center",
// 								md: "center",
// 							},
// 						}}>
// 						<Image
// 							src={"/awards/2.png"}
// 							height={115}
// 							width={120}
// 							alt={"First"}
// 						/>
// 					</Grid>
// 					<Grid
// 						item
// 						xs={11}
// 						md={2}
// 						sx={{
// 							paddingRight: { xs: "0px", sm: "0px", md: "80px" },
// 							textAlign: "center",
// 						}}>
// 						<Image
// 							src={"/awards/1.png"}
// 							height={97}
// 							width={300}
// 							alt={"Second"}
// 						/>
// 					</Grid>
// 					<Grid
// 						item
// 						xs={11}
// 						md={2}
// 						sx={{
// 							textAlign: {
// 								xs: "center",
// 								sm: "center",
// 								md: "center",
// 							},
// 						}}>
// 						<Image
// 							src={"/awards/3.png"}
// 							height={81}
// 							width={150}
// 							alt={"Third"}
// 						/>
// 					</Grid>
// 					<Grid
// 						item
// 						xs={11}
// 						md={2}
// 						sx={{
// 							textAlign: {
// 								xs: "center",
// 								sm: "center",
// 								md: "center",
// 							},
// 						}}>
// 						<Image
// 							src={"/awards/4.png"}
// 							height={81}
// 							width={150}
// 							alt={"Third"}
// 						/>
// 					</Grid>
// 					<Grid
// 						item
// 						xs={11}
// 						md={2}
// 						sx={{
// 							textAlign: {
// 								xs: "center",
// 								sm: "center",
// 								md: "center",
// 							},
// 						}}>
// 						<Image
// 							src={"/awards/5.png"}
// 							height={81}
// 							width={150}
// 							alt={"Third"}
// 						/>
// 					</Grid>
// 				</Grid>
// 			</Box>
// 		</Box>
// 	);
// }

// export default Awards;
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import awards from "@/data/awards";
import Image from "next/image";
import Container from "@mui/material/Container";

const Awards = () => {
	return (
		<>
			<Container>
				<Typography
					sx={{
						fontSize: { xs: "14px", sm: "14px", md: "40px" },
						textAlign: "center",
						fontWeight: 700,
						color: "#252e4e",
						margin: { xs: "0.5cm", sm: "0.5cm", md: "1cm 0cm" },
						fontFamily: "Poppins",
					}}>
					Awards & Accolades
				</Typography>
				<Grid
					container
					sx={{
						justifyContect: "center",
						alignItems: "center",
						textAlign: "center",
					}}>
					{awards?.map((award, index) => (
						<>
							<Grid
								item
								xs={12}
								md={award.md}
								sx={{
									mt: { xs: "0.2cm", sm: "0.2cm", md: "0cm" },
								}}>
								<Image
									src={award.awardImage}
									alt="award-img"
									width={award.width}
									height={85}
								/>
							</Grid>
						</>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Awards;
