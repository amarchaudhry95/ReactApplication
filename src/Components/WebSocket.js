import React, { Component } from "react";
import { connect } from "react-redux";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { setShares } from "../Redux/Action/Actions";
import { WEB_SOCKET_URL, MAX_RETRY_COUNTS } from "../Components/Constants";

const client = new W3CWebSocket(WEB_SOCKET_URL);

class WebSocket extends Component {
  constructor(props) {
    super(props);
    this.state = { retryCounts: 0 };
  }

  componentWillMount() {
    console.log("yup");
    this.getConnection();
  }

  closeConnection = () => {
    console.log(this.state.retryCount);
    let count = this.state.retryCounts;
    if (count === MAX_RETRY_COUNTS) {
      alert("Max retry reached for connection to server, Please retry again after some time");
      return;
    }
    this.setState({ retryCounts: count++ });
    setTimeout(this.checkForConnection, Math.min(10000, 250 * count));
  };

  getConnection = () => {
    client.onopen = () => {};
    client.onmessage = message => {
      console.log(message.data);
      this.props.setShares(message.data);
    };
    client.onerror = err => {
      alert("Error in connection establishment");
      client.close();
    };

    client.onclose = e => {
      this.closeConnection();
    };
  };

  checkForConnection = () => {
    if (!client || client.readyState === W3CWebSocket.CLOSED) this.getConnection(); //check if websocket instance is closed, if so call `connect` function.
  };

  render() {
    return <div></div>;
  }
}

export default connect(
  null,
  { setShares }
)(WebSocket);
