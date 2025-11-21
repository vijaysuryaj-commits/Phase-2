// import {render} from '@testing-library/react'
// import Greet from './Greet'

import { render } from "@testing-library/react"
import Greet from "./Greet"

// test('Greet renders', ()=>{
//     const {getByText} = render(<Greet />)
//     const linkElement = getByText('Hello')
//     expect(linkElement).toBeInTheDocument();
// })


// test('Greet renders', () => {
// // test.skip('Greet renders', () => {
//     const { getByText } = render(<Greet />);
//     const textElement = getByText("Hello");
//     expect(textElement).toBeInTheDocument();
// })

// test.only('Greet renders with name', () => {
//     const { getByText } = render(<Greet name='Vijay' />);
//     const textElement = getByText("Hello Vijay");
//     expect(textElement).toBeInTheDocument();
// })

describe('Greet',()=>{
    test('renders',()=>{
        const {getByText} = render(<Greet />)
        // const textElement = getByText('Hello');
        const textElement = getByText(/helloguest/i);

        expect(textElement).toBeInTheDocument()
    })
    // test('renders with name',()=>{
    //     const {getByText} = render(<Greet name="Vijay"/>)
    //     const textElement = getByText('Hello Vijay');
    //     expect(textElement).toBeInTheDocument()
    // })
})






