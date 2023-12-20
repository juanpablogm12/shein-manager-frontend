import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../dashboard.css";

export default function SideBar() {
  const navLinks = [
    {
      name: "Productos",
      icon: <LocalOfferIcon />,
      url: "products",
    },
    {
      name: "Pedidos",
      icon: <LibraryBooksIcon />,
      url: "orders",
    },
    {
      name: "Ajustes",
      icon: <SettingsIcon />,
      url: "settings",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "16%",
        height: "100%",
        backgroundColor: "neutral.A1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "48px",
          padding: "48px 32px",
        }}
      >
        <Typography variant="h3" sx={{ color: "main.B" }}>
          LOGO
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            height: "72px",
            color: "main.C"
          }}
        >
          <Avatar sx={{ bgcolor: "main.B", height: "32px", width: "32px" }} />
          <Typography variant="h6">Juan Pablo</Typography>
        </Box>
      </Box>
      <Stack sx={{ flexGrow: 1 }}>
        {navLinks.map((navLink) => {
          return (
            <NavLink
              key={navLink.name}
              className={({ isActive }) => [
                isActive ? "navLink-active" : "navLink",
              ]}
              to={navLink.url}
            >
              {navLink.icon}
              <Typography variant="h6">{navLink.name}</Typography>
            </NavLink>
          );
        })}
      </Stack>
      <Box>
        <Box sx={{ padding: "0 16px" }}>
          <Divider />
        </Box>
        <NavLink
          className={({ isActive }) => [
            isActive ? "navLink-active" : "navLink",
          ]}
          to={"/"}
        >
          <LogoutIcon />
          <Typography variant="h6">Log Out</Typography>
        </NavLink>
      </Box>
    </Box>
  );
}
