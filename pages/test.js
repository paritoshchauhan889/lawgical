import React, { useState } from "react";
import CareersForm from "@/components/CareersForm";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import LandingLayout from "@/components/LandingLayout";
import Head from "next/head";

function TestPage() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <LandingLayout>
       
      <Box onMouseEnter={handleShow} onMouseLeave={handleClose}>
        {show === true ? (
          <>
            <Typography variant="h5">Hello This is a text</Typography>
            <Button variant="contained">Button</Button>
          </>
        ) : (
          <Image
            src={"/lawgical-logo.png"}
            alt={"logo"}
            height={70}
            width={200}
          />
        )}
      </Box>
    </LandingLayout>
  );
}

export default TestPage;
