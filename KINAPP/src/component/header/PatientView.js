import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AccountCircle from '@material-ui/icons/AccountCircle';

import ListPatient from './ListPatient';



const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PatientView extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        
        <IconButton
                  
                  aria-haspopup="true"
                  onClick={this.handleClickOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Liste patient
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
          <ListPatient _TraitementDone={this.props._TraitementDone} 
            _TraitementImpossible={this.props._TraitementImpossible}  
            patientFolder={this.props.patientFolder} 
            patient={this.props.patient} 
            _EditMedicalFolder={this.props._EditMedicalFolder}/>   
           
          </List>
          
        </Dialog>
      </div>
    );
  }
}

PatientView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientView);