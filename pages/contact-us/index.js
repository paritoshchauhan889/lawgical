import React, { useState } from "react";

//components
import LandingLayout from "@/components/LandingLayout";

//mui-components
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Box";
import axios from "axios";

//mui-icons
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SimpleTextInput from "@/components/FormFields/SimpleTextInput";

//form
import { useForm } from "react-hook-form";
import EmailInput from "@/components/FormFields/EmailInput";
import TextAreaInput from "@/components/FormFields/TextAreaInput";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data, e) => {
    setLoading(true);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      from: data?.email,
      to: "info@lawgicalassociates.com",
      subject: data?.subject,
      message: data?.message,
      contactNumber: data?.contactNumber,
    });

    let reqOptions = {
      url: `https://bissgro.com/api/contact-us`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    console.log(response.data);
    if (!response.data.success) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
    }
    e.target.reset();
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <LandingLayout>
        <Box
          sx={{
            backgroundImage: `url(${"/contact-us.svg"})`,
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
            Contact Us
          </Typography>
        </Box>
        <Container>
          <Grid
            container
            sx={{
              m: "1cm 0cm",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item xs={10} md={6}>
              <Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0459227031347!2d77.23945731504936!3d28.56838369373227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1d0b20b8111%3A0x7c86869ba62e11be!2sLawgical%20Associates!5e0!3m2!1sen!2sin!4v1676349592256!5m2!1sen!2sin"
                  width="600"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: "0px" }}
                ></iframe>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                  },
                  mt: "0.5cm",
                }}
              >
                <AttachEmailIcon sx={{ color: "#DA9042", mr: "5px" }} />
                <Typography
                  sx={{
                    color: "#3A4668",
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      sm: "18px",
                    },
                  }}
                >
                  <a
                    href="mailto:admin@lawgicalassociates.com"
                    style={{
                      textDecoration: "none",
                      color: "#3A4668",
                    }}
                  >
                    admin@lawgicalassociates.com
                  </a>
                  &nbsp;&nbsp;&&nbsp;
                </Typography>
                <Typography
                  sx={{
                    ml: { xs: "0", sm: "0", md: "5px" },
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      sm: "18px",
                    },
                  }}
                >
                  <a
                    href="mailto:info@lawgicalassociates.com"
                    style={{
                      textDecoration: "none",
                      color: "#3A4668",
                    }}
                  >
                    info@lawgicalassociates.com
                  </a>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                  },
                  mt: "0.2cm",
                }}
              >
                <LocalPhoneIcon sx={{ color: "#DA9042", mr: "5px" }} />
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      sm: "18px",
                    },
                  }}
                >
                  <a
                    href="tel:+91 1142474098"
                    style={{
                      textDecoration: "none",
                      color: "#3A4668",
                    }}
                  >
                    +91 1142474098,
                  </a>
                </Typography>
                <Typography
                  sx={{
                    ml: { xs: "0", sm: "0", md: "5px" },
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      sm: "18px",
                    },
                  }}
                >
                  <a
                    href="tel:+91 7428181222"
                    style={{
                      textDecoration: "none",
                      color: "#3A4668",
                    }}
                  >
                    +91 7428181222
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                mt: "0.5cm",
                justifyCoontent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#3A4668",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "30px",
                }}
              >
                Enquire Now
              </Typography>

              <ContactForm />
            </Grid>
          </Grid>
          <Toaster position="bottom-right" />
        </Container>
      </LandingLayout>
    </>
  );
};

export default ContactUs;
