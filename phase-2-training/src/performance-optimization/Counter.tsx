import { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    // const isEven = () =>{
    //     for(let i = 0;i<2000000000;i++)
    //         i=i+1
    //     return counterOne % 2 === 0
    // }
    const isEven = useMemo(() =>{
        for(let i = 0;i<2000000000;i++)
            i=i+1
        return counterOne % 2 === 0
    },[counterOne])
    
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo+ 1)
    }

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Counter One - {counterOne}</button>
                {/* {isEven()? "Even":"Odd"} */}
                {isEven? "Even":"Odd"}

            </div>
            <div>
                <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            </div>
        </div>

    )
}

export default Counter