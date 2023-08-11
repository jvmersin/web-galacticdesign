import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import styles from "@/app/components/Navigation/navigation.module.css";

export default function Navigation() {
  return (
    <Box className={styles.navigationBar}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>Galactic Design</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ padding: "0 35px", fontWeight: "bold" }}
          component={Link}
          href="/"
          color="secondary"
        >
          Home
        </Button>
        <Button
          sx={{ padding: "0 35px", fontWeight: "bold" }}
          component={Link}
          href="/about"
          color="secondary"
        >
          About
        </Button>
        <Button
          sx={{ padding: "0 35px", fontWeight: "bold" }}
          component={Link}
          href="/portfolio"
          color="secondary"
        >
          Portfolio
        </Button>
        <Button
          sx={{ padding: "0 35px", fontWeight: "bold" }}
          component={Link}
          href="/contact"
          color="secondary"
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
        <Button>Pay Invoice</Button>
      </Box>
    </Box>
  );
}
