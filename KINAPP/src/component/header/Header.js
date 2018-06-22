import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';

import PatientView from './PatientView';
import PopupLogin from './loginPassword/PopupLogin';



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {
  state = {
    auth: false,
    anchorEl: null,
  };

  _displayPatientIcone=(identifiant, password, iconOpen)=>{
    if(identifiant === "admin" && password === "admin" && iconOpen === true){
      this.setState({auth: true});    
    }else{
      this.setState({auth: false});
    }
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {

    
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    Boolean(anchorEl);

    return (
      <div className={classes.root}>

      
        <FormGroup>            
          <PopupLogin _displayPatientIcone={this._displayPatientIcone} _LoginPassword={this.props._LoginPassword}  _Connexion={this._Connexion} _Deconnexion={this._Deconnexion}/>  
        </FormGroup>


        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Kinapp
            </Typography>
            {auth && (
              <div>
                <PatientView _TraitementDone={this.props._TraitementDone} 
                _TraitementImpossible={this.props._TraitementImpossible}  
                patientFolder={this.props.patientFolder} 
                patient={this.props.patient}
                _EditMedicalFolder={this.props._EditMedicalFolder}/>  
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);