import { ThemeOptions } from "@mui/material";
import { Rationale } from "next/font/google";

const rationale = Rationale({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
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
    tertiary: PaletteOptions["primary"];
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

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

const AppTheme = (themeType: string) =>
  ({
    typography: {
      fontSize: 16,
      fontFamily: rationale.style.fontFamily,
    },
    palette: {
      mode: themeType,
      background: {
        default: "#10151d",
        paper: "#1B2735",
      },
      primary: { main: "#673ab7" },
      secondary: { main: "#00b0ff" },
      tertiary: {
        main: "#ffea00",
        contrastText: "#121212",
      },
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
