import { Avatar } from "@mui/material";
import React from "react";

export default function IconAvatar({ icon, title }: { icon?: string | React.ReactNode; title: string }) {
  const size = 40;

  if (typeof icon === "string" && icon.length > 0) {
    return (
      <Avatar
        src={icon}
        alt={`${title} logo`}
        sx={{ width: size, height: size, bgcolor: "action.selected" }}
      />
    );
  }

  return (
    <Avatar
      sx={{
        width: size,
        height: size,
        bgcolor: "primary.main",
        color: "primary.contrastText",
        "& .MuiSvgIcon-root": { fontSize: 26 },
      }}
      aria-hidden={icon ? undefined : true}
    >
      {React.isValidElement(icon) ? icon : title.slice(0, 1).toUpperCase()}
    </Avatar>
  );
}