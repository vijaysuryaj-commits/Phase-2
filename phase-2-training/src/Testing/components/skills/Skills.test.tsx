import Skills from "./Skills";
import { render, screen, logRoles } from "@testing-library/react";

describe('Skills', () => {
    const skills = ['HTML', "CSS", "JavaScript"];

    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills correctly', () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).toHaveLength(skills.length);
    })

    test('renders a login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument();
    })

    // test('not renders start learning',()=>{
    //     render(<Skills skills={skills} />)
    //     const startLearningButton = screen.getByRole('button',{
    //         name:'Start learning'
    //     })
    //     expect(startLearningButton).not.toBeInTheDocument()
    // })   //error
    test('not renders start learning', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start learning'
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    // test('eventually renders start learning',()=>{
    //     render(<Skills skills={skills } />)
    //     const startLearningButton = screen.getByRole('button',{
    //         name:'Start learning'
    //     })
    //     expect(startLearningButton).toBeInTheDocument();
    // })   //error

    //findBy.. -default timeout 1000 msI

    // test('eventually renders start learning', async ()=>{
    //     render(<Skills skills={skills } />)
    //     const startLearningButton = await screen.findByRole('button',{
    //         name:'Start learning'
    //     })
    //     expect(startLearningButton).toBeInTheDocument();
    // })
    test('eventually renders start learning', async () => {

        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        screen.debug();
        const startLearningButton = await screen.findByRole('button', {
            name: 'Start learning'
        }, {
            timeout: 2000
        })
        screen.debug();

        expect(startLearningButton).toBeInTheDocument();
    })
})
