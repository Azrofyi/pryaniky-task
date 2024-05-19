import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { NotificationContext } from '../../contexts/NotificationContext.tsx';

const Notification: React.FC = () => {
    const { notification, setNotification } = useContext(NotificationContext);

    const handleClose = () => {
        setNotification(null);
    };

    return (
        <Snackbar open={!!notification} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {notification}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
