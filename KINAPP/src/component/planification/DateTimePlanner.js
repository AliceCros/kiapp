import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe'
import '../style/login.css';
import '../style/planner.css'

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
});

class DateAndTimePlanner extends React.Component {


  handleSubmit = (oEvt) => {
    oEvt.preventDefault(); 
    console.log(oEvt, "EVENT");
 };  
  
  render(){
    return (
        
        <div>   
          <Iframe url="https://calendar.google.com/calendar/embed?src=mathkala%40gmail.com&ctz=Europe%2FParis"
          height="250px"
          id="googleIdPlanner"
          display="initial"
          position="relative"
          allowFullScreen/>
        </div> 
    );
  }
  
  
}

DateAndTimePlanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePlanner);