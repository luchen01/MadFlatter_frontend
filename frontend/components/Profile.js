import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-DOM';
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
      // console.log('this.props.match.params.userid',this.props.match.params.userid);
      axios.defaults.withCredentials = true;
      axios.post(`${process.env.URL}/myprofile`, {
        userid: this.props.match.params.userid
      })
      .then(resp=>{
        console.log('inside myprofile page', resp.data);
          this.setState(resp.data.profileUser);
      })
      .catch(err=>console.log(err));
    }

    saveEdit() {
        var sendingState = Object.assign({}, this.state, {userid: this.props.match.params.userid});
        axios.post(`${process.env.URL}/saveedit`, sendingState)
        .then(resp=>{
            console.log('resp.data', resp.data);
            if(resp.data) {
                this.setState({edit: false})
            };
            alert('Edit Saved!');
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
            <h2>{this.state.firstname}</h2>
            <h1>Description</h1>
          </div>
          <div className = "result container col-md-9 col-xs-12">
            <Tabs>
              <Tab label="Personal Information" >
                <div style = {{padding: '10px', margin: '10px', textAlign: 'center'}}>
                    <h2 style={styles.headline}>Profile Settings</h2>
                    <RaisedButton
                        primary={true}
                        style={{margin: '20px'}}
                        label = {this.state.edit ? "Save" : "Edit"}
                        onClick = {()=>this.saveEdit()}
                      /><br/>
                      <Link to="/questionnaire"><RaisedButton
                          primary={true}
                          style={{margin: '20px'}}
                          label = "Answer Questionnaire"
                        /></Link><br/>
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
                  <Link to='/mygroup/1'><RaisedButton
                      primary={true}
                      style={{margin: '20px'}}
                      label = "See my group"
                    /></Link><br/>
                    <Link to="/browseroommate"><RaisedButton
                        primary={true}
                        style={{margin: '20px'}}
                        label = "Browse more roommates"
                      /></Link><br/>
                  <RoommateMatch />
                </Tab>
                <Tab label="Apartment Matches" >
                  <Link to="/browseapartment"><RaisedButton
                      primary={true}
                      style={{margin: '20px'}}
                      label = "Browse more apartment"
                    /></Link><br/>
                    <ApartmentMatch />
                </Tab>
              </Tabs>
            </div>
      </div>
      </div>
        );
    }
}

/* Layout should include features like profile picture (could be imported from
Facebook and will be the default if the user logged in with Facebook), age,
compatibility ranking, and maybe some extra sections devoted to bio, perks of
being their roommate, etc. */

export default Profile;
