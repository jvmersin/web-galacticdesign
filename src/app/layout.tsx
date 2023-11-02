import { ReactNode } from "react";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation/Navigation";
import ThemeRegistry from "@/utilities/theme/ThemeRegistry";
import Footer from "@/components/Footer";
import "@/app/index.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.galacticdesign.io"),
  title: "Galactic Design",
  description:
    "Galactic Design is a one stop shop for full stack web development, software engineering, web and technology consulting, and more!",
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
  robots: "robots.txt",
  manifest: "manifest.json",
  authors: {
    name: "James Ehrenberg",
    url: "https://www.galacticdesign.io",
  },
  icons: {
    icon: "/images/favicon/favicon-16x16.png",
    apple: "/images/favicon/favicon-192x192.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.galacticdesign.io",
    title: "Galactic Design",
    description:
      "Galactic Design is a one stop shop for full stack web development, software engineering, web and technology consulting, and more!",
    siteName: "Galactic Design",
  },
  twitter: {
    card: "summary_large_image",
  },
  appleWebApp: {
    capable: true,
    title: "Galactic Design",
    statusBarStyle: "default",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <div className="starfield">
            <div id="stars-sm" />
            <div id="stars-md" />
            <div id="stars-lg" />
          </div>
          <main>
            <Navigation />
            {children}
            <Footer />
          </main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
