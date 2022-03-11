import { createContext, useState } from 'react';

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`);

        const data = await response.json();

        setUsers(data);
        setIsLoading(false);
    };

    return (
        <GitHubContext.Provider value={{
            users,
            isLoading,
        }}>
            {children}
        </GitHubContext.Provider>
    );
};

export default GitHubContext;