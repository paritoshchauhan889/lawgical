import React from "react";

//components
import BlogDetailPage from "@/components/BlogDetail";
import LandingLayout from "@/components/LandingLayout";

//data
import blogDetail from "@/data/blogDetail";

function BlogDetail({ productData }) {
  return (
    <LandingLayout>
      <BlogDetailPage productData={productData} />
    </LandingLayout>
  );
}

export async function getStaticPaths() {
  const pageNameList = Object.keys(blogDetail).map(
    (item) => `/blog-detail/${item}`
  );
  return {
    paths: pageNameList,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blogName = context.params.slug;
  const blogObject = blogDetail?.[blogName];

  return { props: { productData: blogObject } };
}
export default BlogDetail;
