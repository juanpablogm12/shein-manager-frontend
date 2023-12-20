import { Box } from "@mui/material";
import React from "react";
import SearchBar from "../../../components/SearchBar";
import MyButtom from "../../../components/MyButtom";

export default function Products() {
  return (
    <Box sx={{ display: "flex", gap: "8px", padding: "48px" }}>
      <SearchBar />
      <MyButtom />
    </Box>
  );
}
