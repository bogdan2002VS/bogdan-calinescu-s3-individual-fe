import React, { useEffect, useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import './ChatRoom.css';

var stompClient = null;
const ChatRoom = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });
  const [warning, setWarning] = useState('');

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
    if (warning) {
      setWarning('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (userData.username.trim() !== '' && userData.message.trim() !== '') {
        event.key === 'Enter' && tab === 'CHATROOM' ? sendValue() : sendPrivateValue();
      }
    }
  };

  const sendValue = () => {
    if (userData.message.trim() === '') {
      setWarning('Please enter a message');
      return;
    }

    var chatMessage = {
      senderName: userData.username,
      message: userData.message,
      status: "MESSAGE",
    };

    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    setUserData({ ...userData, message: "" });
  };

  const sendPrivateValue = () => {
    if (userData.message.trim() === '') {
      setWarning('Please enter a message');
      return;
    }

    var chatMessage = {
      senderName: userData.username,
      receiverName: tab,
      message: userData.message,
      status: "MESSAGE",
    };

    if (userData.username !== tab) {
      privateChats.get(tab).push(chatMessage);
      setPrivateChats(new Map(privateChats));
    }

    stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
    setUserData({ ...userData, message: "" });
  };

  const handleUsername = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, username: value });
    if (warning) {
      setWarning('');
    }
  };

  const registerUser = () => {
    if (userData.username.trim() === '') {
      setWarning('Please enter a valid username');
      return;
    }
    connect();
  };

  return (
    <div className="container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="member-list">
            <ul>
              <li
                onClick={() => {
                  setTab("CHATROOM");
                }}
                className={`member ${tab === "CHATROOM" && "active"}`}
              >
                Chatroom
              </li>
              {[...privateChats.keys()].map((name, index) => (
                <li
                  onClick={() => {
                    setTab(name);
                  }}
                  className={`member ${tab === name && "active"}`}
                  key={index}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {tab === "CHATROOM" && (
            <div className="chat-content">
              <ul className="chat-messages">
                {publicChats.map((chat, index) => (
                  <li
                    className={`message ${
                      chat.senderName === userData.username && "self"
                    }`}
                    key={index}
                  >
                    {chat.senderName !== userData.username && (
                      <div className="avatar">{chat.senderName}</div>
                    )}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && (
                      <div className="avatar self">{chat.senderName}</div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input
                  type="text"
                  className="input-message"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="button"
                  className="send-button"
                  onClick={sendValue}
                >
                  send
                </button>
              </div>
            </div>
          )}
          {tab !== "CHATROOM" && (
            <div className="chat-content">
              <ul className="chat-messages">
                {[...privateChats.get(tab)].map((chat, index) => (
                  <li
                    className={`message ${
                      chat.senderName === userData.username && "self"
                    }`}
                    key={index}
                  >
                    {chat.senderName !== userData.username && (
                      <div className="avatar">{chat.senderName}</div>
                    )}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && (
                      <div className="avatar self">{chat.senderName}</div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input
                  type="text"
                  className="input-message"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="button"
                  className="send-button"
                  onClick={sendPrivateValue}
                >
                  send
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="register">
          <input
            id="user-name"
            placeholder="Enter your name"
            name="userName"
            value={userData.username}
            onChange={handleUsername}
            margin="normal"
          />
          {warning && <div className="warning-message">{warning}</div>}
          <button type="button" onClick={registerUser}>
            connect
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
