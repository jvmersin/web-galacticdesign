import React, { Dispatch, SetStateAction } from "react";
import { Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import NavigationLogo from "@/app/components/Navigation/NavigationLogo";
import "@/app/components/Navigation/navigation.scss";

type MobileNavigationProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>;
};
export default function MobileNavigation({
  handleOpen,
}: MobileNavigationProps) {
  return (
    <Box className="mobile-nav-grid">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          edge="start"
          aria-label="toggle-drawer"
          onClick={() => handleOpen(true)}
          color="inherit"
          sx={{
            margin: "0 10px",
          }}
        >
          <Menu />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pr: "80px",
        }}
      >
        <NavigationLogo />
      </Box>
    </Box>
  );
}
