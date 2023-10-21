import { ReactElement } from "react";
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
        reverse
        imgClass="jesmac"
        image="https://cdn.galacticdesign.io/images/projects/jesmac/site-jesmac-01.jpg"
        alt="Jesmac Home Page"
        title="Jesmac Inc."
        description={`Jesmac is a an online platform designed to showcase current and previous work from Jesmac Inc. The website sports a mobile-first user interface designed around touch functionality for its slideshows and images galeries. Users can view the history of Jesmac and its team, the companies priority and dedication to safety, and its unique training techniques for getting its employees ready to hit the field.\n\nThe website also includes a rich portfolio of work from Jesmac Inc. that is conveniently broken down into categories. Users can easily view the work that is important to them when deciding if Jesmac is the right fit for their construction project.`}
        website="https://jesmacinc.com"
        techStack={["HTML", "SCSS", "PHP", "JavaScript", "jQuery"]}
      />
      <PortfolioPiece
        imgClass="phoenix"
        image="https://cdn.galacticdesign.io/images/projects/phoenix-strategy/site-phoenix-01.jpg"
        alt="Phoenix Strategy Home Page"
        title="Phoenix Strategy"
        description="Phoenix Strategy is an online portfolio of work from the Phoenix Strategy Investments team. The website is a friendly place for users to learn more about Phoenix Strategy and their talented team of investors. Here you can learn more about the teams investment approach, why you should partner with Phoenix Strategy for your future investments, and what makes the team so successful at what they do."
        website="https://phoenixstrategy.com/"
        techStack={["HTML", "SCSS", "TypeScript"]}
      />
      <PortfolioPiece
        reverse
        imgClass="louis"
        image="https://cdn.galacticdesign.io/images/projects/louis-jardin/site-lou-01.jpg"
        alt="Louis Jardin Home Page"
        title="Louis Jardin"
        description="Louis Jardin is a freelance multimedia producer. His website serves as a portfolio of his work both at Vice and through his freelance endeavors. The wesbite is a multimedia showcase with a beautiful reel of Louis' work front and center, and thumbnails throughout the site providing previews of each of his individual works."
        website="https://louisjardin.com"
        techStack={["HTML", "SCSS", "JavaScript", "jQuery"]}
      />
      <PortfolioPiece
        imgClass="college"
        image="https://cdn.galacticdesign.io/images/projects/college-storage/site-cs-13.jpg"
        alt="College Storage Home Page"
        title="College Storage"
        description="College Storage is an online platform suite for its end-users and its administrators. The website provides a friendly interface for users to browse different services, view pricing, and sign up for seasonal storage. College Storage is accompanied by a web-based user portal for viewing and modifying storage and account information. As well as a dashboard for management to view, add, and edit new pricing, pickup locations, student accounts, and more."
        website="https://collegestorage.com"
        techStack={["React", "SCSS", "TypeScript"]}
      />
      <PortfolioPiece
        reverse
        imgClass="ozzi"
        image="https://cdn.galacticdesign.io/images/projects/planet-ozzi/site-planet-ozzi-01.jpg"
        alt="PlanetOZZI Home Page"
        title="PlanetOZZI"
        description="Planet OZZI is an online platform that allows users to browse OZZI's catalog of products and solutions for reusable containers. The website provides an interface for users to view information on how the OZZI system works, the large footprint OZZI has accross different industries both inside and outside the USA. As well as a variety of resources such as a custom systems cost calculator, and a custom shopping cart to request quotes for popular OZZI products."
        website="https://planetozzi.com"
        techStack={["React", "SCSS", "TypeScript", "Node.js"]}
      />
    </div>
  );
}
