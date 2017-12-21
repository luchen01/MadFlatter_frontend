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
          <Link to="/register" >Register</Link>
        );
    }
}


class Logged extends React.Component {
  constructor(props) {
      super(props);
  }

  signout() {
    axios.get("http://localhost:3000/logout")
  .then((response)=>{
      // console.log("response after login", response.data);
      this.props.history.push('/');
  })
  .catch((err)=>{
      console.log('Error: ', err);
      return null;
  });
  }

  render(){
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out"
          onClick = {this.signout.bind(this)}
        />
      </IconMenu>
    );
  }
}

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

    render() {
        return (
      <div>
        <AppBar
          title="MadFlatter - Live the Way You Want!"
          iconElementLeft={<IconButton
            href = "http://localhost:3030/"> <ActionHome /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <div style={{margin: '10px', padding: '10px'}}><Login />  <Register /></div>}
        />
      </div>
        );
    }
}

export default AppBarExampleComposition;
