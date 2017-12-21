import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class Messages extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        messages: []
      }
  }

  // componentWillMount() {
  //   axios.defaults.withCredentials = true;
  //   axios.post('http://localhost:3000/myMessages', {
  //     userid: this.props.userid
  //   })
  //   .then(resp=>{
  //     this.setState({
  //       messages: resp.data
  //     })
  //   })
  //   .catch(err=>console.log(err))
  // }

  render(){
    return(
  <div>
    <div className = "profileContainer row">
    <List>
      <Subheader>Recent chats</Subheader>
      {this.state.messages.map((chatroom=>{
        return(
          <ListItem
            primaryText="Brendan Lim"
            leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
            rightIcon={<CommunicationChatBubble />}
          />
        )
      }))}
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Kerem Suer"
        leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Raquel Parrado"
        leftAvatar={<Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
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
