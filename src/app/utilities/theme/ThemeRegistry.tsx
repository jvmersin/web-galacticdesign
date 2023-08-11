"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "@/app/utilities/theme/AppTheme";
import NextAppDirEmotionCacheProvider from "@/app/utilities/theme/EmotionCache";
import {createTheme, responsiveFontSizes, Theme} from "@mui/material";

type ThemeRegistryProps = {
  children: React.ReactNode;
};

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  let muiTheme: Theme = createTheme(AppTheme("dark"));
  muiTheme = responsiveFontSizes(muiTheme);
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
