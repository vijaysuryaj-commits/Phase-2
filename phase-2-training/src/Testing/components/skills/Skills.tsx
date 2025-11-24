import { useEffect, useState } from "react";
import type { skillsType } from "./skills.types";

const Skills = (props: skillsType) => {
    const { skills } = props;
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoggedIn(true)
        }, 500)
    }, [loggedIn])
    return (
        <>
            <ul>
                {
                    skills.map((skill) => {
                        return <li key={skill}>skill</li>
                    })
                }
            </ul>
            {loggedIn ?
                <button>Start learning</button> :
                <button onClick={() => setLoggedIn(true)}>Login</button>
            }
        </>
    )
}

export default Skills