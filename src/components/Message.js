import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='current-user my-2'>
      <div className='message-inner'>
        <p className='message-text'>{text}</p>
      </div>
    </div>
  ) : (
    <div className='other-user my-2'>
      <div className='message-inner'>
        <p className='message-username'>{user}</p>
        <p className='message-text'>{text}</p>
      </div>
    </div>
  );
};

export default Message;
