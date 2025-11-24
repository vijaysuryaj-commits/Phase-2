import { render, screen } from "@testing-library/react";
import Application from "./Application";

test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading',
        {
            // name:'Job application form'
            level: 1
        }
    )
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
        // name:'Section 1'
        level: 2
    })
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
        name: 'Name'
    })
    expect(nameElement).toBeInTheDocument()

    // const nameElement2 = screen.getByLabelText('Name')
    const nameElement2 = screen.getByLabelText('Name', {
        selector: 'input'
    })

    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Full name')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Vijay')
    expect(nameElement4).toBeInTheDocument();

    const imageElement = screen.getByAltText('Placeholder image');
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByTitle('close')
    expect(titleElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
    
    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText(/fields/i);
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText('ll fields',{exact:false})
    expect(paragraphElement3).toBeInTheDocument();

    const paragraphElement4 = screen.getByText((content) => content.startsWith('All'))
    expect(paragraphElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
        name: "Bio"
    })
    expect(bioElement).toBeInTheDocument();

    const bioElement2 = screen.getByLabelText('Bio')
    expect(bioElement2).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument();

    const TermsElement = screen.getByRole('checkbox')
    expect(TermsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
})