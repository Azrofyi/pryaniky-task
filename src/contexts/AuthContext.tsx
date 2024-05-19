import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotificationContext } from './NotificationContext.tsx';
import axios from 'axios';

const HOST = 'https://test.v5.pryaniky.com';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

interface LoginResponse {
    data: {
        token: string;
    };
    error_code?: number;
    error_text?: string;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: async () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const { setNotification } = useContext(NotificationContext);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post<LoginResponse>(
                `${HOST}/ru/data/v3/testmethods/docs/login`,
                {
                    username,
                    password,
                },
            );
            if (response.data['error_code']) {
                throw new Error(response.data['error_text'] || 'Unknown error');
            }
            const token = response.data.data.token;
            localStorage.setItem('token', token);
            setIsAuthenticated(true);
            navigate('/dashboard');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setNotification(error.response?.data.message || 'An error occurred');
            } else if (error instanceof Error) {
                setNotification(error.message || 'An error occurred');
            } else {
                setNotification('An error occurred');
            }
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {isLoading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
