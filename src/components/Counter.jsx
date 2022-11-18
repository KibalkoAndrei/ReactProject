import React, { useState } from "react";

const Counter = function () {

    const [Count, SetCount] = useState(0);

    function increment () {
        SetCount(Count +1);
    };

    function Decrement () {
        SetCount(Count -1);
    };

    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default Counter;