import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    main: {
      A: "#5B3FC5",
      B: "#9771FF",
      C: "#211F2C",
      D: "#FFFFFF",
    },
    neutral: {
      A1: "#EFECF9",
      A2: "#C5C2D0",
      A3: "#9C9AA7",
      A4: "#83818E",
    },
    access: {
      C: "#47D36E",
      C1: "#D34754",
    },
  },
  typography: {
    fontFamily: "inter, sans-serif",
    h1: {
      fontSize: "58px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "40px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "32px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "28px",
      fontWeight: 400,
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
});

export default theme = responsiveFontSizes(theme);
