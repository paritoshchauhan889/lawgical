import React, { useState } from "react";

//mui-component
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

//components
import SimpleTextInput from "./FormFields/SimpleTextInput";
import EmailInput from "./FormFields/EmailInput";
import DropDownInput from "./FormFields/DropDownInput";
import TextAreaInput from "./FormFields/TextAreaInput";
import toast, { Toaster } from "react-hot-toast";

//form
import { useForm, Controller } from "react-hook-form";

function CareersForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
    reset,
    control,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data, e) => {
    setLoading(true);
    let formdata = new FormData();
    let personDetails = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      contactNumber: data?.contactNumber,
      city: data?.city,
      state: data?.state,
      country: data?.country,
      jobType: data?.jobType,
      expertiseArea: data?.expertiseArea,
      description: data?.description,
    };
    formdata.append("from", data?.email);
    formdata.append("to", "info@lawgicalassociates.com");
    formdata.append("subject", "Careers Form");
    formdata.append("attachment", data.attachment[0]);
    formdata.append("personDetails", JSON.stringify(personDetails));

    let headersList = {
      Accept: "*/*",
    };

    let bodyContent = formdata;

    let reqOptions = {
      url: `https://project-ila.vercel.app/api/career-form`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    let response = await axios.request(reqOptions);
    if (!response.data.success) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
    }
    e.target.reset();
    setLoading(false);
    setSubmitted(true);
  };

  const [fileName, setFileName] = useState("");
  return (
    <Grid container justifyContent={"center"} sx={{ m: "1cm 0cm" }}>
      <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            sx={{
              color: "#3A4668",
              fontWeight: 600,
              lineHeight: "30pX",
              fontSize: "20px",
              m: "20px 10px",
              textAlign: "center",
            }}
          >
            INTERESTED CANDIDATES APPLY FOR INTERNSHIP/JOB
          </Typography>
          <Grid container sx={{ justifyContent: "center" }} spacing={2}>
            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "firstName",
                  label: "First Name",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "lastName",
                  label: "Last Name",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <EmailInput
                register={register}
                field={{
                  name: "email",
                  label: "Email",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "contactNumber",
                  label: "Phone Number",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "city",
                  label: "City",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "state",
                  label: "State",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <SimpleTextInput
                register={register}
                field={{
                  name: "country",
                  label: "Country",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <DropDownInput
                register={register}
                field={{
                  name: "jobType",
                  label: "Job Type",
                  props: { required: true },
                  menuItems: [
                    {
                      option: "Full Time to Employee",
                      value: "Full Time to Employee",
                    },
                    {
                      option: "Internship",
                      value: "Internship",
                    },
                  ],
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <DropDownInput
                register={register}
                field={{
                  name: "expertiseArea",
                  label: "Expertise Area",
                  props: { required: true },
                  menuItems: [
                    {
                      option: "Sexual Harassment Laws",
                      value: "Sexual Harassment Laws",
                    },
                    {
                      option: "Commercial Agreements & Contracts",
                      value: "Commercial Agreements & Contracts",
                    },
                    {
                      option: "Employment & Labour Laws",
                      value: "Employment & Labour Laws",
                    },
                    {
                      option: "Imgigration, Citizenship & Residency",
                      value: "Imgigration, Citizenship & Residency",
                    },
                    {
                      option: "Intelectual Property",
                      value: "Intelectual Property",
                    },
                    {
                      option: "Litigation",
                      value: "Litigation",
                    },
                    {
                      option: "Real Estate",
                      value: "Real Estate",
                    },
                    {
                      option: "Social Sector/ NGOs",
                      value: "Social Sector/ NGOs",
                    },
                    {
                      option: "Family Laws & Divorce matter",
                      value: "Family Laws & Divorce matter",
                    },
                    {
                      option: "Start-up's",
                      value: "Start-up's",
                    },
                    {
                      option: "Dispute Resolution & Arbitration",
                      value: "Dispute Resolution & Arbitration",
                    },
                    {
                      option: "Healthcare",
                      value: "Healthcare",
                    },
                    {
                      option: "MBA & Private Equity",
                      value: "MBA & Private Equity",
                    },
                    {
                      option: "Corporate & Commercial matters",
                      value: "Corporate & Commercial matters",
                    },
                    {
                      option: "White Collar Crime & Investigation",
                      value: "White Collar Crime & Investigation",
                    },
                    {
                      option: "Regulatory Affairs & Compliances",
                      value: "Regulatory Affairs & Compliances",
                    },
                    {
                      option: "Environmental Laws",
                      value: "Environmental Laws",
                    },
                    {
                      option: "HR Advisory",
                      value: "HR Advisory",
                    },
                  ],
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextAreaInput
                register={register}
                field={{
                  name: "description",
                  label: "Description",
                  props: { required: true },
                  backgroundColor: "#F6F6F6",
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                component="label"
                sx={{
                  backgroundColor: "#218CEE",
                }}
              >
                Choose File
                {/* <input
                  {...register("attachment")}
                  name="File Upload"
                  onChange={handleFile}
                  type="file"
                  hidden
                /> */}
                <Controller
                  name="attachment"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="file"
                      onChange={(e) => {
                        setFileName(e.target.files[0].name);
                        field.onChange(e.target.files);
                      }}
                      multiple
                      hidden
                    />
                  )}
                />
              </Button>
              <Typography component={"span"}>{fileName}</Typography>
              <Button
                onClick={() => {
                  reset({
                    attachment: null,
                  });
                  setFileName("");
                }}
              >
                Cancel
              </Button>
            </Grid>

            {/* --------------------------------- */}
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
              >
                {submitted ? "Thank You :)" : loading ? "Sending..." : "Submit"}
              </Button>
              {submitted && (
                <Typography variant="body2">
                  You will hear from us soon!!!
                </Typography>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Toaster position="bottom-right" />
    </Grid>
  );
}

export default CareersForm;
