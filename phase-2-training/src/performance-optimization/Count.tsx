import React from "react"
import { useState } from "react"
function Count({ text, count }) {

    console.log('rendering', text)
    return (
        <div>
            {text} = {count}
        </div>
    )
}

export default React.memo(Count)