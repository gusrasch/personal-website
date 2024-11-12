import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import HomePage from './components/HomePage';
import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '"Roboto Condensed", sans-serif',
  },
});

const App: React.FC = () => {
  useEffect(() => {
    logEvent(analytics, 'page_view');
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
