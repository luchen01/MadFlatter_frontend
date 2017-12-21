import React from 'react';
import {Link} from 'react-router-DOM';
import Divider from 'material-ui/Divider';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as colors from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {userData} from '../actions/index';

// const config = {
//   withCredentials: true,
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   },
// };

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login() {
      axios.defaults.withCredentials = true;
      axios.post(`${process.env.URL}/login`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response)=>{
        console.log("response after login", response.data.user.id, response);
        this.props.toUserData(response.data.user.id);
        this.props.history.push('/profile/' + response.data.user.id);
      })
      .catch((err)=>{
        console.log('Error: ', err);
        return null;
      });
    }

    render() {
        return(
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1>LOGIN</h1>
            <br/>
            <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                // backgroundColor = {String(colors.gray200)}
                label = "Login with Facebook"
                href = {`${process.env.URL}/auth/facebook`}
                // onClick={this.facebook.bind(this)}
              />
            <RaisedButton
                  primary={true}
                  backgroundColor = {colors.gray200}
                  style={{margin: '20px'}}
                  label = "Login with Google"
                  href = "http://madflatter.herokuapp.com/auth/google"
                  // onClick={this.google.bind(this)}
              />
              <Divider inset={true} />
            <TextField
              floatingLabelText="Username"
              type="text"
              value={this.state.username}
              onChange={(e)=>(this.setState({username: e.target.value}))}
            /><br />
            <TextField
              floatingLabelText="Password"
              type="password"
              value={this.state.password}
              onChange={(e)=>(this.setState({password: e.target.value}))}
            /><br />
            <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                label = "Login"
                onClick={this.login.bind(this)}
              />
            <Link to="/register">
              <div style={{padding: '10px'}}>Not a member? Click Here to Register</div>
            </Link>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toUserData: (userid) => dispatch(userData(userid)),
  }
}

const mapStateToProps = (state) => {
  return {

  };
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
