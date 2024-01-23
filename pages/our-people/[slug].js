import React from "react";

//components
import LandingLayout from "@/components/LandingLayout";
import OurPeople from "../../components/OurPeople";

//data
import ourPeople from "../../data/ourpeople";

function OurPeoplePage({ productData }) {
	return (
		<>
			<LandingLayout>
				<OurPeople productData={productData} />
			</LandingLayout>
		</>
	);
}

export async function getStaticPaths() {
	const pageNameList = Object.keys(ourPeople).map(
		(item) => `/our-people/${item}`
	);
	return {
		paths: pageNameList,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const productName = context.params.slug || "";
	const productObject = ourPeople?.[productName];

	return { props: { productData: productObject } };
}
export default OurPeoplePage;
