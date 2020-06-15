import React from "react";
import { Link } from "react-router-dom";
import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";

const ChatInfo = ({ room }) => {
  return (
    <div className='chat-info-bar'>
      <div>
        <img src={onlineIcon} alt='online' />
        <span className='room-name'>{room}</span>
      </div>

      <div>
        <Link to='/'>
          <img src={closeIcon} alt='close' />
        </Link>
      </div>
    </div>
  );
};

export default ChatInfo;
