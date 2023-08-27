import React, { ReactElement } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import ProjectCard from "@/app/components/ProjectCard";
import IconImage from "@/app/components/IconImage";
import SocialsImage from "@/app/components/SocialsImage";
import TechImage from "@/app/components/TechImage";
import { ServicesArray, TServicesData } from "@/app/data/ServicesData";
import { SocialsArray, TSocialsData } from "@/app/data/SocialsData";
import {
  TechnologiesArray,
  TTechnologiesData,
} from "@/app/data/TechnologiesData";
import "@/app/home.scss";

export default function Home(): ReactElement {
  return (
    <div className="home-grid">
      <Paper
        component="section"
        variant="outlined"
        className="avatar-cont"
        sx={{ alignSelf: "start" }}
      >
        <Typography variant="h3" align="center" padding="20px">
          Full-stack Engineer
        </Typography>
        <img
          className="headshot"
          src="https://cdn.galacticdesign.io/images/headshots/headshot_03.jpg"
          alt="James Ehrenberg Headshot"
        />
        <Typography padding="20px 10px">
          &#128075; Hello, I'm James Ehrenberg. A full-stack engineer with a
          passion for graphics and web design, based out of the great ocean
          state, Rhode Island. &#128205;
        </Typography>
      </Paper>
      <Paper component="section" className="new-noteworthy" variant="outlined">
        <Typography variant="h3" align="center" gutterBottom>
          New & Noteworthy Projects
        </Typography>
        <div className="project-card-grid">
          <ProjectCard
            imageSrc="https://cdn.galacticdesign.io/images/projects/planet-ozzi/site-planet-ozzi-04.jpg"
            imgTitle="Planet OZZI Website Landing"
            cardTitle="Planet OZZI"
            cardDesc="Planet OZZI is an online platform that allows users to browse OZZI's catalog of products and solutions for reusable containers. The website provides an interface for users to view information on how the OZZI system works, the large footprint OZZI has accross different industries both inside and outside the USA. As well as a variety of resources such as a custom systems cost calculator, and a custom shopping cart to request quotes for popular OZZI products."
            webUrl="https://planetozzi.com"
            techStack={["React", "SCSS", "TypeScript"]}
            hasActions={true}
          />
          <ProjectCard
            imageSrc="https://cdn.galacticdesign.io/images/projects/college-storage/site-cs-14.jpg"
            imgTitle="College Storage Website Landing"
            cardTitle="College Storage"
            cardDesc="College Storage is an online platform suite for its end-users and its administrators. The website provides a friendly interface for users to browse different services, view pricing, and sign up for seasonal storage. College Storage is accompanied by a web-based user portal for viewing and modifying storage and account information. As well as a dashboard for management to view, add, and edit new pricing, pickup locations, student accounts, and more."
            webUrl="https://collegestorage.com"
            techStack={["React", "SCSS", "TypeScript", "ExpressJS", "MySQL"]}
            hasActions={true}
          />
        </div>
      </Paper>
      <Paper
        component="section"
        className="services"
        variant="outlined"
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        <div className="services-grid">
          {ServicesArray.map((service: TServicesData, index: number) => (
            <IconImage
              key={index}
              image={service.image}
              width={service.width}
              alt={service.alt}
              title={service.title}
            />
          ))}
        </div>
      </Paper>
      <Paper component="section" className="socials" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Socials
        </Typography>
        <div className="socials-grid">
          {SocialsArray.map((social: TSocialsData, index: number) => (
            <SocialsImage
              key={index}
              image={social.image}
              width={social.width}
              alt={social.alt}
              title={social.title}
              link={social.link}
            />
          ))}
        </div>
      </Paper>
      <Paper component="section" className="experience" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <div className="experience-grid">
          <Paper sx={{ width: "100%", maxWidth: "200px", padding: "1.5rem 0" }}>
            <Stack alignItems="center">
              <Typography variant="h6">Years Experience</Typography>
              <Typography variant="h3">12+</Typography>
            </Stack>
          </Paper>
          <Paper sx={{ width: "100%", maxWidth: "200px", padding: "1.5rem 0" }}>
            <Stack alignItems="center">
              <Typography variant="h6">Clients Worldwide</Typography>
              <Typography variant="h3">14+</Typography>
            </Stack>
          </Paper>
          <Paper sx={{ width: "100%", maxWidth: "200px", padding: "1.5rem 0" }}>
            <Stack alignItems="center">
              <Typography variant="h6">Total Projects</Typography>
              <Typography variant="h3">60+</Typography>
            </Stack>
          </Paper>
        </div>
      </Paper>
      <Paper component="section" className="technologies" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Technologies I Work With
        </Typography>
        <div className="technologies-grid">
          {TechnologiesArray.map(
            (technology: TTechnologiesData, index: number) => {
              if (index >= 12) return;
              return (
                <TechImage
                  key={index}
                  image={technology.image}
                  width={technology.width}
                  alt={technology.alt}
                />
              );
            }
          )}
        </div>
      </Paper>
    </div>
  );
}
