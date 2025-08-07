// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 3, mt: 5 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" color="text.secondary">
          © {new Date().getFullYear()} Swiggy UI Clone. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
