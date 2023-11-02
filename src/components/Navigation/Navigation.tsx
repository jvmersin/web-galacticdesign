"use client";
import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import DesktopNavigation from "@/components/Navigation/DesktopNavigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation";
import NavigationDrawer from "@/components/Navigation/NavigationDrawer";

export default function Navigation() {
  const isDesktop: boolean = useMediaQuery("(min-width: 1200px)");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box component="header">
      {!isDesktop ? (
        <MobileNavigation handleOpen={setDrawerOpen} />
      ) : (
        <DesktopNavigation />
      )}
      <NavigationDrawer open={drawerOpen} handleClose={setDrawerOpen} />
    </Box>
  );
}
