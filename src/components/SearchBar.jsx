import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function SearchBar() {
  return (
    <Box>
      <InputBase
      placeholder="Busca productos por nombre"
        startAdornment={<SearchIcon sx={{ color: "neutral.A3", p: "0 8px", width: "32px" }} />}
        sx={{
          width: "500px",
          height: "32px",
          bgcolor: "neutral.A1",
          color: "main.C",
          borderRadius: "8px",
        }}
      />
    </Box>
  );
}
