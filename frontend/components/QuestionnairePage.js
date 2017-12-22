import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from './validate';
import renderField from './renderField';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import {questionnaireResults} from '../actions/index';

class QuestionnairePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      others: this.props.answers[this.props.page].others,
      personal: this.props.answers[this.props.page].personal,
      question: this.props.page
    }
  };

  handleSlider(value){
    this.saveChanges(this.state.question, this.state.personal, value);
    // this.setState({others: value});
  }

  handleRadio(value){
    this.saveChanges(this.state.question, value, this.state.others);
    // this.setState({personal: value});
  }

  saveChanges(question, personal, others){
    var answers = Object.assign({}, this.props.answers);
    answers[question].personal = parseInt(personal);
    answers[question].others = parseInt(others);
    this.props.toQuestionnaireResults(answers);
  }

  componentWillReceiveProps(props){
    if(props.answers){
      this.setState({
        others: props.answers[this.props.page].others,
        personal: props.answers[this.props.page].personal,
      })
    }
  }

  render() {
      const {previousPage, nextPage} = this.props;
      return (
      <div>
        <p>{this.props.labels[0]}</p>
        <div>
          <RadioButtonGroup name="shipSpeed" valueSelected={this.state.personal} onChange={(e, v)=>{
            this.handleRadio(e.target.value)
          }}>
            <RadioButton
              value={1}
              label={this.props.labels[1]}
            />
            <RadioButton
              value={2}
              label={this.props.labels[2]}
            />
            <RadioButton
              value={3}
              label={this.props.labels[3]}
            />
            <RadioButton
              value={4}
              label={this.props.labels[4]}
            />
            <RadioButton
              value={5}
              label={this.props.labels[5]}
            />
          </RadioButtonGroup>
        </div>
        <div>
          <Slider
            step={1}
            min={1}
            max={3}
            value={this.state.others}
            onChange={(e, v)=>this.handleSlider(v)}
            sliderStyle={{marginBottom: '6px'}}
            // defaultValue={this.state.others}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>Not very important</p>
          <p>Somewhat important</p>
          <p>Very important</p>
        </div>
        <div>
          {(this.props.page > 1) ?
            <button type="button" className="previous" onClick={previousPage}>Previous</button> :
            null}
          {(this.props.page < 20) ?
            <button type="button" className="next" onClick={()=>(nextPage(this.state))}>Next Question</button> :
            null}
        </div>
      </div>
      );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    toQuestionnaireResults: (answers) => dispatch(questionnaireResults(answers)),
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.questionnaire,
  };
}

QuestionnairePage = connect(mapStateToProps, mapDispatchToProps)(QuestionnairePage);


export default QuestionnairePage
