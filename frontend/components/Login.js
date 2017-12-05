import React from 'react';
// import Redirect from 'react-router';
import {Link} from 'react-router-DOM';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    login() {
        axios.post(process.env.BASE_URL + "login", {
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
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={(e)=>(this.setState({username: e.target.value}))}/>
            <br/>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={(e)=>(this.setState({password: e.target.value}))}/>
            <div style={{margin: '20px'}}>
              <button onClick={this.login.bind(this)}>
                Login
              </button>
            </div>
            <Link to="/register">
              <div style={{padding: '10px'}}>Not a member? Click Here to Register</div>
            </Link>
            {/* <Route path="/editor" component = {Main}/> */}
          </div>
        );
    }
}

export default Login;
