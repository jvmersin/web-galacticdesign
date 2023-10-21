import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Stack } from "@mui/material";

type IconImageProps = {
  image: string;
  width: number;
  alt: string;
  title: string;
  link: string;
};

export default function SocialsImage({
  image,
  width,
  alt,
  title,
  link,
}: IconImageProps) {
  return (
    <Stack alignItems="center">
      <img
        style={{
          filter: "invert(100%)",
          width: `${width}px`,
          height: "auto",
          marginBottom: "20px",
        }}
        src={image}
        alt={alt}
      />
      <Button
        href={link}
        size="small"
        target="_blank"
        color="inherit"
        endIcon={<OpenInNewIcon />}
      >
        {title}
      </Button>
    </Stack>
  );
}
