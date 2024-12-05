import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";

// Extend the Palette interface to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    graySecondary: PaletteColor;
    grayPrimary: PaletteColor;
    bluePrimary: PaletteColor;
    blackPrimary: PaletteColor;
  }
  interface PaletteOptions {
    graySecondary?: PaletteColorOptions;
    grayPrimary?: PaletteColorOptions;
    bluePrimary?: PaletteColorOptions;
    blackPrimary?: PaletteColorOptions;
  }
}

const mainTheme = createTheme({
  typography: {
    fontFamily: "Satoshi, Arial, sans-serif",
    h1: {
      fontFamily: "Satoshi-Black",
      fontSize: "2.25rem",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "Satoshi-Bold",
      fontSize: "1.188rem",
    },
    body1: {
      fontFamily: "Satoshi-Medium",
      fontSize: "1.188rem",
    },
    body2: {
      fontFamily: "Satoshi-Regular",
      fontSize: "0.875rem",
    },
  },
  palette: {
    background: {
      default: "#ffffff",
    },
    graySecondary: {
      main: "#f7f7f7",
    },
    grayPrimary: {
      main: "#969191",
    },
    bluePrimary: {
      main: "#001eb9",
    },
    blackPrimary: {
      main: "#162427",
    },
  },
});

export default mainTheme;
