import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from './validate';
import renderField from './renderField';
import Slider from 'material-ui/Slider';

class QuestionnaireEighteenthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 2
    }
  };

  handleSlider(event){
    this.setState({slider: event.target.value});
  }

  render() {
      const { handleSubmit, previousPage } = this.props;
      return (
      <form onSubmit={handleSubmit}>
        <p>How often do you work from home?</p>
        <div>
          <RadioButtonGroup name="shipSpeed">
            <RadioButton
              value="1"
              label="All of my work is at home"
            />
            <RadioButton
              value="2"
              label="It's about half and half with how I split up my work"
            />
            <RadioButton
              value="3"
              label="I occasionally take business calls or write up a report at home"
            />
            <RadioButton
              value="4"
              label="There may be a phone call or two that I take at home, but other than that I'm done for the day the moment I walk through that door"
            />
            <RadioButton
              value="5"
              label="I try to keep work as far away from the home as possible"
            />
          </RadioButtonGroup>
        </div>
        <div>
          <Slider
            step={1}
            min={1}
            max={3}
            value={this.state.slider}
            onChange={(e)=>this.handleSlider(e)}
            sliderStyle={{marginBottom: '6px'}}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>Not very important</p>
          <p>Somewhat important</p>
          <p>Very important</p>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>Previous</button>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
      );
  }
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(QuestionnaireEighteenthPage)
