import React from "react";
import Link from "next/link";

//components
import LandingLayout from "@/components/LandingLayout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//data
import privacypolicy from "@/data/privacy-policy";

//mui-icons
import CircleIcon from "@mui/icons-material/Circle";

const PrivacyPolicy = () => {
  const heading = {
    fontSize: { xs: "18px", sm: "18px", md: "25px" },
    fontWeight: 600,
    textAlign: "center",
    textTransform: "uppercase",
    mt: { xs: "0.5cm", sm: "0.5cm", md: "1cm" },
  };
  const desc = {
    fontSize: { xs: "12px", sm: "12px", md: "15px" },
    mt: { xs: "0.5cm", sm: "0.5cm", md: "1cm" },
    lineHeight: { xs: "18px", sm: "18px", md: "24px" },
    textAlign: "justify",
  };
  const subHeading = {
    fontSize: { xs: "15px", sm: "15px", md: "20px" },
    fontWeight: 600,
    mt: "0.5cm",
  };
  const point = {
    fontSize: { xs: "12px", sm: "12px", md: "15px" },
    lineHeight: { xs: "18px", sm: "18px", md: "24px" },
    m: {
      xs: "10px 0px 20px 20px",
      sm: "10px 0px 20px 20px",
      md: "10px 0px 20px 40px",
    },
    textAlign: "justify",
  };

  return (
    <>
      <LandingLayout>
        <Container sx={{ mb: "1cm" }}>
          <Typography sx={heading}>DATA PRIVACY POLICY</Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "10px", md: "16px" },
              fontStyle: "italic",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "right",
              },
              fontWeight: 500,
            }}
          >
            Last updated on 27th February 2023
          </Typography>
          <Typography sx={desc}>
            This Data Privacy Policy <b>(“Policy”)</b> will help you understand
            how, Lawgical Associates (collectively,
            <b>“Firm”</b> or <b> “we”</b>, or <b>“us” </b>or <b>“our”</b>
            or <b>“Lawgical Associates”</b>), use and protect the data, a user,
            employee, third party, individuals (“Users” or “you” or “your”)
            provides to us when you visit{" "}
            <Link
              href="www.lawgicalassociates.com"
              style={{ color: "#1034A6", fontWeight: 600 }}
            >
              www.lawgicalassociates.com
            </Link>
            &nbsp;
            <b>(“Website”)</b>. We take the privacy of our clients and visitors
            very seriously. This Policy outlines the types of personal
            information we collect, how we use it, and how we protect your
            information.
          </Typography>
          <Typography sx={heading}>
            COLLECTION, DISCLOSURE AND USE OF PERSONAL INFORMATION
          </Typography>
          {privacypolicy.map((privacy, index) => (
            <>
              <Typography sx={subHeading} key={index}>
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    mr: "10px",
                    mb: "3px",
                  }}
                />
                {privacy.heading}
              </Typography>
              <Typography sx={point}>{privacy.point}</Typography>
            </>
          ))}
          <Typography sx={desc}>
            In case you have any concerns over the handling of your personal
            information or questions about this Policy or any other
            communication in relation to this Policy, you may address them to us
            by sending an email at &nbsp;
            <Link href="" style={{ color: "#1034A6", fontWeight: 600 }}>
              info@lawgicalassociates.com
            </Link>
            .
          </Typography>
        </Container>
      </LandingLayout>
    </>
  );
};

export default PrivacyPolicy;
