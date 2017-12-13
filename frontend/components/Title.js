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
import ActionHome from 'material-ui/svg-icons/action/home';
import axios from 'axios';

class Login extends Component {
    render() {
        return (
          <Link to="/login" >Login</Link>
        );
    }
}

class Register extends Component {
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

    componentWillMount() {
        axios.get('http://localhost:3000/loggedin')
      .then(response=>{
          console.log('response in title', response);
          if(response.data) {
              this.setState({logged: true});
          }
      })
      .catch(err=>console.log(err));
    }

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
          title="MadFlatter - Live the Way You Want!"
          iconElementLeft={<IconButton
            href = "http://localhost:3030/#/"> <ActionHome /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <div style={{margin: '10px', padding: '10px'}}><Login />  <Register /></div>}
        />
      </div>
        );
    }
}

export default AppBarExampleComposition;
