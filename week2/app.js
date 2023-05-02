import React, {useState} from 'react';

function app(){
    const [count, setCount] = useState(4);
    return (   
    <>
    <button>-</button>
    <span>{count}</span>
    <button>+</button>
    </>
    )
} 

export default app;