import React from "react";

//mui-components
import Grid from "@mui/material/Grid";

//components
import PracticeAreaComponent from "../PracticeAreaComponent";

const PracticeAreas = ({ dataList }) => {
	return (
		<Grid
			container
			sx={{
				alignItems: "center",
				justifyContent: "center",
				mt: "20px",
			}}>
			{dataList.map((item, index) => (
				<>
					<Grid
						item
						xs={9}
						md={3}
						sm={9}
						key={index}
						sx={{
							backgroundColor: "transparent",
							borderRadius: "5px",
							margin: "20px",
							width: {
								sm: "30px",
							},
						}}>
						<PracticeAreaComponent item={item} key={index} />
					</Grid>
				</>
			))}
		</Grid>
	);
};

export default PracticeAreas;
