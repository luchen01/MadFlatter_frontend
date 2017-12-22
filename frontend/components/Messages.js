import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';
import Chat from './Chat';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Messages extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentUser: {},
        messages: [],
        open: false,
        chat: false,
      }
  }

  componentWillMount() {
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3000/myMessages', {
      userid: this.props.userid
    })
    .then(resp=>{
      this.setState({
        messages: resp.data.messages,
        currentUser: resp.data.currenUser
      })
      console.log('all messages', this.state);
    })
    .catch(err=>console.log(err))
  }

  render(){
    return(
  <div>
    <div className = "profileContainer row">
      <div>
    <List>
      <Subheader>Recent chats</Subheader>
      {this.state.messages.map((chatroom=>{
        return(
          <ListItem
            roomName = {chatroom.roomId}
            primaryText={`${chatroom.username}`}
            secondaryText = {chatroom.LastMsg}
            leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
            rightIcon={<CommunicationChatBubble />}
            onClick = {()=>this.setState({chat: chatroom.otherUser, open: !this.state.open})}
          />
        )
      }))}
    </List>
  </div>
  <div>
    {/* <Drawer width={400} openSecondary={true} open={this.state.chat} >
      {this.state.chat ?
        <div>
          <AppBar title={`Message with ${this.state.profileUser.username}`} />
          <Chat vieweeId = {this.props.match.params.userid} user = {this.state.currentUser}/>
        </div> :
        <div/>
      }
    </Drawer> */}
    { this.state.open ?
      <Chat vieweeId = {this.state.chat} user = {this.state.currentUser}/> : <div/>
    }
  </div>
  </div>
  </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userid: state.userid
  };
}

Messages = connect(mapStateToProps)(Messages);

export default Messages;
