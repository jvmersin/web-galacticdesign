import React, { ReactElement } from "react";
import { Metadata } from "next";
import { Divider, Paper, Typography } from "@mui/material";
import { EducationHistory, WorkHistory } from "@/app/data/PersonalHistoryData";
import TechImage from "@/app/components/TechImage";
import PersonalHistory, {
  TPersonalHistory,
} from "@/app/components/PersonalHistory/PersonalHistory";
import {
  TechnologiesArray,
  TTechnologiesData,
} from "@/app/data/TechnologiesData";
import "@/app/about/about.scss";

export const metadata: Metadata = {
  title: "Galactic Design | About",
  description:
    "Learn more about the man behind the heat shield. Delve into the past of Galactic Design, their inspirations, achievements, and aspirations for the future.",
  keywords: [
    "about galactic design",
    "learn more galactic design",
    "learn about galactic design",
    "Galactic Design About",
    "Galactic Design History",
    "history of galactic design",
  ],
  openGraph: {
    type: "website",
    url: "https://www.galacticdesign.io/about",
    title: "Galactic Design | About",
    description:
      "Learn more about the man behind the heat shield. Delve into the past of Galactic Design, their inspirations, achievements, and aspirations for the future.",
    siteName: "Galactic Design",
  },
};

export default function About(): ReactElement {
  return (
    <div className="about-grid">
      <Paper component="section" variant="outlined" className="avatar">
        <img
          className="headshot"
          src="https://cdn.galacticdesign.io/images/headshots/headshot_01.jpg"
          alt="James Ehrenberg Headshot"
        />
      </Paper>
      <Paper component="section" variant="outlined" className="summary">
        <Typography variant="h4" gutterBottom>
          A Little About Me
        </Typography>
        <Typography pb={2}>
          I embarked on my journey as a Full-Stack Web and Software Engineer
          during my high school days, crafting personalized MySpace layouts for
          myself and friends. What began as a creative outlet soon evolved into
          a genuine passion for web development. Over the years, I've nurtured
          and expanded this passion, honing my skills in both web and software
          engineering.
        </Typography>
        <Typography pb={2}>
          With eight years of management experience under my belt, I've honed my
          ability to curate and execute continuous process improvements. My
          expertise extends to hiring, onboarding, and leading diverse teams and
          leaders. Notably, I've implemented process improvements that
          significantly boosted efficiencies and lowered organizational costs.
        </Typography>
        <Typography pb={2}>
          Beyond the lines of code and pixels, my purpose as a developer has
          always been rooted in making life easier for people. I find immense
          satisfaction in leveraging software to transform complex challenges
          into simple, intuitive solutions, ushering in convenience and
          empowerment for users.
        </Typography>
        <Typography pb={2}>
          Peering into the future, my aspirations take flight towards the
          aerospace industry. My dream is to be a driving force as a Software
          Engineer, contributing to the ever-evolving landscape of aviation and
          space exploration. With unwavering dedication to excellence and a
          hunger for ongoing learning, I'm excited to leave my mark on this
          dynamic field.
        </Typography>
      </Paper>
      <Paper component="section" variant="outlined" className="work-history">
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        {WorkHistory.map(
          (education: TPersonalHistory, index: number): ReactElement => (
            <>
              <PersonalHistory
                key={index}
                date={education.date}
                title={education.title}
                location={education.location}
              />
              {index !== WorkHistory.length - 1 && <Divider />}
            </>
          )
        )}
      </Paper>
      <Paper component="section" variant="outlined" className="education">
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        {EducationHistory.map(
          (education: TPersonalHistory, index: number): ReactElement => (
            <>
              <PersonalHistory
                key={index}
                date={education.date}
                title={education.title}
                location={education.location}
              />
              {index !== EducationHistory.length - 1 && <Divider />}
            </>
          )
        )}
      </Paper>
      <Paper component="section" variant="outlined" className="skills">
        <Typography variant="h4" gutterBottom>
          Acquired Skills
        </Typography>
        <div className="skill-avatar-grid">
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
        </div>
      </Paper>
    </div>
  );
}
