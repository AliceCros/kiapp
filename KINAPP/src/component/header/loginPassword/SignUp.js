import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

class SignUp extends Component {
    constructor(props){
    super(props);
    this.state={
        identifiant:'',
        password:'',
        iconOpen:true
    }
};

signUp (){
    
    this.props._handlePasswordConnexion(this.state.identifiant, this.state.password, this.state.iconOpen);

};

handleClose=()=>{
    this.props._handlePasswordDeconnexion()
}



    render () {
        return (
            <div className="form-inline">
                <h2>Accès</h2>
                    <div className="form-group">
                        <input
                             className="form-control"
                             type="text"
                            placeholder="identifiant"
                            onChange={event => this.setState({identifiant:event.target.value})}
                            />
                        <input
                            className="form-control"
                            type="password"
                            placeholder="password"
                            onChange={event => this.setState({password:event.target.value})}
                            />               
                    </div>
                            <DialogActions>
                                <Button onClick={() => this.signUp()} color="primary">
                                Connecter
                                </Button>
                                <Button onClick={this.handleClose} color="primary" autoFocus>
                                Deconnecter
                                </Button>
                            </DialogActions>
            </div>
           
        )

    }
}


export default SignUp;