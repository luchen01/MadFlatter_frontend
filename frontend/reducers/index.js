
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import listingReducer from './listingReducer';
import apartmentsReducer from './apartmentsReducer';
import questionnaireReducer from './questionnaireReducer';

const rootReducer = combineReducers({
  listing: listingReducer,
  apartments: apartmentsReducer,
  questionnaire: questionnaireReducer,
  routing
});

export default rootReducer;
