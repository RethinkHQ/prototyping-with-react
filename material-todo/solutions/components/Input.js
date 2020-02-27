import React from "react";
import { TextField } from "@material-ui/core";

export const Input = ({ value, onChange, onKeyDown }) => {
  return (
    <TextField
      placeholder="Add a task"
      fullWidth
      inputProps={{ className: "h-12 px-4 text-2xl" }}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
