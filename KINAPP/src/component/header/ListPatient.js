import React from 'react';
import Patient from './Patient';
import MappingDialogue from './MappingDialogue';


const ListPatient =(props)=>{
    
    
        return(
            <div>
                <div>
                {         
                        props.patient.map(patient => { 
                            const patientFolders = patient.files.filter((folder) => folder.frontId === patient.frontId);
                            
                            
                            return (
                            <div>
                                <Patient  data={patient} patientFolder={props.patientFolder}/>
                                <MappingDialogue _TraitementDone={props._TraitementDone} 
                                _TraitementImpossible={props._TraitementImpossible} 
                                patientFolder={patientFolders}
                                _EditMedicalFolder={props._EditMedicalFolder} 
                                className ="detailDialoguePlace"/>
                            </div>
                            )
                        })
                    }               
                </div>
            </div>
        );
    }


export default ListPatient;
