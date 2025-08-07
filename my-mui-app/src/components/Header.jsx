
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="default" sx={{ boxShadow: 1 }}>
      <Toolbar>
        <IconButton edge="start" color="primary" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UI Clone
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button color="primary">Offers</Button>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
