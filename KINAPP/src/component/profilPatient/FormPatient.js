import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

class FormPatient extends React.Component{
    state = {
        name: '',
        surname: '',
        adress: '',
        mail: '',
        phoneNumber: '',
        socialSecurityNumber: '',
        birthd: '',
        
      };
    
      handleSubmit = (oEvt) => {
        oEvt.preventDefault(); 
        this.props._AddPatient(this.state);
        this.setState({name:'', surname:'', adress:'',mail:'',phoneNumber:'',socialSecurityNumber:'',birthd: ''},)
        console.log(oEvt, "EVENT");
      };
      
    render(){

        return(

        <div>  
        <form onSubmit={this.handleSubmit}>
                <form className="nameClass"  noValidate autoComplete="off">
                    <TextField
                    label="Nom"
                    value={this.state.name}
                    onChange={(oEvt)=> this.setState({name: oEvt.target.value})}
                    margin="normal"
                    />
                </form>
                <form className="surnameClass" noValidate autoComplete="off">
                    <TextField
                    label="Prénom"
                    value={this.state.surname}
                    onChange={(oEvt)=> this.setState({surname: oEvt.target.value})}
                    margin="normal"
                    />
                </form>
                <form className="birthdClass" noValidate autoComplete="off">
                    <TextField
                    label="Date de Naissance"
                    value={this.state.birthd}
                    onChange={(oEvt)=> this.setState({birthd: oEvt.target.value})}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    /> 
                </form>
                <form className="adressClass" noValidate autoComplete="off">
                    <TextField
                    label="Adresse"
                    value={this.state.adress}
                    onChange={(oEvt)=> this.setState({adress: oEvt.target.value})}
                    margin="normal"
                    />
                </form>
                
                <form className="secuClass" noValidate autoComplete="off">
                    <TextField
                    label="Numéro de sécurité sociale"
                    value={this.state.socialSecurityNumber}
                    onChange={(oEvt)=> this.setState({socialSecurityNumber: oEvt.target.value})}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    />   
                </form>
                <form className="numClass"  autoComplete="off">
                    <TextField
                    label="Téléphone"
                    value={this.state.phoneNumber}
                    onChange={(oEvt)=> this.setState({phoneNumber: oEvt.target.value})}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    />    
                
                <form className="mailClass" noValidate autoComplete="off">
                <TextField
                label="@Mail"
                value={this.state.mail}
                onChange={(oEvt)=> this.setState({mail: oEvt.target.value})}
                margin="normal"
                /> 
                </form>
                </form>
                <button type="submit" className="formRegisterButton btn btn-success">Valider</button> 
        </form>
        </div>  
        )
       
    }

}

FormPatient.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(FormPatient);







