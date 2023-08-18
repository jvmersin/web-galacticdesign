import React, { ReactElement } from "react";
import { Divider, Paper, Typography } from "@mui/material";
import "@/app/about/about.scss";
import { EducationHistory, WorkHistory } from "@/app/data/PersonalHistoryData";
import PersonalHistory, {
  TPersonalHistory,
} from "@/app/components/PersonalHistory/PersonalHistory";

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
          My educational pursuit led me to a Bachelor's in Computer Science, a
          cornerstone in my quest for knowledge and expertise. I've embraced the
          intricacies of coding and development while fostering a deep
          admiration for UI/UX design. Finding satisfaction in crafting elegant
          and captivating user experiences that resonate with customers.
        </Typography>
        <Typography pb={2}>
          Beyond technical finesse, I am driven to simplify and enhance the
          lives of others through software. I find joy from transforming complex
          challenges into intuitive solutions that streamline everyday tasks,
          empowering individuals in their digital interactions.
        </Typography>
        <Typography pb={2}>
          Looking ahead, my aspirations have taken flight towards the aerospace
          industry. A dream of mine is to contribute as a Software Engineer in
          this dynamic field, harnessing technology to fuel innovation and drive
          progress. With an unquenchable thirst for learning and an unyielding
          commitment to excellence, I'm excited to continue my journey, crafting
          innovative solutions and leaving a lasting impact.
        </Typography>
      </Paper>
      <Paper component="section" variant="outlined" className="experience">
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
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Paper>
    </div>
  );
}
