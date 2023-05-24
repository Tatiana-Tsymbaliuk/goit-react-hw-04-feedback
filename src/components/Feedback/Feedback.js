import {useState} from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification'


export default function Feedback(){
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)
  	
        const handleFeedback = e => {
                console.log(e.currentTarget.name);
       switch (e.currentTarget.name){
          case 'good':
        setGood(prevGood=>prevGood + 1)
        break;
         case 'neutral':
        setNeutral(prevNeutral=>prevNeutral + 1) 
        break;
        case 'bad': 
        setBad(prevBad=>prevBad + 1) 
        break;  
        default: return; 
       }
       
        } 
         
        const countTotalFeedback=()=>{
                return (good + neutral + bad)         
        }
        const countPositiveFeedbackPercentage=()=> {
                return (Math.round((good * 100) /countTotalFeedback())||0)               
        }
     
                const total = countTotalFeedback();
                const procent = countPositiveFeedbackPercentage();
                return (
                        <div>
                                <Section title="Please leave feedback">
                                <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleFeedback}></FeedbackOptions>
                                </Section>
                                {total===0 ? (<Notification message="There is no feedback"/>):
                                (<Section title="Statistics">
                                <Statistics
                                        good={good}
                                        neutral={neutral}
                                        bad={bad}
                                        total={total}
                                        positivePercentage={procent}>        
                                </Statistics>
                                </Section>)}
                        </div>
        );
                 }




// class Feedback extends React.Component{
//         state = {
//           good: 0,
//           neutral: 0,
//           bad: 0
//         }   	
//                 handleFeedback = e => {
//                        const name = e.currentTarget.name
//                        this.setState(prevState=>({
//                         [name]: prevState[name] + 1
//                        }))
//                       }     
//                 countTotalFeedback(){
//                         return (this.state.good + this.state.neutral + this.state.bad)         
//                 }
//                 countPositiveFeedbackPercentage() {
//                         return (Math.round((this.state.good * 100) / this.countTotalFeedback())||0)               
//                 }
//                render() {
//                         const array = Object.keys(this.state);
//                         const total = this.countTotalFeedback();
//                         const procent = this.countPositiveFeedbackPercentage();
//                         return (
//                                 <div>
//                                         <Section title="Please leave feedback">
//                                         <FeedbackOptions options={array} onLeaveFeedback={this.handleFeedback}></FeedbackOptions>
//                                         </Section>
//                                         {total===0 ? (<Notification message="There is no feedback"/>):
//                                         (<Section title="Statistics">
//                                         <Statistics
//                                                 good={this.state.good }
//                                                 neutral={this.state.neutral }
//                                                 bad={ this.state.bad}
//                                                 total={total}
//                                                 positivePercentage={procent}>        
//                                         </Statistics>
//                                         </Section>)}
//                                 </div>
//                 );
//                          }
//         }
        
//         export default Feedback;
        
        