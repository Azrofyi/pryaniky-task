import React, { createContext, ReactNode, useState } from 'react';

interface NotificationContextType {
    notification: string | null;
    setNotification: (message: string | null) => void;
}

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationContext = createContext<NotificationContextType>({
    notification: null,
    setNotification: () => {},
});

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notification, setNotification] = useState<string | null>(null);

    return (
        <NotificationContext.Provider value={{ notification, setNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};
