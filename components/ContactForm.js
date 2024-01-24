import React, { useState } from "react";

//mui-components
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";

//hooks
import { useForm } from "react-hook-form";

//components
import SimpleTextInput from "./FormFields/SimpleTextInput";
import EmailInput from "./FormFields/EmailInput";
import toast, { Toaster } from "react-hot-toast";

function ContactForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    });

    let reqOptions = {
      url: `https://lawgicalassociates.netlify.app/api/contact-us`,
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
    <Grid container padding={2} justifyContent="center">
      <Grid item xs={12} md={props.md}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            sx={{
              color: "#3A4668",
              fontWeight: 600,
              lineHeight: "30pX",
              fontSize: "20px",
              m: "20px 10px",
              textAlign: props.textAlign,
              fontFamily: "Poppins",
            }}
          >
            {props.title}
          </Typography>
          <Grid container sx={{ justifyContent: "center" }} spacing={2}>
            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "name",
                  label: "Your Name",
                  props: { required: true },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <EmailInput
                register={register}
                field={{
                  name: "email",
                  label: "Your Email",
                  props: { required: true },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "subject",
                  label: "Add a subject",
                  props: { required: true },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "message",
                  label: "Write your message",
                  props: { required: true },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} textAlign={"center"}>
              <Grid item xs={12} md={6} textAlign={"center"}>
                <Button
                  sx={{
                    backgroundColor: "#DA9042",
                    color: "#fff",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    "&:hover": {
                      backgroundColor: "#DA9042",
                      color: "#fff",
                    },
                  }}
                  disabled={submitted ? true : false}
                  variant="contained"
                  type="submit"
                  size="medium"
                >
                  {submitted
                    ? "Thank You :)"
                    : loading
                    ? "Sending..."
                    : "Submit"}
                </Button>
                {submitted && (
                  <Typography variant="body2">
                    You will hear from us soon!!!
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Toaster position="bottom-right" />
    </Grid>
  );
}

export default ContactForm;
