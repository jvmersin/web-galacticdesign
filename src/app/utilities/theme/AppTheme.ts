import { ThemeOptions } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Palette {
    twitch: Palette["primary"];
    linkedIn: Palette["primary"];
    twitter: Palette["primary"];
    facebook: Palette["primary"];
    youtube: Palette["primary"];
    adobe: Palette["primary"];
    instagram: Palette["primary"];
    reddit: Palette["primary"];
  }

  interface PaletteOptions {
    twitch: PaletteOptions["primary"];
    linkedIn: PaletteOptions["primary"];
    twitter: PaletteOptions["primary"];
    facebook: PaletteOptions["primary"];
    youtube: PaletteOptions["primary"];
    adobe: PaletteOptions["primary"];
    instagram: PaletteOptions["primary"];
    reddit: PaletteOptions["primary"];
  }
}

const AppTheme = (themeType: string) =>
  ({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    palette: {
      mode: themeType,
      primary: { main: "#C8B1D9" },
      secondary: { main: "#A6768F" },
      twitch: { main: "#6441A5" },
      linkedIn: { main: "#0077B5" },
      twitter: { main: "#38A1F3" },
      facebook: { main: "#3B5998" },
      youtube: { main: "#C4302B" },
      adobe: { main: "#C4302B" },
      instagram: { main: "#F56040" },
      reddit: { main: "#FF4500" },
    },
  } as ThemeOptions);

export default AppTheme;
