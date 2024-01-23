import React from "react";
import Image from "next/image";
import imageUrl from "./imageUrl";
import Link from "next/link";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//mui-icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

//data
import footerData from "../data/footerData";

const Footer = () => {
  const text = {
    fontSize: {
      xs: "10px",
      sm: "10px",
      md: "15px",
    },
    fontWeight: 400,
    lineHeight: { xs: "16px", sm: "16px", md: "20px" },
    color: "#FFF",
    fontFamily: "Poppins",
    letterSpacing: "0.5px",
    mt: { xs: "15px", sm: "15px", md: "10px" },
  };
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#252E4E",
        }}
      >
        <Grid item container sx={{ justifyContent: "center" }}>
          <Grid
            item
            sx={{
              mt: { xs: 2, sm: 2, md: 9 },
              paddingLeft: { xs: "10px", sm: "10px", md: "0px" },
            }}
            xs={12}
            md={2.5}
          >
            <Image
              src={"/lawgical-logo.png"}
              width={260}
              height={77.58}
              alt="lawgical logo"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "row",
                  sm: "row",
                  md: "column",
                },
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  m: { xs: "0", sm: "0", md: "0.5cm 1cm" },
                }}
              >
                <a href="mailto:admin@lawgicalassociates.com">
                  <Image
                    src={imageUrl.email_icon}
                    alt="email-icon"
                    width={30}
                    height={30}
                    style={{ margin: "10px" }}
                  />
                </a>
                <a href="https://www.linkedin.com/company/lawgical-associates/">
                  <Image
                    src={imageUrl.linkedin}
                    alt="linkedin-icon"
                    width={30}
                    height={30}
                    style={{ margin: "10px" }}
                  />
                </a>
                <a href="https://wa.me/7428181222">
                  <Image
                    src={imageUrl.whatsapp}
                    alt="whatsapp-icon"
                    width={30}
                    height={30}
                    style={{ margin: "10px" }}
                  />
                </a>
              </Box>
              <Box
                sx={{
                  m: { xs: "0", sm: "0", md: "0 1.2cm" },
                }}
              >
                <Typography sx={text}>
                  <Link
                    href="/privacy-policy"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={2.5} sx={{ p: 2, mt: { xs: 0, sm: 0, md: 6 } }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "36px",
                color: "#fff",
                fontFamily: "Poppins",
              }}
            >
              Practice Areas
            </Typography>

            <Box
              sx={{
                border: "2px solid #fff",
                width: "3cm",
                mb: "20px",
              }}
            />

            <Grid container item>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/corporate-commercial-matters"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Corporate & Commercial Matters
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/regulatory-affairs"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Regulatory Affairs & Compliances
                  </Link>
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/employment-labour-law"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Employment & Labour Laws
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/family-law"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Family Law & Divorce Matters
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/dispute-resolution-arbitration"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Dispute Resolutions & Arbitration
                  </Link>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/immigration-citizenship-residency"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    White Collar Crimes & Fraud Investigation
                  </Link>
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ArrowRightIcon sx={{ mt: "7px", color: "#fff" }} />
                <Typography sx={text}>
                  <Link
                    href="/practice-area/immigration-citizenship-residency"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    Immigration, Citizenship & Residency
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={6} md={2.3} sx={{ pt: { xs: 13, sm: 13, md: 14 } }}>
            <Typography sx={text}>
              <Link
                href="/practice-area/sexual-harassment"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Sexual Harassment Laws
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/environmental-law"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Environmental Laws
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/intellectual-property"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Intellectual Property
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/health-care"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Health Care
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/litigation"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Litigation
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/real-estate"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Real Estate
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/social-sector"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Social Sector /NGOs
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/practice-area/start-up"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Start Up
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={1.5}
            sx={{ p: 2, mt: { xs: 0, sm: 0, md: 6 } }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "36px",
                color: "#fff",
                fontFamily: "Poppins",
              }}
            >
              Quick Links
            </Typography>
            <Box
              sx={{
                border: "2px solid #fff",
                width: "3cm",
                mb: "20px",
              }}
            />

            <Typography sx={text}>
              <Link
                href="/about-us"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                About us
              </Link>
            </Typography>
            {/* <Typography sx={text}>
							<Link
								href="/our-people"
								style={{
									textDecoration: "none",
									color: "#fff",
								}}>
								<ArrowRightIcon sx={{ mb: "-5px" }} />
								Our People
							</Link>
						</Typography> */}
            <Typography sx={text}>
              <Link
                href="/careers"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Careers
              </Link>
            </Typography>
            <Typography sx={text}>
              <Link
                href="/contact-us"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ArrowRightIcon sx={{ mb: "-5px" }} />
                Contact us
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          sx={{
            flexDirection: "column",
            margin: {
              xs: "0cm 0.5cm",
              sm: "0cm 0.5cm",
              md: "0cm 4cm",
            },
          }}
        >
          <Grid
            item
            sx={{
              justifyContent: "center",
              textAlign: "center",
              border: "1px solid #fff",
              mt: "1cm",
            }}
          />

          <Grid item sx={{ padding: "15px 0px" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 400,
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "15px",
                },
                textAlign: "center",
              }}
            >
              All rights reserved @Lawgical Associates
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
