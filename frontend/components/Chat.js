import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

var io = require('socket.io-client')

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: io('http://localhost:3030'),
            roomName: '',
            username: this.props.user.username,
        };
    }

    componentWillMount() {
        var viewer = this.props.user;
        var vieweeId = this.props.vieweeId;
        var newUser = this.props.user.username;
        var roomName;

        if(viewer.id < vieweeId){
          roomName = `${viewer.id}_${vieweeId}`
        }else{
          roomName = `${vieweeId}_${viewer.id}`
        }

        this.setState({
          roomName: roomName
        }, ()=>{
          // console.log('inside setState in chat', this.state);
            this.state.socket.on('connect', () => {
                this.state.socket.emit('username', newUser);
                this.state.socket.emit('room', roomName);
            });
        });

      console.log('connected');
      // console.log('this.state username', newUser);
      // console.log('this.state.roomName', roomName);

    this.state.socket.on('errorMessage', message => {
      console.log("errorMessage", message);
    });
  }

  render() {
    return (
      <div>
        <ChatRoom socket={this.state.socket} roomName = {this.state.roomName} username = {this.state.username} userid = {this.props.user.id}/>
      </div>
    );
  }
}

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.props.userid,
      message:{},
      messages:[],
      editStart: false,
      timeOutId: false,
      editMessage:''
    }
    this.updateMessage = this.updateMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentWillMount() {
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3000/getMessage', {
      roomId: this.props.roomName,
    })
    .then(resp=>{
      console.log('resp in component did mount', resp.data);
      // const currMessages = resp.data;
      this.setState({
        messages: resp.data
      });

      this.props.socket.on('message', ((message)=>
        {this.setState({
            message: {},
            messages: this.state.messages.concat(message)
        })}
    ));
    // console.log('this.state after will Mount', this.state);
      this.props.socket.on('edit', data =>{
        this.setState({
          editMessage: data.editStart ? `${data.username} is typing...`: ''
        })
      });
    })
    .catch(err=>console.log(err))
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.roomName !== nextProps.roomName){
      this.setState({
        messages:[]
      })
    }
  }


  updateMessage(event) {
    event.preventDefault();
    this.handleStartEdit(event);
    let timeStamp = new Date();
    this.setState({
      message: {timeStamp: timeStamp,
                user: {username: this.props.username},
                userid: this.props.userid,
                content: event.target.value}
    });
  }

  submitForm(event){
    event.preventDefault();
    var newMessage = this.state.message;
    this.props.socket.emit('edit', {editStart:false, username: this.props.username, roomName: this.props.roomName})
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:3000/newMessage', {
      roomId: this.props.roomName,
      timeStamp: this.state.message.timeStamp.toLocaleString(),
      content: this.state.message.content,
      // user: this.props.username,
      user_id: this.state.userid
    })
    .then((resp)=>{
      // console.log('resp in submit save message', resp);
      this.setState({
        message: {timeStamp:'',
                  user: {},
                  userid: '',
                  content: ''},
        messages:this.state.messages.concat(newMessage)
      },()=>{
        // console.log('this.state.message in submit form', this.state.message)
        console.log("this.state in submit form", this.state.messages);
        this.props.socket.emit('message',newMessage)})
    })
  }

  handleStartEdit(event){
    if(!this.state.timeOutId){
      this.props.socket.emit('edit',{editStart:true,username:this.props.username,roomName:this.props.roomName});
    }else{
      clearTimeout(this.state.timeOutId);
    };
    this.setState({
      timeOutId: setTimeout(()=>{this.props.socket.emit('edit',{ editStart:false, username: this.props.username, roomName: this.props.roomName});
        this.setState({timeOutId: false});},1000)
    },()=>{console.log(this.state.editStart, this.state.editMessage);});
  }

  render(){
    return (
      <div className = 'chatBox'>
        <ul className = 'chatHistory'>
        {this.state.messages.filter(message=>{return message.user}).map((message, index)=>(
          message.user.username === this.props.username ? <li style = {{display: 'block'}} key = {index}>
          <p className = "speechBubble">
            {message.timeStamp.toLocaleString()}<br/>
            {message.content}</p>
        </li> :
        <li style={{display: 'flex', flexDirection: 'row-reverse'}} key = {index}>
        <p className = "replyBubble">
          {message.timeStamp.toLocaleString()}<br/>
          {message.content}</p>
      </li>
      )
      )}
  </ul>
      <div className = 'typeMessageContainer'>{this.state.editMessage} </div>
      {/* <form onSubmit ={this.submitForm}> */}
        <TextField
          hintText="Type anything"
          onChange = {this.updateMessage}
          value = {this.state.message.content}/>  <br />
          {/* <input type = 'text' onChange = {this.updateMessage} value = {this.state.message.content} /> */}
        <RaisedButton
              primary={true}
              style={{margin: '20px'}}
              label = "Send"
              icon={<FontIcon className="material-icons"> message </FontIcon>}
              onClick = {this.submitForm}
                /><br/>
        {/* <input type = 'submit' value = 'Send'/> */}
        {/* </form> */}
      </div>
    )
  }

  }

export default Chat;
