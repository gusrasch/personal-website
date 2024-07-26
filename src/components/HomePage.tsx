import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
              fontWeight: 700,
              letterSpacing: '0.1em',
              paddingLeft: { xs: '1rem', sm: '2rem', md: '4rem' }, 
            }}
          >
            GUS RASCH
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            {['LINKEDIN', 'GITHUB', 'SUBSTACK', 'RESUME'].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: '1.2rem',
                  mb: 2,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
