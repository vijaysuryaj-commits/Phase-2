import Title from "./Title"
import Count from "./Count"
import Button from "./Button"
import { useState, useCallback } from "react"

function ParentComponent() {
    const [age, setAge] = useState(1)
    const [salary, setSalary] = useState(50000)
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <h2>Performance optimization examples</h2>
            <Title />
            <Count text={'Age'} count={age} />
            <Button handleClick={incrementAge} >Increment Age </Button>
            <Count text={'Salary'} count={salary} />
            <Button handleClick={incrementSalary} >Increment Salary </Button>

        </div>
    )
}

export default ParentComponent