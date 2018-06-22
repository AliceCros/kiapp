import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';


import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const TraitementStatus = {
    IMPOSSIBLE: 'Traitement impossible',
    DONE: 'Traitement valider',

}

const patientReducer = (state = [], action)=>{
    switch(action.type){
        // case 'ADD_PATIENT':
        //     action.payload.id = state.length;
        //     const newState =[...state, action.payload];
        //     return newState;
        
        case 'ADD_PATIENT':
        
            axios.post('/api/patient', {
                frontId: state.length,
                name: action.payload.name,
                surname: action.payload.surname,
                socialSecurityNumber: action.payload.socialSecurityNumber,
                birthd: action.payload.birthd,
                adress: action.payload.adress,
                phoneNumber: action.payload.phoneNumber,
                mail: action.payload.mail
            }).then(res => {
                console.log('POST OK', res);
            }).catch(error => {
                console.log(error);
            });

            return [...state, action.payload];

        case 'GET_PATIENT':
            console.log('ON EST DANS LE GET PATIENT')
            return [...state,...action.payload];

        default:
            return state;
    }
}

const patientFolder = (state = [], action)=>{
    switch(action.type){
        // case 'ADD_PATIENT_FOLDER':  
        // action.payload.id = state.length;  
        //     return [...state, action.payload];
        case 'ADD_PATIENT_FOLDER':
            axios.post('/api/dossier', {
                frontId: state.length,
                pathologie: action.payload.pathologie, 
                traitement: action.payload.traitement,
                observation: action.payload.observation,
                nextAppointement: action.payload.nextAppointement
            }).then(res => {
                console.log(res.data);
                console.log('POST OK');
            }).catch(error => {
                console.log(error)
            });    
            return [...state, action.payload];        
        case 'GET_PATIENT_FOLDER':
            console.log('On est dans le GET PATIENT FOLDER');
            // console.log(action.payload.map(data => { return data.files }));
            return [...state, ...action.payload];
        case 'TREATMENT_DONE':
        action.payload.treatment = TraitementStatus.DONE
            return [...state];
        case 'TREATMENT_IMPOSSIBLE':
        action.payload.treatment = TraitementStatus.IMPOSSIBLE
            return [...state];

        case 'EDIT_MEDICAL_FOLDER':
        console.log(action.payload, "ACTION PAYLOAD EDIT");
        const medicalFolderIdWant = action.payload.frontId;
            axios.put(`/api/dossier/${medicalFolderIdWant}`, {
                frontId: action.payload.frontId,
                pathologie: action.payload.pathologie, 
                traitement: action.payload.traitement,
                observation: action.payload.observation,
                nextAppointement: action.payload.nextAppointement
            }).then(res => {
                
            }).catch(error => {
                console.log("EDIT MEDICAL FOLDER ERROR");
                console.log(error)
            });
            
            return [...state, ];

            /*
            return state.map(medicalFolder=>{
                if(medicalFolder.frontId !== medicalFolderIdWant){
                    return medicalFolder;
                }

                return action.payload;
            })*/
            
        default:
            return state;
    }
}





const store = createStore(combineReducers({patient:patientReducer, patientFolder:patientFolder}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store= store;


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
