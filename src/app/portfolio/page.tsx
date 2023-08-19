import React, {ReactElement} from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galactic Design | Portfolio",
  description:
    "",
  keywords: [
    ""
  ],
  openGraph: {
    type: "website",
    url: "https://www.galacticdesign.io/portfolio",
    title: "Galactic Design | Portfolio",
    description:
      "",
    siteName: "Galactic Design",
  },
};

export default function Portfolio(): ReactElement {
  return <p>Portfolio page</p>;
}
