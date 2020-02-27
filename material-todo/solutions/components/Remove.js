import React from "react";
import { Button } from "@material-ui/core";

export const Remove = ({ onClick }) => (
  <div className="border-0 border-t border-solid border-gray-400">
    <Button fullWidth className="py-6" onClick={onClick}>
      Remove completed
    </Button>
  </div>
);
