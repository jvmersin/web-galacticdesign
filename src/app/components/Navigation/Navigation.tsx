import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import styles from "@/app/components/Navigation/navigation.module.css";

export default function Navigation() {
  return (
    <Box className={styles.navigationBar}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100px",
          }}
          src="https://cdn.galacticdesign.io/images/logo/logo.svg"
          alt="Minimilast Planet"
        />
        <Typography variant="h5" fontWeight="bold" whiteSpace="nowrap">
          Galactic Design
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          href="/"
          component={Link}
          sx={{ padding: "0 35px", fontWeight: "bold" }}
        >
          Home
        </Button>
        <Button
          href="/about"
          component={Link}
          sx={{ padding: "0 35px", fontWeight: "bold" }}
        >
          About
        </Button>
        <Button
          href="/portfolio"
          component={Link}
          sx={{ padding: "0 35px", fontWeight: "bold" }}
        >
          Portfolio
        </Button>
        <Button
          href="/contact"
          component={Link}
          sx={{ padding: "0 35px", fontWeight: "bold" }}
        >
          Contact
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button sx={{ fontWeight: "bold" }}>Pay Invoice</Button>
      </Box>
    </Box>
  );
}
