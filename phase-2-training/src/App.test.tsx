// import React from "react";
// import {render , screen} from '@testing-library/react'
// import App from "./App";

// test('renders learn react link',() =>{
//     render(<App />);
//     const linkElement = screen.getByText(/Counter One - 0/i);
//     expect(linkElement).toBeInTheDocument();
// })

import React from "react";
import {render } from '@testing-library/react'
import App from "./App";

test('renders learn react link',() =>{
    const {getByTestId} = render(<App />);
    const linkElement = getByTestId('button-1');
    expect(linkElement).toBeInTheDocument();
})