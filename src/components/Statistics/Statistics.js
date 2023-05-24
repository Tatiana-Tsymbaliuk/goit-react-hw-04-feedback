import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage})=> {
      return   <div>
        <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positiv Feedback: {positivePercentage}%</li>
        </ul></div>
}
 // static propTypes = {
                
        // }
export default Statistics;

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired
};