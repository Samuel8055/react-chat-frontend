import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div>
      <form className='row m-0'>
        <div className='col-10 px-0'>
          <input
            type='text'
            placeholder='Type a message. . .'
            className='form-control message-box'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          />
        </div>

        <div className='col-2 px-0'>
          <button
            className='btn btn-primary form-control send-btn'
            onClick={(e) => sendMessage(e)}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
