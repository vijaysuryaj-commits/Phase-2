import { useState, useEffect } from "react";
import axios from "axios";
const Users = () => {
    const [users, setUsers] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(response.data.map((user: { name: string }) => user.name))
                setLoading(false)
            } catch (error: any) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchUsers();
    }, [])

    if (loading)
        return (<div data-testid="loading">Loading users...</div>)
    if (error)
        return (<div data-testid="error">Error: {error}</div>)
    return (
        <div>
            <h1>Users</h1>

            <ul data-testid="user-list">
                {users.map((user) => (
                    <li key={user} data-testid="user-item">
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users