import React from "react";
// mui 5
import Stack from "@mui/material/Stack";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// custom components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// custom context
import { useMode } from "./context/ThemeModeContext";

const AppStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

function App() {
  const modeState = useMode();

  const darkTheme = createTheme({
    palette: {
      mode: modeState?.mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppStack direction="column">
        <Navbar />
        <Home />
      </AppStack>
    </ThemeProvider>
  );
}

export default App;
