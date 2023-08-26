import React, { ReactElement } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "@/app/components/PortfolioPiece/portfolio_piece.scss";

type PortfolioPieceProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  techStack: string[];
  website?: string;
  reverse?: boolean;
};

export default function PortfolioPiece({
  image,
  alt,
  title,
  description,
  techStack,
  website,
  reverse,
}: PortfolioPieceProps): ReactElement {
  return (
    <div className={`portfolio-piece-grid${reverse ? "-reverse" : ""}`}>
      <div className={`browser-window ${reverse ? "reverse" : ""}`}>
        <div className="browser-bar">
          <div className="browser-controls">
            <span className="browser-button"></span>
            <span className="browser-button"></span>
            <span className="browser-button"></span>
          </div>
        </div>
        <div className="browser-content">
          <img className="browser-image" src={image} alt={alt} />
        </div>
      </div>

      <Paper className="about-portfolio-piece" variant="outlined">
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" pb="25px">
          {description}
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          {techStack.map((tech: string, index: number) => (
            <Typography key={index}>{tech}</Typography>
          ))}
        </Stack>
        {website && (
          <Box
            sx={{
              marginTop: "25px",
            }}
          >
            <Button
              href={website ?? ""}
              color="secondary"
              target="_blank"
              endIcon={<OpenInNewIcon />}
            >
              Visit Site
            </Button>
          </Box>
        )}
      </Paper>
    </div>
  );
}
