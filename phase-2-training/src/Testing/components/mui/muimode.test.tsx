// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../../test-utils";

import { MuiMode } from "./muimode";
// import { AppProviders } from "../providers/app-providers";

describe('MuiMode', () => {
    test('renders text correctly', () => {
        // render(<AppProviders ><MuiMode /></AppProviders>)
        // render(<MuiMode />, {
        //     wrapper: AppProviders
        // })
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('dark mode')
    })
})