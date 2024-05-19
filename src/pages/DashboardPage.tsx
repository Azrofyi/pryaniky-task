import React from 'react';
import DataTable from '../components/DataTable/DataTable.tsx';
import Notification from '../components/Notification/Notification.tsx';

const DashboardPage: React.FC = () => {
    return (
        <>
            <Notification />
            <DataTable />
        </>
    );
};

export default DashboardPage;
