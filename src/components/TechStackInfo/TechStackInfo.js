import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../logo.svg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  '@keyframes logoSpin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  logo: {
    animation: '$logoSpin infinite 20s linear',
    marginLeft: '0.5rem',
    marginTop: '0.5rem',
  },
  details: {
    width: '100%',
    display: 'block',
  },
});

function TechStackInfo() {
  const classes = useStyles();

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon aria-label="Expand" />}>
        <Typography variant="subtitle1" color="inherit">Technology Stack</Typography>
      </AccordionSummary >
      <AccordionDetails className={classes.details}>
        <Avatar className={classes.logo} src={logo} alt="logo" />
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
      </AccordionDetails>
    </Accordion>
  );
}

TechStackInfo.propTypes = {};

export default TechStackInfo;
