import React, {useState} from  "react";

const Counter = function () {

    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('текст в импуте');
  
    return (
        <div>
        <h1>{likes}</h1>
        <h1>{value}</h1>
  
        <input
          type='text'
          value={value}
          onChange={ event => setValue(event.target.value)}
        />
        <button onClick={() => setLikes(likes + 1)}>Increment</button>
        <button onClick={() => setLikes(likes - 1)}>Descrement</button>
      </div>
    );
};

export default Counter;