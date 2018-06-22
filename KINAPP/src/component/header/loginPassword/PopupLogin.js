import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SignUp from './SignUp';


class PopupLogin extends React.Component {
  state = {
    open: false,
    auth: false,
    anchorEl: null,
    
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    
  };


 //-----------Connection with password
  _handlePasswordConnexion = (identifiant,password,iconOpen) => {
     if(identifiant === "admin" && password === "admin"){
      this.setState({ open: false });
      this.props._LoginPassword(true);
      this.props._displayPatientIcone(identifiant,password,iconOpen);
     }else{
       alert("Login incorrect")
       this.setState({ open: false });
     }
    
  };

  _handlePasswordDeconnexion = (identifiant,password) => {
    this.props._LoginPassword(false);
    this.setState({iconOpen:false});
    this.props._displayPatientIcone(identifiant,password,this.state.iconOpen);
    this.setState({ open: false });
  };


//-------------------------------------
handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };


  render() {
    
    const {anchorEl } = this.state;
    Boolean(anchorEl);


    return (
      <div>

        <Button onClick={this.handleClickOpen}>Connexion</Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="connection-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="connection-title">{"Voulez-vous accéder à votre espace?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="connection-description">
              <SignUp _handlePasswordConnexion ={this._handlePasswordConnexion} 
              _handlePasswordDeconnexion={this._handlePasswordDeconnexion}/>
            </DialogContentText>
          </DialogContent>
          
        </Dialog>
      </div>
    );
  }
}

export default PopupLogin;