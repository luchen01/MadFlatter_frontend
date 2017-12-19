import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from './validate';
import renderField from './renderField';
import Slider from 'material-ui/Slider';

class QuestionnaireTwelfthPage extends React.Component {
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
        <p>How frequently do you lock doors (aka how much do you value your privacy)?</p>
        <div>
          <RadioButtonGroup name="shipSpeed">
            <RadioButton
              value="1"
              label="I really value my privacy...if you see my door locked, please don't knock"
            />
            <RadioButton
              value="2"
              label="I tend to lock the door of any room I'm in, but I'll usually unlock if you knock"
            />
            <RadioButton
              value="3"
              label="My room door is usually closed but not locked, but I always lock the bathroom door"
            />
            <RadioButton
              value="4"
              label="My bedroom door tends to be unlocked/open and the bathroom door isn't locked – we just know to knock before entering"
            />
            <RadioButton
              value="5"
              label="You could use the bathroom while I'm showering and I wouldn't mind"
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
})(QuestionnaireTwelfthPage)
