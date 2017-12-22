import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import IconButton from 'material-ui/IconButton';
import DatePicker from 'material-ui/DatePicker';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import axios from 'axios';
import Chat from './Chat';
import Map from './Map';
import {connect} from 'react-redux';
axios.defaults.withCredentials = true;

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
          regions: {},
          chipData: [
            {key: 0, label: 'I have a fluffy friend', icon: 'pets'},
            {key: 1, label: 'Laundry in unit plz', icon: 'local_laundry_service'},
            {key: 2, label: 'Gym in building', icon: 'fitness_center'},
            {key: 3, label: 'Wheelchair access', icon: 'accessible'},
            {key: 4, label: 'Furnished', icon: 'local_florist'}
          ]
        }
    }

    componentWillMount() {
      axios.post(`${process.env.URL}/myprofile`, {
        userid: this.props.match.params.userid
      })
      .then(resp=>{
        axios.get(`${process.env.URL}/regions?userid=${resp.data.profileUser.id}`)
        .then((response) => {
          let user = resp.data;
          if(user.profileUser.facebookId){
            user.profileUser.profileUrl = `https://graph.facebook.com/${user.profileUser.facebookId}/picture?type=large`
          }
          this.setState({
            currentUser: resp.data.currentUser,
            profileUser: resp.data.profileUser,
            regions: response.data.regions
          })
          console.log(response.data.regions);
        })
        console.log('inside component will mount', this.state);
      })
      .catch(err=>console.log(err))
    }

    render() {
      console.log('Rendering with regions:', this.state.regions);
        return(
      <div>
        <div className = "profileContainer row">
          <div className = "infocontainer col-md-3 col-xs-12">
            <h1>Roommate Profile </h1>
            <img className = "profileimg" src={this.state.profileUser.profileUrl}></img>
            <div>
              <FontIcon className="material-icons"> person </FontIcon>
              <h1>{this.state.profileUser.firstname} {this.state.profileUser.lastname}</h1><br/>
              <p>Hi! My name is {this.state.profileUser.firstname}.
              I have just moved to San Francisco, and I am looking for apartments and roommates!
              Feel free to message me for apartment and roommate info!</p>
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
                  <div style = {{padding: '10px', margin: '10px'}} className = "row">
                    <div className = "col-md-6 col-xs-12">
                    <div>
                    <FontIcon className="material-icons" style = {{margin: '5px'}}> hotel </FontIcon><br/>
                    <SelectField
                       floatingLabelText="Min Bedrooms"
                       value={"1"}
                     >
                       <MenuItem value={"1"} primaryText="1" />
                     </SelectField><br/>
                     <SelectField
                        floatingLabelText="Max Bedrooms"
                        value={"1"}
                        >
                        <MenuItem value={"1"} primaryText="1" />
                      </SelectField><br/>
                    </div>
                    <div>
                    <FontIcon className="material-icons"> wc </FontIcon><br/>
                    <SelectField
                       floatingLabelText="Min Bathrooms"
                       value={"1"}
                     >
                       <MenuItem value={"1"} primaryText="1" />
                     </SelectField><br/>
                     <SelectField
                        floatingLabelText="Max Bathrooms"
                        value={"1"}
                      >
                        <MenuItem value={"1"} primaryText="1" />
                      </SelectField><br/>
                      <FontIcon className="material-icons"> money </FontIcon><br/>
                      <SelectField
                         floatingLabelText="Min Price"
                         value={"1"}
                       >
                         <MenuItem value={"1"} primaryText="500" />
                       </SelectField><br/>
                       <SelectField
                          floatingLabelText="Max Price"
                          value={"1"}
                        >
                          <MenuItem value={"1"} primaryText="1500" />
                        </SelectField><br/>
                    </div>
                    {/* <div>
                      <FontIcon className="material-icons">date_range</FontIcon><br/>
                      <DatePicker
                        onChange={(event, date)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {dateAvailableStart: date}))}
                        autoOk={false}
                        floatingLabelText="Min Available Date"
                        // defaultDate={Date.now()}
                      />
                      <DatePicker
                        onChange={(event, date)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {dateAvailableEnd: date}))}
                        autoOk={false}
                        floatingLabelText="Max Available Date"
                        // defaultDate={Date.now()}
                      />
                    </div> */}
                    <div>
                      <FontIcon className="material-icons">playlist_add</FontIcon>Additional filters<br/>
                      {this.state.chipData.map(chip=>{
                        return(
                          <Chip key = {chip.key}
                                style={styles.chip}
                                onRequestDelete={()=>this.handleRequestDelete(chip.key)}>
                                <Avatar icon = {<FontIcon className = "material-icons">{chip.icon}</FontIcon>}/>
                                {chip.label}
                              </Chip>
                        )
                      })}
                    </div>
                  </div>
                  <div className = "container col-md-6 col-xs-12">
                    <h4>I'm looking for apartments in: </h4><br/>
                    Map
                    <Map noMarkers={true} roommateRegions={this.state.regions}/>
                  </div>
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
                  <AppBar
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    onLeftIconButtonClick = {()=>this.setState({chat: !this.state.chat})}
                    title={`Message with ${this.state.profileUser.username}`} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    toSaveRegions: (regions) => dispatch(saveRegions(regions)),
    toChangeFilters: (filters) => dispatch(changeFilters(filters))
  }
}

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
    filters: state.filters
  };
}

RoommateProfile = connect(mapStateToProps, mapDispatchToProps)(RoommateProfile);

export default RoommateProfile;
