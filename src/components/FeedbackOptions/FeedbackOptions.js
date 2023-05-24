import React from 'react';
import './FeedbackOptions.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
     
return (<div>{options.map(option=>(      
        <button 
        type="button"
         name = {option}
        key={option}
        onClick={onLeaveFeedback}
        className="FeedbackBtn">{option}</button>      
))}</div>)
}
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};
export default FeedbackOptions;


