import * as React from "react";
import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation/Navigation";
import ThemeRegistry from "@/app/utilities/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Galactic Design",
  description: "Galactic Design is a one stop shop for full stack web development, software engineering, web and technology consulting, and more!",
  keywords: [
    "web consulting",
    "software consulting",
    "software design rhode island",
    "web design rhode island",
    "web development rhode island",
    "rhode island based software engineer",
    "rhode island web developer",
    "RI web development",
    "RI web developer",
    "RI web designer",
    "RI web design",
    "web development in rhode island",
    "rhode island web development",
    "rhode island based software development",
  ],
  authors: {
    name: "James Ehrenberg",
  },
  icons: {
    icon: "https://cdn.galacticdesign.io/images/favicon/favicon-16x16.png",
    apple: "https://cdn.galacticdesign.io/images/favicon/favicon-192x192.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.galacticdesign.io",
    title: "Galactic Design",
    description: "Galactic Design is a one stop shop for full stack web development, software engineering, web and technology consulting, and more!",
    siteName: "Galactic Design"
  },
  twitter: {
    card: "summary_large_image"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navigation />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
