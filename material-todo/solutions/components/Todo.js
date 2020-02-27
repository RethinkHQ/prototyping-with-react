import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export const Todo = ({ completed, text, onChange }) => {
  return (
    <div className="pl-4 py-4 border-solid border-0 border-t border-gray-400 first:border-t-0">
      <FormControlLabel
        control={<Checkbox checked={completed} onChange={onChange} />}
        label={
          <span className={completed ? "line-through" : undefined}>{text}</span>
        }
      />
    </div>
  );
};
