import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionnaireFirstPage from './QuestionnaireFirstPage';
import QuestionnaireSecondPage from './QuestionnaireSecondPage';
import QuestionnaireThirdPage from './QuestionnaireThirdPage';
import QuestionnaireFourthPage from './QuestionnaireFourthPage';
import QuestionnaireFifthPage from './QuestionnaireFifthPage';
import QuestionnaireSixthPage from './QuestionnaireSixthPage';
import QuestionnaireSeventhPage from './QuestionnaireSeventhPage';
import QuestionnaireEighthPage from './QuestionnaireEighthPage';
import QuestionnaireNinthPage from './QuestionnaireNinthPage';
import QuestionnaireTenthPage from './QuestionnaireTenthPage';
import QuestionnaireEleventhPage from './QuestionnaireEleventhPage';
import QuestionnaireTwelfthPage from './QuestionnaireTwelfthPage';
import QuestionnaireThirteenthPage from './QuestionnaireThirteenthPage';
import QuestionnaireFourteenthPage from './QuestionnaireFourteenthPage';
import QuestionnaireFifteenthPage from './QuestionnaireFifteenthPage';
import QuestionnaireSixteenthPage from './QuestionnaireSixteenthPage';
import QuestionnaireSeventeenthPage from './QuestionnaireSeventeenthPage';
import QuestionnaireEighteenthPage from './QuestionnaireEighteenthPage';
import QuestionnaireNineteenthPage from './QuestionnaireNineteenthPage';
import QuestionnaireTwentiethPage from './QuestionnaireTwentiethPage';


class RoommateQuestionnaire extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
      <div style = {{textAlign: 'center'}}>
        Question: {page}
      </div>
      <div>
        {page === 1 && <QuestionnaireFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <QuestionnaireSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <QuestionnaireThirdPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 4 && <QuestionnaireFourthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 5 && <QuestionnaireFifthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 6 && <QuestionnaireSixthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 7 && <QuestionnaireSeventhPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 8 && <QuestionnaireEighthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 9 && <QuestionnaireNinthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 10 && <QuestionnaireTenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 11 && <QuestionnaireEleventhPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 12 && <QuestionnaireTwelfthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 13 && <QuestionnaireThirteenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 14 && <QuestionnaireFourteenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 15 && <QuestionnaireFifteenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 16 && <QuestionnaireSixteenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 17 && <QuestionnaireSeventeenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 18 && <QuestionnaireEighteenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 19 && <QuestionnaireNineteenthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 20 && <QuestionnaireTwentiethPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    </div>
    )
  }
}

RoommateQuestionnaire.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default RoommateQuestionnaire
