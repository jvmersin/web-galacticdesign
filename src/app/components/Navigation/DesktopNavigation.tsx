import React from "react";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import styles from "@/app/components/Navigation/navigation.module.css";
import NavigationLogo from "@/app/components/Navigation/NavigationLogo";

export default function DesktopNavigation() {
  return (
    <Box className={styles.navigationBar}>
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
        <Button href="/" component={Link} color="inherit">
          Home
        </Button>
        <Button href="/about" component={Link} color="inherit">
          About
        </Button>
        <Button href="/portfolio" component={Link} color="inherit">
          Portfolio
        </Button>
        <Button href="/contact" component={Link} color="inherit">
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
        <Button variant="contained" color="primary">
          Pay Invoice
        </Button>
      </Box>
    </Box>
  );
}
