import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from '@testing-library/user-event'

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter count={0} />)
        const textElement = screen.getByRole('heading');
        expect(textElement).toBeInTheDocument()
    })

    test('handlers are called', async () => {
        const incrementCountHandler = jest.fn();
        const DecrementCountHandler = jest.fn();
        render(<Counter count={0}
            incrementCount={incrementCountHandler}
            decrementCount={DecrementCountHandler} />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment count'
        })
        const decrementButton = screen.getByRole('button', {
            name: 'Decrement count'
        })
        await user.click(incrementButton)
        await user.click(decrementButton)
        expect(incrementCountHandler).toHaveBeenCalledTimes(1)
        expect(DecrementCountHandler).toHaveBeenCalledTimes(1)
    })
})