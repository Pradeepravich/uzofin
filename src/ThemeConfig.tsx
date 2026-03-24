import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { FC, PropsWithChildren } from "react";

const ThemeConfig: FC<PropsWithChildren> = ({ children }) => {
  // Customize your theme here
  const theme = createTheme({
    palette: {
      mode: "light", // or "dark"
      primary: {
        main: "#1976d2",
        light: "#63a4ff",
        dark: "#004ba0",
        contrastText: "#fff",
      },
      secondary: {
        main: "#dc004e",
        light: "#ff5c8d",
        dark: "#9a0036",
        contrastText: "#fff",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0,0,0,0.87)",
      },
      info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
        contrastText: "#fff",
      },
      success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0,0,0,0.87)",
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#d5d5d5",
        A200: "#aaaaaa",
        A400: "#303030",
        A700: "#616161",
      },
      text: {
        primary: "rgba(0,0,0,0.87)",
        secondary: "rgba(0,0,0,0.6)",
        disabled: "rgba(0,0,0,0.38)",
      },
      background: {
        default: "#fafafa",
        paper: "#fff",
      },
    },
    typography: {
      // fontFamily: "Roboto, Arial, sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
      },
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            padding: "16px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
