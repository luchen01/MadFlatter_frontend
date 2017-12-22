import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RoommateMatch from './RoommateMatch';
import ApartmentMatch from './ApartmentMatch';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import axios from 'axios';
import Chat from './Chat';

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

class RoommateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentUser: {},
          profileUser: {},
          chat: false,
        }
    }

    componentWillMount() {
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3000/myprofile', {
        userid: this.props.match.params.userid
      })
      .then(resp=>{
        this.setState({
          currentUser: resp.data.currentUser,
          profileUser: resp.data.profileUser
        })
        console.log('inside component will mount', this.state);
      })
      .catch(err=>console.log(err))
    }

    render() {
        return(
      <div>
        <div className = "profileContainer row">
          <div className = "infocontainer col-md-3 col-xs-12">
            <h1>{this.state.profileUser.firstname}</h1>
            <img className = "profileimg" src="http://www.pawderosa.com/images/puppies.jpg"></img>
            <div>
              <FontIcon className="material-icons"> person </FontIcon>
              <h1>I am {this.state.profileUser.firstname}!</h1><br/>
              {/* <FontIcon className="material-icons"> cake </FontIcon>
              <h1>Birthday: {this.state.profileUser.birthday}</h1> */}
            </div>
            <br/>
            <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                label = "Message"
                icon={<FontIcon className="material-icons"> message </FontIcon>}
                onClick = {()=>this.setState({chat: !this.state.chat})}
                  /><br/>
            <RaisedButton
                  primary={true}
                  style={{margin: '20px'}}
                  label = "Favorite"
                  icon = {<StarBorder />}
                /><br/>
          </div>
          <div className = "result container col-md-9 col-xs-12">
            <Tabs>
              <Tab label="About Me" >
                  <div style = {{padding: '10px', margin: '10px'}}>
                    <h4>Hey there! I am {this.state.profileUser.firstname}.</h4><br/>
                    <h4>I'm looking for apartments in: </h4><br/>
                    <h4>My budget range is:</h4>
                  </div>
                </Tab>
                {/* {this.state.chat ?
                  <Tab label = "Chat" >
                  <Chat vieweeId = {this.props.match.params.userid} user = {this.state.currentUser}/>
                  </Tab> : <div/>
                } */}
              </Tabs>
            </div>
            <Drawer width={400} openSecondary={true} open={this.state.chat} >
              {this.state.chat ?
                <div>
                  <AppBar title={`Message with ${this.state.profileUser.username}`} />
                  <Chat vieweeId = {this.props.match.params.userid} user = {this.state.currentUser}/>
                </div> :
                <div/>
              }
            </Drawer>
      </div>
      </div>
        );
    }
}

export default RoommateProfile;
