import { render, screen, waitFor } from '@testing-library/react'
import Users from './Users'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios);
const url = 'https://jsonplaceholder.typicode.com/users'
const mockedUsers = [
    {
        id: 1,
        name: 'Vijay'
    },
    {
        id: 2,
        name: 'Surya'
    }
]
describe('Users', () => {
    beforeEach(() => {
        mock.reset();
    })
    // test('renders correctly', () => {
    //     render(<Users />)
    //     const textElement = screen.getByRole('heading')
    //     expect(textElement).toBeInTheDocument();
    // })
    test('renders loading state initially', () => {
        mock.onGet(url).reply(() => new Promise(() => { }))
        render(<Users />)
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    })
    test('Renders users data', async () => {
        mock.onGet(url).reply(200, mockedUsers)
        render(<Users />)
        screen.debug();
        await waitFor(() => expect(screen.getByTestId('user-list')))

        screen.debug();
        const userItems = screen.getAllByTestId('user-item')
        expect(userItems).toHaveLength(2)
        expect(screen.getByText('Vijay')).toBeInTheDocument();
    })
    test('renders error on api request fail',async () => {
        const errorMessage = 'Request failed with status code 500'
        mock.onGet(url).reply(500, { message: errorMessage })
        render(<Users />)
        await waitFor(()=> expect(screen.getByTestId('error')).toBeInTheDocument())
        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
        expect(screen.queryByText('Loading users...')).not.toBeInTheDocument();
    })
})