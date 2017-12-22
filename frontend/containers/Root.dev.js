import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer.js';
import DevTools from './DevTools';
import { Route, HashRouter} from 'react-router-DOM';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles';
import Router from './Router';
import {fade} from '../../utils/colorManipulator';
import spacing from '../spacing';

const muiTheme = createMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: "#424242",
    primary2Color: "#BDBDBD",
    primary3Color: "#212121",
    accent1Color: "#9CCC65",
    accent2Color: "#757575",
    accent3Color: "#757575",
    textColor: "#212121",
    alternateTextColor: "#FAFAFA",
    canvasColor: "#FAFAFA",
    borderColor: "#FAFAFA",
    disabledColor: fade("#212121", 0.3),
    pickerHeaderColor: "#212121",
    clockCircleColor: fade("#212121", 0.07),
    shadowColor: "#212121",
  },
});

export default function Root({ store }) {
    return (
        <Provider store={store}>
          <HashRouter basename='/'>
            <MuiThemeProvider muiTheme = {muiTheme}>
              <Route path={"/"} component={Router}/>
            </MuiThemeProvider>
          </HashRouter>
            {/* <div>
                <AppContainer />
                <DevTools />
            </div> */}
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
