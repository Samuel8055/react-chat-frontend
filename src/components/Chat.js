import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";

import ChatInfo from "./ChatInfo";
import Messages from "./Messages";
import Input from "./Input";

let socket;

const Chat = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://react-mychatapplication.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);

    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, props.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className='col-md-6 mx-auto'>
      <ChatInfo room={room} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
