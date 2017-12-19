import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from './validate';
import renderField from './renderField';
import Slider from 'material-ui/Slider';

class QuestionnaireEighthPage extends React.Component {
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
        <p>Are you a neat freak?</p>
        <div>
          <RadioButtonGroup name="shipSpeed">
            <RadioButton
              value="1"
              label="There's a pile of laundry in the corner of the room with my name on it, so...as long as we can see the floor, we'll get along fine"
            />
            <RadioButton
              value="2"
              label="Life would be much easier if we chipped in for a maid to come at least once a week"
            />
            <RadioButton
              value="3"
              label="I just expect that my roommate maintains a similar level of cleanliness as I do"
            />
            <RadioButton
              value="4"
              label="I'll wash all my dishes immediately after eating and make my bed each morning"
            />
            <RadioButton
              value="5"
              label="I'm the kind of person who sorts my underwear by color and texture, so...perhaps"
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
})(QuestionnaireEighthPage)
