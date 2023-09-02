import React, { ReactElement } from "react";
import { Metadata } from "next";
import { Paper, Typography } from "@mui/material";
import ContactForm from "@/app/components/ContactForm";
import "@/app/contact/contact.scss";

export const metadata: Metadata = {
  title: "Galactic Design | Contact",
  description: "Lets connect and get started on your next amazing project together!",
  keywords: ["contact galactic design, galactic design contact, contact page, contact us, contact me, contact form, reach out to galactic design, reach us"],
  openGraph: {
    type: "website",
    url: "https://www.galacticdesign.io/contact",
    title: "Galactic Design | Contact",
    description: "Lets connect and get started on your next amazing project together!",
    siteName: "Galactic Design",
  },
};

export default function Contact(): ReactElement {
  return (
    <div className="contact-wrapper">
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <Typography variant="h2" align="center">
          Want to work together on a project?
        </Typography>
        <div className="contact-grid">
          <div>
            <Typography variant="caption" color="grey" gutterBottom>
              [01] WEB DEVELOPMENT
            </Typography>
            <Typography gutterBottom>
              Throughout my career, I’ve had the opportunity to create diverse
              websites, gaining experience across a range of major frameworks
              such as React, Next, Angular, and Svelte. I can handle projects
              independently or seamlessly integrate into existing developer
              teams.
            </Typography>
            <Typography variant="caption" color="grey" gutterBottom>
              [02] TECHNICAL DIRECTION
            </Typography>
            <Typography gutterBottom>
              With my expertise in web & software development, I guide clients
              in selecting the right frameworks, languages, and tools. I
              collaborate closely to develop scalable, future-proof technical
              strategies for exceptional and beautiful user experiences.
            </Typography>
            <Typography variant="caption" color="grey" gutterBottom>
              [03] TECHNICAL CONSULTANCY
            </Typography>
            <Typography gutterBottom>
              As a technical consultant, I help clients make informed decisions
              and optimise their technological strategies. By understanding
              their unique challenges and goals, I offer tailored
              recommendations to best fit the clients needs.
            </Typography>
          </div>
          <ContactForm />
        </div>
      </Paper>
    </div>
  );
}
