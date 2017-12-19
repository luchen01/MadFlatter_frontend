import React from 'react';
import axios from 'axios';
import io from 'socket.io-client';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: '',
            chatHistory: {},
            socket: io('http://localhost:3000'),
        };
        this.state.socket.on('connect', function() {
          self.state.socket.emit('join room', self.state.params.docid);
        });

        this.state.socket.on('message', (msg) => {
          console.log(msg);
        });
        this.state.socket.on('update', (contentState, specs)=>{
          let currentSelection = this.state.editorState.getSelection();
          currentSelection = currentSelection.merge({
            anchorKey: specs.anchorKey,
            anchorOffset: specs.anchorOffset,
            focusKey: specs.focusKey,
            focusOffset: specs.focusOffset
          });
          this.setState({
            editorState: EditorState.forceSelection(EditorState.push(this.state.editorState, convertFromRaw(contentState)), currentSelection)
          });
        });
      }

  componentWillUnmount() {
    this.state.socket.emit('leave room', this.state.params.id);
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
              onChange = {(e)=>{this.setState({chat: e.target.value})}}
            /><br/>
        <button className="inline submitbutton" id='submitbutton'> Send</button>
      </div>
    );
    }
}

export default Chat;
