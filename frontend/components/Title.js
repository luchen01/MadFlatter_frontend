import React, {Component} from 'react';
import { Link } from 'react-router-DOM';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
    // static muiName = 'FlatButton';

    render() {
        return (
          <Link to="/login" >Login</Link>
      // <FlatButton {...this.props} label="Login" />
        );
    }
}

class Register extends Component {
    // static muiName = 'FlatButton';

    render() {
        return (
      <Link to="/Register" >Register</Link>
        );
    }
}


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

// Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        };
    }

  handleChange(event, logged){
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        {/* <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        /> */}
        <AppBar
          title="MadFlatter"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <div style={{margin: '10px'}}><Login /><Register /></div>}
        />
      </div>
    );
  }
}

export default AppBarExampleComposition;
