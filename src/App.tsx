import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './components/HomePage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
