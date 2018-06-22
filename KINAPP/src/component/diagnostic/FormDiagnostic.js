import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../style/login.css';


import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });


class FormDiagnostic extends React.Component{
    state = {
        multiline: '',
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        pathologie: '',
        traitement: '',
        nextAppointement: ' ',
      };

      

     handleSubmit = (oEvt) => {
        oEvt.preventDefault();
        const folderPatient = {observation: this.state.multiline, pathologie: this.state.pathologie, traitement: this.state.traitement, nextAppointement: this.state.nextAppointement };
        this.props._AddPatientFolder(folderPatient);
        this.setState({multiline: '',checkedA: false,checkedB: false,checkedC: false,checkedD: false, pathologie:' ', traitement: ' ', nextAppointement: ' '});
        
     };  

     handleChecked = (oEvt) =>{
        const checked = oEvt.target.value
        if(checked === "Articulaire"){
            this.setState({checkedA: oEvt.target.checked})
            this.setState({pathologie:"Problème articulaire"});
        }else if(checked === "Ligamentaire"){
            this.setState({checkedB: oEvt.target.checked})
            this.setState({pathologie:"Problème ligamentaire"});
        }else if(checked === "Musculaire"){
            this.setState({checkedC: oEvt.target.checked})
            this.setState({pathologie:"Problème musculaire"});
        }else if(checked === "Névralgique"){
            this.setState({checkedD: oEvt.target.checked})
            this.setState({pathologie:"Problème névralgique"});
        }
        
     };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <form className="multilineClass" noValidate autoComplete="off"> 
                    <TextField
                    id="multiline-flexible"
                    label="Observation"
                    multiline
                    rowsMax="1"
                    value={this.state.multiline}
                    onChange={(oEvt)=>this.setState({multiline:oEvt.target.value})}
                    className="multi"
                    margin="normal"
                    />
                </form>
                <form id="appointementClass" noValidate>
                    <TextField
                        id="datetime-local"
                        label="Premier rendez-vous"
                        type="datetime-local"
                        value={this.state.nextAppointement}
                        onChange={(oEvt)=> this.setState({nextAppointement: oEvt.target.value})}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                </form>  
                
                <form className="traitementClass" noValidate autoComplete="off"> 
                    <TextField
                    id="multiline-flexible"
                    label="Traitement envisager"
                    multiline
                    rowsMax="1"
                    value={this.state.traitement}
                    onChange={(oEvt)=>this.setState({traitement:oEvt.target.value})}
                    className="multi"
                    margin="normal"
                    />
                </form>
                <FormGroup row>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={this.state.checkedA}
                        onChange={(this.handleChecked)}
                        value="Articulaire"
                        />
                    }
                    label="Articulaire"
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={this.state.checkedB}
                        onChange={(this.handleChecked)}
                        value="Ligamentaire"
                        />
                    }
                    label="Ligamentaire"
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={this.state.checkedC}
                        onChange={(this.handleChecked)}
                        value="Musculaire"
                        />
                    }
                    label="Musculaire"
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                    control={
                        <Checkbox
                        checked={this.state.checkedD}
                        onChange={(this.handleChecked)}
                        value="Névralgique"
                        />
                    }
                    label="Névralgique"
                    />
                </FormGroup>
                <button type="submit" className="formDiagnosticButton btn btn-success">Valider</button> 
            </form>
        );
    }
}

FormDiagnostic.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormDiagnostic);