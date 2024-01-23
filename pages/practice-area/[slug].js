import React from "react";

//components
import LandingLayout from "@/components/LandingLayout";
import PracticeArea from "@/components/PracticeArea";

//data
import practicingAreas from "@/data/practicingAreas";

function PracticeAreaPage({ productData }) {
	return (
		<>
			<LandingLayout>
				<PracticeArea productData={productData} />
			</LandingLayout>
		</>
	);
}

export async function getStaticPaths() {
	const pageNameList = Object.keys(practicingAreas).map(
		(item) => `/practice-area/${item}`
	);
	return {
		paths: pageNameList,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const productName = context.params.slug || "";
	const productObject = practicingAreas?.[productName];

	return { props: { productData: productObject } };
}

export default PracticeAreaPage;
