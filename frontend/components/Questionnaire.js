import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import RoommateQuestionnaire from './RoommateQuestionnaire';
import ApartmentQuestionnaire from './ApartmentQuestionnaire';
import {connect} from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true;

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0
    }
  }

  handleNext() {
    const {stepIndex} = this.state;
    axios.post(`${process.env.URL}/questionnaire`, {answers: this.props.answers})
    .then((response) => {
      console.log('Response message:', response.data.message);
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      });
    })
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <RoommateQuestionnaire />
        );
      case 1:
        return (
          <ApartmentQuestionnaire />
        );
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Roommate Questionnaire</StepLabel>
          </Step>
          <Step>
            <StepLabel>Apartment Questionnaire</StepLabel>
          </Step>
          <Step>
            <StepLabel>See your matches!</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12, textAlign: 'center'}}>
                <FlatButton
                  label="Last Section"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev.bind(this)}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Save and Continue'}
                  primary={true}
                  onClick={this.handleNext.bind(this)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.questionnaire,
  };
}

Questionnaire = connect(mapStateToProps, mapDispatchToProps)(Questionnaire);


export default Questionnaire;
