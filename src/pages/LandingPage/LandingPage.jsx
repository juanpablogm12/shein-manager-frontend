import { Box, Typography } from "@mui/material";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Typography variant="h1" sx={{color: "main.A"}}>Hello world</Typography>
      <Typography variant="h2" sx={{color: "main.B"}}>Hello world</Typography>
      <Typography variant="h3" sx={{color: "main.C"}}>Hello world</Typography>
      <Typography variant="h4" sx={{color: "neutral.A1"}}>Hello world</Typography>
      <Typography variant="h5" sx={{color: "neutral.A2"}}>Hello world</Typography>
      <Typography variant="h6" sx={{color: "neutral.A3"}}>Hello world</Typography>
      <Typography variant="body1" sx={{color: "neutral.A4"}}>Hello world</Typography>
      <Typography variant="h3" sx={{color: "access.C"}}>Hello world</Typography>
      <Typography variant="h3" sx={{color: "access.C1"}}>Hello world</Typography>
    </>
  );
}
