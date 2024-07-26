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
        bgcolor: 'background.default',
        color: 'text.primary',
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
            {[
              { name: 'LINKEDIN', href: 'https://www.linkedin.com/in/gusrasch' },
              { name: 'GITHUB', href: 'https://github.com/gusrasch' },
              { name: 'SUBSTACK', href: 'https://gusrasch.substack.com' },
              { name: 'RESUME', href: '/gus-resume.pdf' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.name === 'RESUME' ? '_blank' : '_self'}
                rel={item.name === 'RESUME' ? 'noopener noreferrer' : ''}
                underline="hover"
                color="inherit"
                sx={{
                  fontSize: '1.2rem',
                  mb: 2,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
