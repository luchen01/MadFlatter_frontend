import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from './validate';
import renderField from './renderField';
import Slider from 'material-ui/Slider';

class QuestionnaireFifteenthPage extends React.Component {
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
        <p>Are you more inclined to eat in or out?</p>
        <div>
          <RadioButtonGroup name="shipSpeed">
            <RadioButton
              value="1"
              label="I'll mostly eat at home and make stuff here"
            />
            <RadioButton
              value="2"
              label="I'll tend to order UberEats but mostly cook at home"
            />
            <RadioButton
              value="3"
              label="I might go out once or twice a week, then eat at home"
            />
            <RadioButton
              value="4"
              label="I'll eat out 3-5 times a week or so, then eat at home the rest of the time"
            />
            <RadioButton
              value="5"
              label="Almost all of my meals are outside"
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
})(QuestionnaireFifteenthPage)