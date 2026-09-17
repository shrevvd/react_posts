import React, { useState } from "react";

const Something = () => {
    const [number, setNumber] = useState(10)

    function todosomething() {
        setNumber(number * (Math.random() + 0.67));
    }

    return(
        <div>
            <h1>hi</h1>
            <h1>{number}</h1>
            <button onClick={todosomething}>нажми штобы штонибудь</button>
        </div>
    )
}

export default Something;