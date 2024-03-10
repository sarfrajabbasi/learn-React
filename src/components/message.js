import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcom visitor",
    };
  }

changeMessage(){
    this.setState({
        message:'thank you for subscribes:)'
    })
}

  render() {
    return (
      <div>
        
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subscribe Me!</button>
      </div>
    );
  }
}

export default Message;
