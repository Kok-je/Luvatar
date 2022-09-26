import * as React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { Box, createTheme, Stack, ThemeProvider, useTheme } from "@mui/material";
import { useState } from "react";
import { purple, grey } from '@mui/material/colors';

import './App.css';



function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === 'dark' && {
          main: purple[900],
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: "#000000",
          paper: purple[900],
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: '#fff',
              secondary: grey[500],
            }),
      },
    },
  });
  
  const darkModeTheme = createTheme(getDesignTokens(mode));

  const theme = useTheme();

  return (
    <ThemeProvider theme={darkModeTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
