import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext.tsx';
import PrivateRoute from './routes/PrivateRoute.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import PublicRoute from './routes/PublicRoute.tsx';

const App: React.FC = () => {
    return (
        <Router basename="/pryaniky-task">
            <NotificationProvider>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<PublicRoute />}>
                            <Route path="/" element={<LoginPage />} />
                        </Route>
                        <Route path="/dashboard" element={<PrivateRoute />}>
                            <Route path="/dashboard" element={<DashboardPage />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </NotificationProvider>
        </Router>
    );
};

export default App;
