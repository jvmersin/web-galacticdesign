import React, { ReactElement } from "react";
import { Metadata } from "next";
import PortfolioPiece from "@/app/components/PortfolioPiece/PortfolioPiece";
import "@/app/portfolio/portfolio.scss";

export const metadata: Metadata = {
  title: "Galactic Design | Portfolio",
  description:
    "A catalog of work including both projects of my own, and those that I have made for my clients",
  keywords: [
    "galactic design portfolio, catalog of work for galactic design, design portfolio, web portfolio, design catalog, galactic design work",
  ],
  openGraph: {
    type: "website",
    url: "https://www.galacticdesign.io/portfolio",
    title: "Galactic Design | Portfolio",
    description:
      "A catalog of work including both projects of my own, and those that I have made for my clients",
    siteName: "Galactic Design",
  },
};

export default function Portfolio(): ReactElement {
  return (
    <div className="portfolio-grid">
      <PortfolioPiece
        image="https://cdn.galacticdesign.io/images/projects/berg-design/site-berg-design-01.jpg"
        alt="Berg Design Build Home Page"
        title="Berg Design Build"
        description="College Storage is an online platform suite for its end-users and its administrators. The website provides a friendly interface for users to browse different services, view pricing, and sign up for seasonal storage. College Storage is accompanied by a web-based user portal for viewing and modifying storage and account information. As well as a dashboard for management to view, add, and edit new pricing, pickup locations, student accounts, and more."
        website="http://bergdesignbuild.com/"
        techStack={["React", "SCSS", "TypeScript"]}
      />
      <PortfolioPiece
        reverse
        image="https://cdn.galacticdesign.io/images/projects/louis-jardin/site-lou-01.jpg"
        alt="Louis Jardin Home Page"
        title="Louis Jardin"
        description="Planet OZZI is an online platform that allows users to browse OZZI's catalog of products and solutions for reusable containers. The website provides an interface for users to view information on how the OZZI system works, the large footprint OZZI has accross different industries both inside and outside the USA. As well as a variety of resources such as a custom systems cost calculator, and a custom shopping cart to request quotes for popular OZZI products."
        website="https://louisjardin.com"
        techStack={["HTML", "SCSS", "JavaScript", "jQuery"]}
      />
      <PortfolioPiece
        image="https://cdn.galacticdesign.io/images/projects/college-storage/site-cs-13.jpg"
        alt="College Storage Home Page"
        title="College Storage"
        description="College Storage is an online platform suite for its end-users and its administrators. The website provides a friendly interface for users to browse different services, view pricing, and sign up for seasonal storage. College Storage is accompanied by a web-based user portal for viewing and modifying storage and account information. As well as a dashboard for management to view, add, and edit new pricing, pickup locations, student accounts, and more."
        website="https://collegestorage.com"
        techStack={["React", "SCSS", "TypeScript", "ExpressJS", "MySQL"]}
      />
      <PortfolioPiece
        reverse
        image="https://cdn.galacticdesign.io/images/projects/planet-ozzi/site-planet-ozzi-01.jpg"
        alt="PlanetOZZI Home Page"
        title="PlanetOZZI"
        description="Planet OZZI is an online platform that allows users to browse OZZI's catalog of products and solutions for reusable containers. The website provides an interface for users to view information on how the OZZI system works, the large footprint OZZI has accross different industries both inside and outside the USA. As well as a variety of resources such as a custom systems cost calculator, and a custom shopping cart to request quotes for popular OZZI products."
        website="https://planetozzi.com"
        techStack={["React", "SCSS", "TypeScript"]}
      />
      <PortfolioPiece
        image="https://cdn.galacticdesign.io/images/projects/kent-dillon/site-kent-01.jpg"
        alt="Kent Dillon Home Page"
        title="Kent Dillon"
        description="College Storage is an online platform suite for its end-users and its administrators. The website provides a friendly interface for users to browse different services, view pricing, and sign up for seasonal storage. College Storage is accompanied by a web-based user portal for viewing and modifying storage and account information. As well as a dashboard for management to view, add, and edit new pricing, pickup locations, student accounts, and more."
        techStack={["HTML", "SCSS", "JavaScript", "jQuery"]}
      />
      <PortfolioPiece
        reverse
        image="https://cdn.galacticdesign.io/images/projects/galactic-cs/site-galactic-01.jpg"
        alt="GalacticCS Home Page"
        title="GalacticCS"
        description="Planet OZZI is an online platform that allows users to browse OZZI's catalog of products and solutions for reusable containers. The website provides an interface for users to view information on how the OZZI system works, the large footprint OZZI has accross different industries both inside and outside the USA. As well as a variety of resources such as a custom systems cost calculator, and a custom shopping cart to request quotes for popular OZZI products."
        techStack={["HTML", "SCSS", "JavaScript"]}
      />
    </div>
  );
}
