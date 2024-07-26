import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import DescriptionIcon from '@mui/icons-material/Description';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Your Name
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Web Developer | Tech Enthusiast | Lifelong Learner
        </Typography>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LinkedInIcon />}
                href="#linkedin"
              >
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<RssFeedIcon />}
                href="#substack"
              >
                Substack
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="info"
                startIcon={<DescriptionIcon />}
                href="#resume"
              >
                Resume
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body1" sx={{ mt: 4 }}>
          Welcome to my personal website. I'm passionate about technology and
          always excited to take on new challenges in the world of web development.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
