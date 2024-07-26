import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Personal Website
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          This is a simple homepage built with Material-UI.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
