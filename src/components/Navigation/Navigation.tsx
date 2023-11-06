"use client";
import { ReactElement, useState } from "react";
import { Box } from "@mui/material";
import NavigationBar from "@/components/Navigation/NavigationBar";
import NavigationDrawer from "@/components/Navigation/NavigationDrawer";

export default function Navigation(): ReactElement {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Box>
      <NavigationBar handleOpen={setDrawerOpen} />
      <NavigationDrawer open={drawerOpen} handleClose={setDrawerOpen} />
    </Box>
  );
}
