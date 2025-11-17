import { BUY_ICECREAM } from "./iceCreamtypes";

export const buyIcecream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload:number
    }
}

