import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../logo.svg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class TechStackInfo extends Component {
  render() {
    return (
      <div>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon aria-label="Expand" />}>
            <Typography variant="subheading" color="inherit">Technology Stack</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Paper>
              <img src={logo} alt="logo" />
              <List>
                <ListItem dense>
                  <ListItemText primary="ReactJS" />
                </ListItem>
                <ListItem dense>
                  <ListItemText primary="Material-UI" />
                </ListItem>
                <ListItem dense>
                  <ListItemText primary="Node.js (and NPM)" />
                </ListItem>
              </List>
            </Paper>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      );
  }
}

TechStackInfo.propTypes = {};

export default TechStackInfo;
