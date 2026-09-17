import React, { useState } from "react";

const MyCounter = () => {
    const [peremennaya, setPeremennaya] = useState(0)

    function plus() {
        setPeremennaya(peremennaya + 1);
    }

    function minus() {
        setPeremennaya(peremennaya - 1);
    }

    function reset() {
        setPeremennaya(0);
    }

    return (
        <div>
            <p>{peremennaya}</p>
            <button onClick={plus}>+1</button>
            <button onClick={reset}>RESET</button>
            <button onClick={minus}>-1</button>
        </div>
    )
}

export default MyCounter;