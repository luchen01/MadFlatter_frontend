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
          edit: false
        };
    }

    componentWillMount() {
        axios.post('http://localhost:3000/myprofile', {
          userid: this.props.match.params.userid
        })
        .then(resp=>{
            this.setState(resp.data);
        })
        .catch(err=>console.log(err));
    }

    saveEdit() {
        var sendingState = Object.assign({}, this.state, {userid: this.props.match.params.userid});
        axios.post('http://localhost:3000/saveedit', sendingState)
      .then(resp=>{
          console.log('resp.data', resp.data);
          if(resp.data) {
              this.setState({edit: false})
          }
      })
      .catch(err=>console.log(err));
    }

    render() {
        return(
      <div>
        <div className = "profileContainer row">
          <div className = "infocontainer col-md-3 col-xs-12">
            <h1>Profile Page</h1>
            <img className = "profileimg" src="https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg"></img>
            <h2>Welcome {this.state.firstname} !</h2>
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
                        label = {this.state.edit ? "Save" : "Edit"}
                        onClick = {()=>this.saveEdit()}
                      /><br/>
                      <TextField
                        floatingLabelText="First Name"
                        type="text"
                        value={this.state.firstname}
                        onChange={(e)=>(this.setState({firstname: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Last Name"
                        type="text"
                        value={this.state.lastname}
                        onChange={(e)=>(this.setState({lastname: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Username"
                        type="text"
                        value={this.state.username}
                        onChange={(e)=>(this.setState({username: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Email"
                        type="text"
                        value={this.state.email}
                        onChange={(e)=>(this.setState({email: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                      <TextField
                        floatingLabelText="Birthday"
                        type="date"
                        value={this.state.birthday}
                        onChange={(e)=>(this.setState({birthday: e.target.value}))}
                        // errorText="This field is required"
                      /><br />
                  </div>
                </Tab>
                <Tab label="Roommate Matches" >
                  <RaisedButton
                      primary={true}
                      style={{margin: '20px'}}
                      label = "See my group"
                      href="http://localhost:3030/#/mygroup/1"
                    /><br/>
                    <RaisedButton
                        primary={true}
                        style={{margin: '20px'}}
                        label = "Browse more roommates"
                        href="http://localhost:3030/#/browseroommate"
                      /><br/>
                  <RoommateMatch />
                </Tab>
                <Tab label="Apartment Matches" >
                  <RaisedButton
                      primary={true}
                      style={{margin: '20px'}}
                      label = "Browse more apartment"
                      href="http://localhost:3030/#/browseapartment"
                    /><br/>
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
