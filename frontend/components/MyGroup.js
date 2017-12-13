import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ApartmentMatch from './ApartmentMatch';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import ApartmentDisplay from './ApartmentDisplay';

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
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

class ViewGroupMember extends React.Component{
    render() {
        return (
        <Tabs>
          <Tab label="Personal Information" >
              <div>
                <h2 style={styles.headline}>Profile Settings</h2>
                <RaisedButton
                    primary={true}
                    style={{margin: '20px'}}
                    label = "Edit"
                  /><br/>
              </div>
            </Tab>
            {/* <Tab label="Roommate Matches" >
              <RoommateMatch />
            </Tab> */}
          </Tabs>
        );
    }
}

class ViewApartmentMatch extends React.Component {
  render() {
    return(
      <Tabs>
        <Tab label="Apartment Matches">
          <ApartmentMatch />
        </Tab>
      </Tabs>
    )
  }
}

class MyGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            display: <ViewGroupMember />
        };
    }

    render() {
        return(
    <div>
      <h1>My Group</h1>
      <div className = "profileContainer row">
        <div className = "infoContainer col-md-3 col-xs-12">
          <Paper style={styles.paper}>
    <Menu>
      <h5>Roommate Options</h5>
      <MenuItem primaryText="View Group Members"
                leftIcon={<RemoveRedEye />}
                onClick = {(event)=>{this.setState({display: <ViewGroupMember />})}}/>
      <MenuItem primaryText="Add New Group Member"
                leftIcon={<PersonAdd />}
                onClick = {(event)=>{this.setState({display: <ViewGroupMember />})}}/>
      <MenuItem primaryText="View Matched Apartments"
                leftIcon={<ActionHome />}
                onClick = {(event)=>{this.setState({display: <ViewApartmentMatch />})}}/>
      <Divider />
      <h5>Apartment Options</h5>
      <MenuItem primaryText="Leave Group" leftIcon={<Delete />} />
    </Menu>
  </Paper>
  <Paper style={styles.paper}>
    <Menu>
      <MenuItem primaryText="Clear Config" />
      <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
      {/* <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
      <MenuItem
        primaryText="Workspace"
        rightIcon={
          <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
        }
      /> */}
      {/* <MenuItem primaryText="Paragraph" rightIcon={<b style={styles.rightIcon}>¶</b>} /> */}
      {/* <MenuItem primaryText="Section" rightIcon={<b style={styles.rightIcon}>§</b>} /> */}
    </Menu>
  </Paper>
          {/* <RaisedButton
              primary={true}
              style={{margin: '20px'}}
              label = "View Group Member"
            /><br/>
            <RaisedButton
                primary={true}
                style={{margin: '20px'}}
                label = "Message Group"
              /><br/> */}
        </div>
        <div className = "result container col-md-9 col-xs-12">
        {this.state.display}
      </div>
    </div>
  </div>
        );
    }
}

export default MyGroup;
