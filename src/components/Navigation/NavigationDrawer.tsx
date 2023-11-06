import { Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";

type NavigationDrawerProps = {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
};

export default function NavigationDrawer({
  open,
  handleClose,
}: NavigationDrawerProps) {
  const pathname = usePathname();
  return (
    <Drawer anchor="right" open={open} onClose={() => handleClose(false)}>
      <List
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            sx={(theme) => ({
              fontSize: "1.4rem",
              fontWeight: "bold",
              textAlign: "center",
              color: theme.palette.secondary.main,
            })}
            aria-label="Planet OZZI Header"
          >
            Galactic Design
          </ListSubheader>
        }
        sx={{
          width: "100%",
          height: "100%",
          minWidth: "275px",
          position: "relative",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton
            href="/"
            component={Link}
            selected={pathname === "/"}
            disabled={pathname === "/"}
            onClick={() => handleClose(false)}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/about"
            component={Link}
            selected={pathname === "/about"}
            disabled={pathname === "/about"}
            onClick={() => handleClose(false)}
          >
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/portfolio"
            component={Link}
            selected={pathname === "/portfolio"}
            disabled={pathname === "/portfolio"}
            onClick={() => handleClose(false)}
          >
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="/contact"
            component={Link}
            selected={pathname === "/contact"}
            disabled={pathname === "/contact"}
            onClick={() => handleClose(false)}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
