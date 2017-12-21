import React, {Component} from 'react';
import { Link } from 'react-router-DOM';
import {connect} from 'react-redux';
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
    axios.get(`${process.env.URL}/logout`)
  .then((response)=>{
      console.log("response after logout", response.data);
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
        <Link to={`/profile/${this.props.userid}`}>
          <MenuItem primaryText="Profile"
          /></Link>
        <Link to={`/messages/${this.props.userid}`}>
          <MenuItem primaryText="Message"
          /></Link>
        <Link to="/">
          <MenuItem primaryText="Sign out"
          onClick = {this.signout.bind(this)}
        /></Link>
      </IconMenu>
    );
  }
}

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        };
    }

    // componentWillMount() {
    //     axios.get(`${process.env.URL}/loggedin`)
    //   .then(response=>{
    //       console.log('response in title', response);
    //       if(response.data) {
    //           this.setState({logged: true});
    //       }
    //   })
    //   .catch(err=>console.log(err));
    // }

    render() {
        return (
      <div>
        <AppBar
          title="MadFlatter - Live the Way You Want!"
          iconElementLeft={<Link to="/"><IconButton><ActionHome /></IconButton></Link>}
          iconElementRight={this.props.userid ?
            <div>
            <Logged />
            <Login />
            </div> :
            <div style={{margin: '10px', padding: '10px'}}>
              <Login />
              <Register />
              <Logged />
            </div>}
        />
      </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    userid: state.userid
  };
}

Logged= connect(mapStateToProps)(Logged);
Title= connect(mapStateToProps)(Title);

export default Title;
