import React from "react";

//mui-components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//components
import LandingLayout from "@/components/LandingLayout";
import GetInTouch from "@/components/GetInTouch";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"/aboutuscover.jpg"})`,
    height: "300px",
  },
};
const text = {
  fontSize: { xs: "13px", sm: "13px", md: "18px" },
  lineheight: { xs: "20px", sm: "20px", md: "25px" },
  p: "3px",
  textAlign: "justify",
  color: "#3A4668",
};
function AboutUsPage() {
  return (
    <LandingLayout>
      <Box
        sx={{
          backgroundImage: `url(${"/aboutus.svg"})`,
          height: "auto",
          maxwidth: "100%",
          minHeight: "300px",
        }}
        textAlign={"center"}
      >
        <Typography
          color={"#fff"}
          fontSize="54px"
          pt={"120px"}
          fontWeight="600"
        >
          About Us
        </Typography>
      </Box>
      {/* Text */}
      <Container>
        <Box textAlign={"center"}>
          <Typography
            sx={{
              color: "#252e4e",
              fontWeight: 700,
              fontSize: { xs: "20px", sm: "20px", md: "40px" },
              padding: "50px 0px 20px 0px",
            }}
          >
            Welcome to{" "}
            <Box component="span" color={"#DA9042"}>
              Lawgical Associates
            </Box>{" "}
          </Typography>
        </Box>
        <Box>
          <Typography sx={text}>
            Lawgical Associates is a full-service law firm which believes in{" "}
            <i>“Guiding its Clients Lawfully”.</i>
          </Typography>
          <Typography sx={text}>
            All the Partners of the Firm have more than 20 years’ experience in
            their respective practice areas and bring strong expertise and value
            addition in providing pragmatic and results- oriented solutions to
            our clients.
          </Typography>
          <Typography sx={text}>
            The firm deals in matters pertaining to Sexual Harassment, Consumer
            Protection laws, Employment &amp; Labour Laws, HR Advisory, IPR,
            Start-ups Advisory, Corporate law, Family Law &amp; Divorce matters,
            Real Estate, Regulatory Affairs &amp; Compliances, Social
            Sector/NGOs, Healthcare, Dispute Resolution, Litigation, White
            Collar Crime &amp; Fraud Investigation, M&amp;A /Private Equity and
            General Corporate Advisory.
          </Typography>
          <Typography sx={text}>
            We render our services to an array of domestic and international
            clients and advise various government departments and public sector
            undertakings as well. Our team of lawyers believes in delivering a
            client-focused value system and strives to understand our clients’
            needs and circumstances, to think independently, and to maintain
            honesty, fairness, integrity, and professionalism in everything they
            do.
          </Typography>
          <Typography sx={text}>
            We are dedicated to providing customers with advice and assistance
            that is cost-conscious, timely, value-added, devoted, and focused on
            their needs.
          </Typography>
        </Box>
      </Container>
      <Box>
        <GetInTouch />
      </Box>
    </LandingLayout>
  );
}

export default AboutUsPage;
