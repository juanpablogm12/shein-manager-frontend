import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./DashboardComponents/SideBar";
import { Box } from "@mui/material";

export default function Dashboard() {
  
  return (
    <Box sx={{display: "flex", width: "100vw", height: "100vh", bgcolor: "main.D"}}>
      <SideBar/>
      <Outlet />
    </Box>
  );
}
