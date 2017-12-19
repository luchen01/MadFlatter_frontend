
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import listingReducer from './listingReducer';
import apartmentsReducer from './apartmentsReducer';

const rootReducer = combineReducers({
  listing: listingReducer,
  apartments: apartmentsReducer,
  routing
});

export default rootReducer;
