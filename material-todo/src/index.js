import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import amber from "@material-ui/core/colors/amber";

/**
 * Global styling
 */
import "./tailwind.css";

/**
 * Local components
 */
import App from "./components/App";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: amber
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
