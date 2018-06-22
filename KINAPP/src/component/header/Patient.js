import React from 'react';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import '../style/detailPatient.css';

class Patient extends React.Component{

    render(){
        return(
            <span>
                <div> 
                <ListItem id="patientListId" >
                <TextField value={this.props.data.name} margin="normal"/>
                <TextField value={this.props.data.surname} margin="normal"/>
                <TextField value={this.props.data.phoneNumber} margin="normal"/>
                <TextField value={this.props.data.nextAppointement} margin="normal"/>  
                </ListItem>
                </div>
            </span>
        );
    }
}

export default Patient;