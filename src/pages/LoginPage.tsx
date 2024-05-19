import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm.tsx';
import Notification from '../components/Notification/Notification.tsx';

const LoginPage: React.FC = () => {
    return (
        <>
            <Notification />
            <LoginForm />
        </>
    );
};

export default LoginPage;
