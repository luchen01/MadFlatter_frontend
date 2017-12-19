import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from './validate';
import renderField from './renderField';
import Slider from 'material-ui/Slider';

class QuestionnaireFirstPage extends React.Component {
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
        <p>Do you like to have friends over or keep the party outside?</p>
        <div>
          <RadioButtonGroup name="shipSpeed">
            <RadioButton
              value="1"
              label="Way more inclined to have friends over"
            />
            <RadioButton
              value="2"
              label="More inclined to have friends over"
            />
            <RadioButton
              value="3"
              label="Indifferent"
            />
            <RadioButton
              value="4"
              label="More inclined to keep the party outside"
            />
            <RadioButton
              value="5"
              label="Way more inclined to keep the party outside"
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
})(QuestionnaireFirstPage)
