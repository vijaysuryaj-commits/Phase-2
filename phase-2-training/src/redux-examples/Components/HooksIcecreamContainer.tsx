import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux";

function HooksIcecreamContainer() {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy icecream</button>
    </div>
    )
}

export default HooksIcecreamContainer