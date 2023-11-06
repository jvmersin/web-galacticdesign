import Link from "next/link";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import classes from "@/components/Navigation/navigation.module.scss";
import Image from "next/image";

type NavigationBarProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NavigationBar({
  handleOpen,
}: NavigationBarProps): ReactElement {
  return (
    <Box className={classes["nav-bar-grid"]}>
      <Box className={classes["nav-company-header"]}>
        <Image
          priority
          width={70}
          height={70}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "70px",
          }}
          placeholder="blur"
          blurDataURL="/images/logo/logo.svg"
          src="/images/logo/logo.svg"
          alt="Minimilast Planet"
        />
        <Typography variant="h5" whiteSpace="nowrap">
          Galactic Design
        </Typography>
      </Box>
      <Box className={classes["nav-link-container"]}>
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
        <Button variant="contained" color="primary" size="large">
          Login
        </Button>
      </Box>

      <Box className={classes["drawer-toggle-icon-container"]}>
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
    </Box>
  );
}
