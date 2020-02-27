import React from "react";
import { Icon, Typography } from "@material-ui/core";

export const Empty = () => (
  <Typography
    color="textSecondary"
    className="text-center py-6 uppercase font-medium"
  >
    <Icon fontSize="inherit" color="inherit" className="text-4xl">
      assignment
    </Icon>
    <span className="block">Add items</span>
  </Typography>
);
