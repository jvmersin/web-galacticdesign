import { ReactElement } from "react";
import { Typography } from "@mui/material";

export type TPersonalHistory = {
    date: string;
    title: string;
    location: string;
};

export default function PersonalHistory({
  date,
  title,
  location,
}: TPersonalHistory): ReactElement {
  return (
    <div>
      <Typography variant="caption" color="grey.500">
        {date}
      </Typography>
      <Typography fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="caption" color="grey.500">
        {location}
      </Typography>
    </div>
  );
}
