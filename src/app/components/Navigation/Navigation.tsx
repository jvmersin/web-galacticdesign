"use client";
import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import DesktopNavigation from "@/app/components/Navigation/DesktopNavigation";
import MobileNavigation from "@/app/components/Navigation/MobileNavigation";
import NavigationDrawer from "@/app/components/Navigation/NavigationDrawer";

export default function Navigation() {
  const isDesktop: boolean = useMediaQuery("(min-width: 1200px)");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box>
      {!isDesktop ? (
        <MobileNavigation handleOpen={setDrawerOpen} />
      ) : (
        <DesktopNavigation />
      )}
      <NavigationDrawer open={drawerOpen} handleClose={setDrawerOpen} />
    </Box>
  );
}
