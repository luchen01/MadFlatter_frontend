
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import listingReducer from './listingReducer';
import apartmentsReducer from './apartmentsReducer';
import questionnaireReducer from './questionnaireReducer';
import regionsReducer from './regions';
import filtersReducer from './filters';
import userReducer from './user';

const rootReducer = combineReducers({
  listing: listingReducer,
  apartments: apartmentsReducer,
  questionnaire: questionnaireReducer,
  regions: regionsReducer,
  filters: filtersReducer,
  userid: userReducer,
  routing
});

export default rootReducer;
