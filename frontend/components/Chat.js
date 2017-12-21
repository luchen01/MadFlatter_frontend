import React from 'react';
import axios from 'axios';
var io = require('socket.io-client')

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: '',
            chatHistory: {},
            socket: io.connect(`${process.env.URL}`),
        };
        // this.state.socket.on('message', (msg) => {
        //   console.log(msg);
        // });

        // this.state.socket.on('update', message=>{
        //
        //   });
      }

componentDidMount(){
  // this.state.socket.on('connect', ()=>{
  this.state.socket.emit('join room', this.props.roomName);
  // });
}

  componentWillUnmount() {
    this.state.socket.emit('leave room', this.props.roomName);
  }

  // onChange(e){
  //   this.setState({
  //     chat: e.target.value
  //   });
  //   this.state.socket.emit('update', this.state.chat);
  // }

  onSubmit(){
    this.state.socket.emit('newMessage', this.state.chat);
  }

    render() {
        return(
      <div className = "container">
        Chat <br/>
        <div className="container">
          <ul id = "messageList">
            {this.state.chat}
          </ul>
        </div>
        <input className="inline typebox"
              id = 'textmsg'
              type="text"
              value = {this.state.chat}
              placeholder="Say Something..."
              onChange = {(e)=>this.setState({chat: e.target.value})}
            /><br/>
        <button
              className="inline submitbutton"
              id='submitbutton'
              onClick = {this.onSubmit.bind(this)}
              > Send</button>
      </div>
    );
    }
}

export default Chat;
