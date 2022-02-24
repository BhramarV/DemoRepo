import { useState } from "react";

export default function CreateUseStateCounter() {
    var [counter, setCounter] = useState(0);

    debugger;

    function incrementCounter() {
        setCounter(counter + 1);
        console.log(counter)
    }

    setTimeout(() => {
        // setCounter(counter = counter + 1);
        incrementCounter();
    }, 1000)

    // setInterval(incrementCounter, 1000)
    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            {/* <input type="button" onClick={incrementCounter} value="Increment Counter" /> */}
        </div>
    )
}