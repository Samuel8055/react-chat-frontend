import React, { useState } from "react";

const Join = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !room) {
      return null;
    } else {
      props.history.push(`/chat?name=${name}&room=${room}`);
      setName("");
      setRoom("");
    }
  };

  return (
    <div className='col-md-4 mx-auto join-container'>
      <form onSubmit={submitHandler}>
        <h3 className='text-center'>Join</h3>
        <div className='stroke'></div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Name. . .'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Room. . .'
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>

        <button className='btn btn-primary form-control'>Join</button>
      </form>
    </div>
  );
};

export default Join;
