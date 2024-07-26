import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './components/HomePage';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
