import React from 'react';



class PatientFolder extends React.Component{

    render(){
        return(
            <span>
                <div>
                <input   type="text" value={this.props.dataFolder.pathologie}/>
                </div>
            </span>
        );
    }
}

export default PatientFolder;