import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RoommateMatch from './RoommateMatch';
import ApartmentMatch from './ApartmentMatch';
import axios from 'axios';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  toggle: {
    marginBottom: 16,
  },
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {}
        }
    }

    componentWillMount() {
      console.log('componentwillmount');
      console.log(this.props.match.params.userid);
      axios.post('http://localhost:3000/myprofile', {
        userid: this.props.match.params.userid
      })
      .then(resp=>{
        console.log("response in profile page", resp.data);
        this.setState({
          user: resp.data
        })
      })
      .catch(err=>console.log(err))
    }

    render() {
        return(
      <div>
        <div className = "profileContainer row">
          <div className = "infocontainer col-md-3 col-xs-12">
            <h1>Profile Page</h1>
            <img className = "profileimg" src="https://i.pinimg.com/736x/48/bd/3f/48bd3f6e928d7cb4b8d499cb0f96b8a8--despicable-minions-funny-minion.jpg"></img>
            <h1>username</h1>
            <h1>Description</h1>
          </div>
          <div className = "result container col-md-9 col-xs-12">
            <Tabs>
              <Tab label="Personal Information" >
                  <div>
                    <h2 style={styles.headline}>Profile Settings</h2>
                    <RaisedButton
                        primary={true}
                        style={{margin: '20px'}}
                        label = "Edit"
                      /><br/>
                      <TextField
                        floatingLabelText="First Name"
                        type="text"
                        value={this.state.user.firstname}
                        // onChange={(e)=>(this.setState({firstname: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Last Name"
                        type="text"
                        value={this.state.user.lastname}
                        // onChange={(e)=>(this.setState({lastname: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Username"
                        type="text"
                        value={this.state.user.username}
                        // onChange={(e)=>(this.setState({username: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Email"
                        type="text"
                        value={this.state.user.email}
                        // onChange={(e)=>(this.setState({email: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Birthday"
                        type="date"
                        value={this.state.user.birthday}
                        // onChange={(e)=>(this.setState({birthday: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                  </div>
                </Tab>
                <Tab label="Roommate Matches" >
                  <RoommateMatch />
                </Tab>
                <Tab label="Apartment Matches" >
                    <ApartmentMatch />
                </Tab>
              </Tabs>
            </div>
      </div>
      </div>
        );
    }
}

export default Profile;
