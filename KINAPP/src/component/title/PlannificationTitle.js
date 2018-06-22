import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../style/title.css'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 450
  }),
});

function PlannificationTitle(props) {
  const { classes } = props;
  return (
    <div id="titlePlanner">
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          Planification Rendez-Vous
        </Typography>
        
      </Paper>
    </div>
  );
}

PlannificationTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlannificationTitle);