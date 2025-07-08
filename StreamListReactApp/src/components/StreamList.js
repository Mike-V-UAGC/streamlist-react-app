import React, { useState } from 'react';
import './StreamList.css';

function StreamList() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", input);
    setInput('');
  };

  return (
    <div className="streamlist">
      <h1>Welcome to StreamList</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter a stream:</label>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type something..." 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;