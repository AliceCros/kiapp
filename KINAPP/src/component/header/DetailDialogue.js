import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../style/detailPatient.css';


 class DetailDialogue extends React.Component {
  state = {open: false, newAppointement: ' ', isInEditMode: false};

  handleClickOpen = () => {  
    this.setState({ open: true, isInEditMode: false });
  };

  handleCloseDone = () => {
    if(this.state.newAppointement !== ' '){
      this.props.data.nextAppointement = this.state.newAppointement ;
    }
    this.props._TraitementDone(this.props.data);
    this.setState({newAppointement:' '});
    this.setState({ open: false });
  };

  handleCloseImpossible = () => {   
    this.props._TraitementImpossible(this.props.data)
    this.setState({ open: false });
  };

  _ToggleEditMode = () =>{
    this.setState({isInEditMode: !this.state.isInEditMode})
  }

  _HandlePathologieEdit = (oEvt, medicalFolder) =>{
    medicalFolder.pathologie = oEvt.target.value; 
    this.props._EditMedicalFolder(medicalFolder);
  }

  _HandleObservationEdit = (oEvt, medicalFolder) =>{
    medicalFolder.observation = oEvt.target.value; 
    this.props._EditMedicalFolder(medicalFolder);
  }

  _HandleTraitementEdit = (oEvt, medicalFolder) =>{
    medicalFolder.traitement = oEvt.target.value; 
    this.props._EditMedicalFolder(medicalFolder);
  }

  render() {
    return (
      <div>
        <Button id="detailButton" onClick={this.handleClickOpen}>Dossier medical</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"></DialogTitle>


          
            <button className="btn btn-warning btn-xs edit" onClick={()=>this._ToggleEditMode()}>Editer le dossier patient</button>
            {
              this.state.isInEditMode ?
              <span>
                <input placeholder ="Pathologie" type="text" value={this.props.data.pathologie} 
                onChange={(event)=>{this._HandlePathologieEdit(event, this.props.data)}} />
                 <input placeholder ="Observation" type="text" value={this.props.data.observation} 
                onChange={(event)=>{this._HandleObservationEdit(event, this.props.data)}} />
                <input placeholder ="Traitement" type="text" value={this.props.data.traitement} 
                onChange={(event)=>{this._HandleTraitementEdit(event, this.props.data)}} />
              </span>
              : <span>
              <DialogContent>
              <DialogContentText>             
                  <TextField label="Pathologie" value={this.props.data.pathologie} margin="normal" multiline/>              
              </DialogContentText>
              <DialogContentText>  
                <TextField label="Observation" value={this.props.data.observation} margin="normal"
                  className="multi" multiline/>    
              </DialogContentText> 
              <DialogContentText>  
                <TextField label="Traitement" value={this.props.data.traitement} margin="normal"
                  className="multi"  multiline/>    
              </DialogContentText>  
              </DialogContent>
              </span>
            }


          
          <div id="nextAppointementDetail">         
          <form  noValidate>
                    <TextField
                        label="Prochain rendez-vous"
                        value={this.props.data.nextAppointement}
                        //onChange={(oEvt)=> this.setState({nextAppointement: oEvt.target.value})}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>  
            </div>  
            <div>
            <form id="EnterNextAppointement" noValidate>
                    <TextField
                        id="datetime-local"
                        label="Prise de rendez-vous"
                        type="datetime-local"
                        value={this.state.newAppointement}
                        onChange={(oEvt)=> this.setState({newAppointement: oEvt.target.value})}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>   
            </div>    
          <DialogActions>
            <Button onClick={this.handleCloseDone} color="primary">
              Traitement effectué
            </Button>
            <Button onClick={this.handleCloseImpossible} color="primary">
              Traitement impossible
            </Button>
           
            
          </DialogActions>


        </Dialog>
      </div>
    );
  }
}

export default DetailDialogue;