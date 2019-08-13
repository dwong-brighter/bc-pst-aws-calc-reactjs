import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuButton from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function NavigationBar () {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton color="inherit" edge="start" aria-label="Menu">
          <MenuButton />
        </IconButton>
        <Typography variant="h6" color="inherit">BC PST Calculator for AWS Billing (Using ReactJS and Material-UI)</Typography>
      </Toolbar>
    </AppBar>
  );
}

NavigationBar.propTypes = {};

export default NavigationBar;
