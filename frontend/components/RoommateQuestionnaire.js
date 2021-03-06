import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true;
// import PropTypes from 'prop-types';

import {questionnaireResults} from '../actions/index';
import QuestionnairePage from './QuestionnairePage';

const questionLabels=[
  ["Do you like to have friends over or keep the party outside?", "Way more inclined to have friends over", "More inclined to have friends over", "Indifferent", "More inclined to keep the party outside", "Way more inclined to keep the party outside"],
  ["Do you tolerate smoking/vaping?", "Very Tolerant", "Tolerant", "Indifferent", "Intolerant", "Very Intolerant"],
  ["How often do you drink at home?", "Rarely/never", "Monthly/Bi-Monthly", "Weekly/Bi-Weekly", "2-3 times a week", "Daily"],
  ["Are you more of a night owl or a morning person?", "Total night owl", "Mostly a night owl, sometimes a morning person", "A little bit of both", "Mostly a morning person, sometimes a night owl", "Total morning person"],
  ["Are you more introverted or extroverted?", "Mostly introverted", "Somewhat introverted", "It depends", "Somewhat extroverted", "Mostly extroverted"],
  ["Are you a heavy or light sleeper?", "I could sleep through an earthquake", "You could play music and I probably wouldn't wake up", "I'm a normal sleeper, I guess", "Sometimes, I need a face mask to make sure I stay asleep", "The sound of you taking this quiz might wake me up"],
  ["How often do you travel (aka how often will you be home?)", "I'm definitely more of a homebody", "I travel maybe once or twice a year", "I probably go on a trip every 2-3 months", "You can expect to see me gone for a weekend every month or so", "I travel regularly, either for work or pleasure"],
  ["On a scale of 1-5, with 1 being messy and 5 being a neat freak, what would you say you are?", "There's a pile of laundry in the corner of the room with my name on it, so...as long as we can see the floor, we'll get along fine", "Life would be much easier if we chipped in for a maid to come at least once a week", "I just expect that my roommate maintains a similar level of cleanliness as I do","I'll wash all my dishes immediately after eating and make my bed each morning", "I'm the kind of person who sorts my underwear by color and texture, so...perhaps"],
  ["On a scale of 1-5, how modest are you?", "I tend to be a nudist at home and would hope my roommate would be comfortable with that", "Not gonna lie...me on the couch in my boxers while watching Netflix may not be an uncommon sight in our apartment", "My roommate may catch me in a towel going from the bathroom to my bedroom from time to time", "I'll probably wear a shirt to go swimming but wouldn't mind everyone else dressing down around me", "I was the kid in middle school gym class who would get dressed in the bathroom stall"],
  ["Do you like the apartment temperature more on the chilly or warm side?", "The apartment should be as cold as receiving a text that just says 'K.'", "Wearing a long-sleeve shirt indoors never hurt anyone", "Room temperature is just fine...it really depends on the weather", "It'd be nice to be able to wear a t-shirt and shorts at home", "I like my apartment to feel like I'm at an indoor water park"],
  ["How do you feel about sharing stuff, e.g. a Netflix subscription, groceries, or a printer? Sharing is caring, or every man for himself?", "Would prefer that my things are used just by me", "I'd be fine with us sharing clean utensils, dishes, and towels, but everything else should probably be individually used", "Sharing a Netflix/Hulu account and other small things (within reason) would be cool", "I'd be very comfortable sharing food or lending you something of mine when you ask for it","What's mine is yours – I'd be glad to share outfits (and secrets)"],
  ["How frequently do you lock your room door (aka how much do you value your privacy)?", "I really value my privacy...if you see my door locked, please don't knock", "I tend to lock the door of any room I'm in, but I'll usually unlock if you knock", "My room door is usually closed but not locked, but I always lock the bathroom door", "My bedroom door tends to be unlocked/open and the bathroom door isn't locked – we just know to knock before entering", "You could use the bathroom while I'm showering and I wouldn't mind"],
  ["What’s your romantic situation?", "#TeamSingle and ready for a Pringle", "I get around...and have a few serious options I'm considering", "Been dating someone for less than three months", "Been consistently dating someone for longer than three months, i.e. in a relationship #FacebookOfficial", "In a long-term relationship, e.g. marriage"],
  ["How do you feel about overnight guests?", "I expect to be notified at least a week in advance", "It's fine, just let me know a day or two beforehand to prepare", "Perfectly fine, just keep the noise at a respectful level", "Sounds cool, and let them know I don't bite", "If needed, I'll gladly sleep on the couch and let them have my bed for the night"],
  ["Are you more inclined to eat in or out?", "I'll mostly eat at home and make stuff here", "I'll tend to order UberEats but mostly cook at home", "I might go out once or twice a week, then eat at home", "I'll eat out 3-5 times a week or so, then eat at home the rest of the time", "Almost all of my meals are outside"],
  ["Are you comfortable living with a person of a different sexual orientation?", "Absolutely uncomfortable", "It's not a lifestyle I'm familiar with, but I'm tolerant of it", "Indifferent/Accepting", "I'm an ally, so I would be as comfortable as I would be with a straight roommate", "I actually prefer it *hangs up LGBTQ+ flag*"],
  ["How long do you anticipate staying?", "3-6 months", "6 months to a year", "1-2 years", "3-5 years", "Til I die"],
  ["Do you work from home?", "All of my work is at home", "It's about half and half with how I split up my work", "I occasionally take business calls or write up a report at home", "There may be a phone call or two that I take at home, but other than that I'm done for the day the moment I walk through that door", "I try to keep work as far away from the home as possible"],
  ["Would you consider yourself more liberal or conservative?", "Very conservative", "Somewhat conservative", "I don't care as long as they aren't crazy", "Somewhat liberal", "Very liberal"],
  ["On a scale of 1-5, how physically active is your lifestyle?", "What's a rep?", "Fitness is nice, just don't try to get me to join you on a Saturday morning hike", "I try to get my daily 10,000 steps in, y'know how it is", "I'll hit the gym probably 3 times a week", "That tub of protein powder sitting on top of the fridge? *points to self* Mine."]
]


class RoommateQuestionnaire extends Component {
  constructor(props) {
    super(props)
    // this.nextPage = ()=>(this.nextPage())
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage(answer) {
    console.log('Inside nextPage');
    console.log(this.props.answers);
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  componentDidMount(){
    axios.post(`${process.env.URL}/questionnaire`, {answers: this.props.answers, retrieve: true})
    .then((response) => {
      console.log(response.data);
      if(response.data.answers) this.props.toQuestionnaireResults(response.data.answers)
    })
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        <div style = {{textAlign: 'center'}}>
          Question: {page}
        </div>
        <div>
          {questionLabels.map((labels, index) => {
              return (
                page === (index + 1) &&
                <QuestionnairePage
                  page={page}
                  labels={labels}
                  previousPage={this.previousPage}
                  nextPage={(answer)=>(this.nextPage(answer))}
                />)
          })}
      </div>
    </div>
    )
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

RoommateQuestionnaire = connect(mapStateToProps, mapDispatchToProps)(RoommateQuestionnaire);


export default RoommateQuestionnaire
