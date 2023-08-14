import React from "react";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import NavigationLogo from "@/app/components/Navigation/NavigationLogo";
import "@/app/components/Navigation/navigation.scss";

export default function DesktopNavigation() {
  return (
    <Box className="desktop-nav-grid">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavigationLogo />
        <Typography variant="h5" whiteSpace="nowrap">
          Galactic Design
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button href="/" component={Link} color="inherit" size="large">
          Home
        </Button>
        <Button href="/about" component={Link} color="inherit" size="large">
          About
        </Button>
        <Button href="/portfolio" component={Link} color="inherit" size="large">
          Portfolio
        </Button>
        <Button href="/contact" component={Link} color="inherit" size="large">
          Contact
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "30px",
        }}
      >
        <Button variant="contained" color="primary" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
}
