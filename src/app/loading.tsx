import React, { ReactElement } from "react";
import { Skeleton } from "@mui/material";
import "@/app/home.scss";

export default function Loading(): ReactElement {
  return (
    <div className="home-grid">
      <Skeleton className="avatar-cont" height="100%" variant="rounded" />
      <Skeleton className="new-noteworthy" height="100%" variant="rounded" />
      <Skeleton className="services" height="100%" variant="rounded" />
      <Skeleton className="socials" height="100%" variant="rounded" />
      <Skeleton className="experience" height="100%" variant="rounded" />
      <Skeleton className="technologies" height="100%" variant="rounded" />
    </div>
  );
}
