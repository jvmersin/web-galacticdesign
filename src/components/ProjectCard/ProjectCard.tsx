import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

type ProjectCardProps = {
  imageSrc: string;
  imgTitle: string;
  cardTitle: string;
  cardDesc: string;
  techStack: string[];
  hasActions: boolean;
  webUrl?: string;
};

export default function ProjectCard({
  imageSrc,
  imgTitle,
  cardTitle,
  cardDesc,
  techStack,
  hasActions,
  webUrl,
}: ProjectCardProps) {
  return (
    <Card>
      <CardMedia component="img" alt={imgTitle} height="220" image={imageSrc} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" pb="20px">
          {cardDesc}
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          {techStack.map((tech: string, index: number) => (
            <Typography key={index}>{tech}</Typography>
          ))}
        </Stack>
      </CardContent>
      {hasActions && (
        <CardActions>
          {webUrl && (
            <Button
              href={webUrl ?? ""}
              color="secondary"
              target="_blank"
              endIcon={<OpenInNewIcon />}
            >
              Visit Site
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}
