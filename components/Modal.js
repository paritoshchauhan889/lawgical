import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "#fff",
	borderRadius: 0,
	width: { xs: 300, sm: 300, md: 900 },
	p: 4,
};

const BasicModal = () => {
	const [open, setOpen] = React.useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal open={open}>
				<Box sx={style}>
					<Typography
						sx={{
							fontSize: { xs: "13px", sm: "13px", md: "27px" },
							fontWeight: 600,
							color: "#252E4E",
						}}>
						DISCLAIMER :
					</Typography>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "10px", sm: "10px", md: "15px" },
							fontWeight: "normal",
							color: "#3A4668",
						}}>
						The rules of the Bar Council of India prohibit law firms
						from soliciting work or advertising in any manner. By
						clicking on &apos; I AGREE &apos; the user acknowledges
						that:
					</Typography>
					<ul
						style={{
							marginTop: "20px",
							fontWeight: "normal",
							color: "#3A4668",
						}}>
						<li>
							<Typography
								sx={{
									marginTop: "10px",
									fontSize: {
										xs: "10px",
										sm: "10px",
										md: "15px",
									},
								}}>
								The user wishes to gain more information about
								Lawgical Associates, its practice areas and its
								attorneys, for his/her own information and use;
							</Typography>
						</li>
						<li>
							<Typography
								sx={{
									marginTop: "10px",
									fontSize: {
										xs: "10px",
										sm: "10px",
										md: "15px",
									},
								}}>
								The information is made available/provided to
								the user only on his/her specific request and
								any information obtained or material downloaded
								from this website is completely at the users
								volition and any transmission, receipt or use of
								this site is not intended to, and will not,
								create any lawyer-client relationship; and
							</Typography>
						</li>
						<li>
							<Typography
								sx={{
									marginTop: "10px",
									fontSize: {
										xs: "10px",
										sm: "10px",
										md: "15px",
									},
								}}>
								None of the information contained on the website
								is in the nature of a legal opinion or otherwise
								amounts to any legal advice.
							</Typography>
						</li>
					</ul>
					<Typography
						sx={{
							mt: 2,
							fontSize: { xs: "10px", sm: "10px", md: "15px" },
							fontWeight: "normal",
							color: "#3A4668",
						}}>
						Lawgical Associates is not liable for any consequence of
						any action taken by the user relying on
						material/information provided under this website. In
						cases where the user has any legal issues, he/she in all
						cases must seek independent legal advice.
					</Typography>
					<Button
						variant="contained"
						onClick={handleClose}
						sx={{
							m: "20px 0px",
							borderRadius: 0,
							backgroundColor: "#DA9042",
							color: "#fff",
							"&:hover": {
								backgroundColor: "#DA9042",
								color: "#fff",
							},
						}}>
						I Agree
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default BasicModal;
