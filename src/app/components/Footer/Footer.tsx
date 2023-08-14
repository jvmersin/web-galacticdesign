import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

export default function Footer(): ReactNode {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70px",
      }}
    >
      <Typography>
        Copyright &copy; {new Date().getFullYear()} Galactic Design LLC{" "}
      </Typography>
    </Box>
  );
}
