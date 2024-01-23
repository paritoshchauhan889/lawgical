import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary, {
	accordionSummaryClasses,
} from "@mui/material/AccordionSummary";

// icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionList = ({ item, index }) => {
	const [expanded, setExpanded] = useState(null);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<Accordion
			expanded={expanded === `panel${index}`}
			onChange={handleChange(`panel${index}`)}
			sx={{ border: 0, boxShadow: 0 }}>
			<AccordionSummary
				aria-controls={`panel${index}d-content`}
				id={`panel${index}d-header`}
				expandIcon={<ExpandMoreIcon />}
				sx={{
					marginTop: 1,
					backgroundColor: "#F2F2F2",
					[`& .${accordionSummaryClasses.expanded}`]: { margin: 0 },
				}}>
				{item.title}
			</AccordionSummary>
			<AccordionDetails sx={{ paddingBottom: 0, cursor: "pointer" }}>
				{item.list.map((option, index) => (
					<>
						<Box onClick={option.onClick}>
							<Link
								key={index}
								href={option.link}
								style={{
									color: "#252E4E",
									textDecoration: "none",
								}}>
								<Typography
									style={{
										fontFamily: "Poppins",
										textDecoration: "none",
										color: "#252E4E",
										padding: "8px 0",
										borderTop:
											index > 0 && "1px solid #D9D9D9",
									}}>
									{option.icon && (
										<React.Fragment>
											<Image
												src={option.icon}
												alt={option.title}
												width={15}
												height={15}
												placeholder="blur"
												blurDataURL={option.icon}
											/>
											&ensp;
										</React.Fragment>
									)}
									{option.title}
								</Typography>
							</Link>
						</Box>
					</>
				))}
			</AccordionDetails>
		</Accordion>
	);
};

export default AccordionList;
