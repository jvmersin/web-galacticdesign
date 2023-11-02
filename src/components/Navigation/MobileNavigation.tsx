import { Dispatch, SetStateAction } from "react";
import { Box, IconButton, Theme, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";
import NavigationLogo from "@/components/Navigation/NavigationLogo";
import "@/components/Navigation/navigation.scss";

type MobileNavigationProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>;
};
export default function MobileNavigation({
  handleOpen,
}: MobileNavigationProps) {
  const theme: Theme = useTheme();
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
          [theme.breakpoints.up(330)]: {
            pr: "80px",
          },
          [theme.breakpoints.up(290)]: {
            pr: "60px",
          },
        }}
      >
        <NavigationLogo />
      </Box>
    </Box>
  );
}
