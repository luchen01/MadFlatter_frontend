import React from 'react';
// import Redirect from 'react-router';
import {Link} from 'react-router-DOM';
import axios from 'axios';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import * as colors from 'material-ui/styles/colors';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
            birthday: ''
        };
    }

    register() {
      // console.log(process.env.BASE_URL + "signup");
      axios.post(`${process.env.URL}/signup`, this.state)
      .then((response)=>{
        console.log('register response', response.data);
          this.props.history.push('/login')
      })
      .catch((err)=>{
          console.log('Error: ', err);
          return null;
      });
    }

    facebook() {
      console.log('facebook', process.env.BASE_URL + "auth/facebook");
        axios.get(process.env.BASE_URL + "auth/facebook")
      .then((response)=>{
          console.log('inside facebook auth', response);
          this.props.history.push('/login');
      })
      .catch((err)=>{
          console.log('Error: ', err);
          return null;
      });
    }

    google() {
      console.log('google', process.env.BASE_URL + "auth/google");
      axios.get(process.env.BASE_URL + "auth/google")
    .then((response)=>{
        console.log('inside google auth', response);
        this.props.history.push('/login');
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
            <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                label = "Register with Facebook"
                href = {`${process.env.URL}/auth/facebook`}
              />
            <RaisedButton
                  primary={true}
                  backgroundColor = {colors.gray200}
                  style={{margin: '20px'}}
                  label = "Register with Google"
                  href = {`${process.env.URL}/auth/google`}
              />
              <Divider/>
            <TextField
              floatingLabelText="First Name"
              type="text"
              value={this.state.firstname}
              onChange={(e)=>(this.setState({firstname: e.target.value}))}
            /><br />
            <TextField
              floatingLabelText="Last Name"
              type="text"
              value={this.state.lastname}
              onChange={(e)=>(this.setState({lastname: e.target.value}))}
            /><br />
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
            <TextField
              floatingLabelText="Email"
              type="text"
              value={this.state.email}
              onChange={(e)=>(this.setState({email: e.target.value}))}
            /><br />
            <TextField
              floatingLabelText="Birthday"
              type="date"
              value={this.state.birthday}
              onChange={(e)=>(this.setState({birthday: e.target.value}))}
            /><br />
            <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                label = "Register"
                onClick={this.register.bind(this)}
              />
            </div>
        );
    }
}

export default Register;
