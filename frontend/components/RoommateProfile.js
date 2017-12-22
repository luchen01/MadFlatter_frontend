import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RoommateMatch from './RoommateMatch';
import ApartmentMatch from './ApartmentMatch';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';
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
      // console.log('componentwillmount');
      // console.log(this.props.match.params.userid);
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3000/myprofile', {
        userid: this.props.match.params.userid
      })
      .then(resp=>{
        console.log("response in roommateprofile page", resp.data);
        this.setState({
          currentUser: resp.data.currentUser,
          profileUser: resp.data.profileUser
        })
        console.log('setState in roommateProfile', this.state);
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
              <h1>Basic Info</h1>

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
                {this.state.chat ?
                  <Tab label = "Chat" >
                  <Chat vieweeId = {this.props.match.params.userid} user = {this.state.currentUser}/>
                  </Tab> : <div/>
                }
              <Tab label="About Me" >
                  <div>
                    Hey there! I am {this.state.profileUser.firstname}.
                    <p>I'm looking for apartments in: </p><br/>
                    <p>My budget range is:</p>
                  </div>
                </Tab>
              </Tabs>

            </div>

      </div>
      </div>
        );
    }
}

export default RoommateProfile;
