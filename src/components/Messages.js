import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className='messages-container'>
      {messages.map((message, index) => (
        <Message key={index} message={message} name={name} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
