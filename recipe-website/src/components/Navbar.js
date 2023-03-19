import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            Recipe Website
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
