import React from 'react';
// import Redirect from 'react-router';
import {Link} from 'react-router-DOM';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    register() {
      axios.post(process.env.BASE_URL + "signup", {
          username: this.state.username,
          password: this.state.password
      })
      .then((response)=>{
          this.props.history.push('/login')
      })
      .catch((err)=>{
          console.log('Error: ', err);
          return null;
      });
    }

    render() {
        return(
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h1>REGISTER</h1>
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
              <button onClick={this.register.bind(this)}>
                Register
              </button>
            </div>
          </div>
        );
    }
}

export default Register;
