import React from "react";
import Link from "next/link";

//mui-components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

//components
import LandingLayout from "@/components/LandingLayout";

//data
import blog from "../../data/blog";

//icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog = () => {
	return (
		<LandingLayout>
			<Container>
				<Grid
					container
					spacing={2}
					justifyContent="center"
					sx={{ m: "1cm 0cm" }}>
					{blog.map((item, index) => (
						<>
							<Grid
								item
								md={4}
								xs={12}
								container
								justifyContent="center"
								sx={{ mt: "1cm" }}>
								<Card
									key={index}
									sx={{
										maxWidth: 340,
										borderBottom: "10px solid",
										borderColor: item.color,
									}}>
									<CardMedia
										sx={{ height: 140 }}
										image={item.blogImage}
									/>
									<CardContent>
										<Typography
											sx={{
												fontSize: "14px",
												fontWeight: 400,
												lineHeight: "20px",
												textAlign: "justify",
											}}>
											{item.blogDesc}
										</Typography>
									</CardContent>
									<CardActions>
										<Link
											href={item.blogLink}
											style={{
												textDecoration: "none",
											}}>
											<Button
												size="small"
												sx={{
													fontWeight: 600,
													fontSize: "12px",
													lineHeight: "16px",
													color: "#DA9042",
													textTransform: "capitalize",
												}}>
												Learn More
												<ArrowForwardIcon fontSize="12px" />
											</Button>
										</Link>
									</CardActions>
								</Card>
							</Grid>
						</>
					))}
				</Grid>
			</Container>
		</LandingLayout>
	);
};

export default Blog;
