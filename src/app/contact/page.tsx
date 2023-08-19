import React, {ReactElement} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Galactic Design | Contact",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        type: "website",
        url: "https://www.galacticdesign.io/contact",
        title: "Galactic Design | Contact",
        description:
            "",
        siteName: "Galactic Design",
    },
};

export default function Contact(): ReactElement {
    return (
        <p>Contact page</p>
    )
}