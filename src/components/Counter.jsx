import { useState } from 'react';
import { useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        return setCount(count + 1);
    }

    function resetCount() {
        return setCount(0);
    }

    useEffect(() => {
        console.log("Count is updated by 1 times:" + count)
        return () => {
            console.log("counter is detached")
        };  
    })

    return (
        <>
            <div>
                <p>You clicked {count} times.</p>
                <button className="bg-blue-700 p-3 text-white cursor-pointer rounded-2xl" onClick={() => updateCount()}>Click here!</button>
                <button className="bg-blue-700 p-3 text-white cursor-pointer rounded-2xl" onClick={() => resetCount()}>Reset</button>
            </div>
        </>
    );
}

export default Counter;