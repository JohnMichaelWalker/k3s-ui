import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#065c26", // teal accent
    },
    secondary: {
      main: "#7c4dff", // electric purple
    },
    background: {
      default: "#121212", // deep dark background
      paper: "#1e1e1e", // slightly lighter for contrast
    },
    text: {
      primary: "#e0e0e0", // soft white
      secondary: "#b0b0b0", // muted gray
    },
    error: {
      main: "#ff5252", // modern red
    },
    warning: {
      main: "#ffb300", // amber
    },
    info: {
      main: "#29b6f6", // bright cyan
    },
    success: {
      main: "#66bb6a", // fresh green
    },
  },
});

export default theme;
