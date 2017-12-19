import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter} from 'react-router-DOM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './Router';

export default function Root({ store }) {
    return (
      <Provider store={store}>
        <HashRouter basename="/">
          <MuiThemeProvider>
            <Route path={"/"} component={Router}/>
          </MuiThemeProvider>
        </HashRouter>
      </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
