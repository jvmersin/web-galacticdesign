import { Stack, Typography } from "@mui/material";

type IconImageProps = {
  image: string;
  width: number;
  alt: string;
  title: string;
};

export default function IconImage({
  image,
  width,
  alt,
  title,
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
      <Typography>{title}</Typography>
    </Stack>
  );
}
