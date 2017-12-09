import React from 'react';
// import Redirect from 'react-router';
import {Link} from 'react-router-DOM';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login() {
        axios.post("http://localhost:3000/login", {
            username: this.state.username,
            password: this.state.password
        })
      .then((response)=>{
          console.log("response after login", response.data);
          this.props.history.push('/profile/' + response.data.id);
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
            <TextField
              floatingLabelText="Username"
              type="text"
              value={this.state.username}
              onChange={(e)=>(this.setState({username: e.target.value}))}
              // errorText="This field is required"
            /><br />
            <TextField
              floatingLabelText="Password"
              type="password"
              value={this.state.password}
              onChange={(e)=>(this.setState({password: e.target.value}))}
              // errorText="This field is required"
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
            {/* <Route path="/editor" component = {Main}/> */}
          </div>
        );
    }
}

export default Login;
