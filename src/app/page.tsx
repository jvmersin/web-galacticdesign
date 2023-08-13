import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ProjectCard from "@/app/components/ProjectCard";
import TechImage from "@/app/components/TechImage";
import IconImage from "@/app/components/IconImage";
import { ServicesArray, TServicesData } from "@/app/data/ServicesData";
import {
  TechnologiesArray,
  TTechnologiesData,
} from "@/app/data/TechnologiesData";
import "@/app/home.scss";
import { SocialsArray, TSocialsData } from "@/app/data/SocialsData";
import SocialsImage from "@/app/components/SocialsImage";

export default function Home() {
  return (
    <div className="layout-grid">
      <Paper variant="outlined" className="avatar-cont">
        <Typography variant="h3" align="center" padding="20px">
          Full-stack Engineer
        </Typography>
        <img
          className="headshot"
          src="https://cdn.galacticdesign.io/images/headshots/headshot_03.png"
          alt="James Ehrenberg Headshot"
        />
        <Typography align="center" padding="20px 10px">
          &#128075; Hello there, I'm James Ehrenberg. A full-stack engineer with
          a passion for graphics and web design, based out of Rhode Island.
          &#128205;
        </Typography>
      </Paper>
      <Paper className="new-noteworthy" variant="outlined">
        <Typography variant="h3" align="center" gutterBottom>
          New & Noteworthy Projects
        </Typography>
        <Box className="project-card-grid">
          <ProjectCard
            imageSrc="https://cdn.galacticdesign.io/images/projects/planet-ozzi/site-planet-ozzi-01.jpg"
            imgTitle="Planet OZZI Website Landing"
            cardTitle="Planet OZZI"
            cardDesc="Planet OZZI is an online platform that allows users to browse OZZI's catalog of products and solutions for reusable containers. The website provides an interface for users to view information on how the OZZI system works, the large footprint OZZI has accross different industries both inside and outside the USA. The website also sports a variety of resources such as a custom systems cost calculator, and a custom shopping cart for users to request quotes for popular OZZI products."
            webUrl="https://planetozzi.com"
            techStack={["React", "TypeScript", "SCSS"]}
            hasActions={true}
          />
          <ProjectCard
            imageSrc="https://cdn.galacticdesign.io/images/projects/college-storage/site-cs-13.jpg"
            imgTitle="College Storage Website Landing"
            cardTitle="College Storage"
            cardDesc="College Storage is an online platform suite for its end-users and its administrators. The website provides a friendly interface for users to browse different services, view pricing, and sign up for seasonal storage. College Storage is accompanied by a web-based user portal for viewing and modifying storage and account information. As well as a dashboard for management to view, add, and edit new pricing, pickup locations, student accounts, and more."
            webUrl="https://collegestorage.com"
            techStack={["React", "TypeScript", "SCSS", "ExpressJS", "MySQL"]}
            hasActions={true}
          />
        </Box>
      </Paper>
      <Paper className="services" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        <Box
          sx={{
            gap: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          {ServicesArray.map((service: TServicesData, index: number) => (
            <IconImage
              key={index}
              image={service.image}
              width={service.width}
              alt={service.alt}
              title={service.title}
            />
          ))}
        </Box>
        <Typography variant="h4" gutterBottom>
          Technologies
        </Typography>
        <Box
          sx={{
            gap: "50px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {TechnologiesArray.map(
            (technology: TTechnologiesData, index: number) => (
              <TechImage
                key={index}
                image={technology.image}
                width={technology.width}
                alt={technology.alt}
              />
            )
          )}
        </Box>
      </Paper>
      <Paper className="socials" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Socials
        </Typography>
        <Box
          sx={{
            gap: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
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
        </Box>
      </Paper>
      <Paper className="experience" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Box
          sx={{
            gap: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Paper sx={{ width: "220px" }}>
            <Stack alignItems="center" padding="20px">
              <Typography variant="h5">Years Experience</Typography>
              <Typography variant="h2">10+</Typography>
            </Stack>
          </Paper>
          <Paper sx={{ width: "220px" }}>
            <Stack alignItems="center" padding="20px">
              <Typography variant="h5">Clients Worldwide</Typography>
              <Typography variant="h2">12+</Typography>
            </Stack>
          </Paper>
          <Paper sx={{ width: "220px" }}>
            <Stack alignItems="center" padding="20px">
              <Typography variant="h5">Total Projects</Typography>
              <Typography variant="h2">100+</Typography>
            </Stack>
          </Paper>
        </Box>
      </Paper>
      <Paper className="graphics" variant="outlined">
        <Typography variant="h4" gutterBottom>
          Graphics Work
        </Typography>
      </Paper>
    </div>
  );
}
