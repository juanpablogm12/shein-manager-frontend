import { Button } from "@mui/material";
import React from "react";

export default function MyButtom() {
  return (
    <Button
      variant="contained"
      sx={{
        width: "200px",
        height: "32px",
        borderRadius: "4px",
        background: "linear-gradient(180deg, #5B3FC5 0%, #9771FF 100%)",
        boxShadow: "2px 1px 10px 0px rgba(0, 0, 0, 0.08)",
        transition: "0.3s"
      }}
    >
      prueba
    </Button>
  );
}
