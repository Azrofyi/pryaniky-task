import React from 'react';
import { Button, CircularProgress, Container } from '@mui/material';
import DataTableContent from './DataTableContent.tsx';
import DataFormDialog from '../DataFormDialog/DataFormDialog.tsx';
import { useDataTableHandlers } from './useDataTableHandlers.ts';

const DataTable: React.FC = () => {
    const {
        data,
        isLoading,
        open,
        editingData,
        handleOpen,
        handleClose,
        handleSave,
        handleDelete,
    } = useDataTableHandlers();

    return (
        <Container sx={{ paddingY: '30px' }}>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <div>
                    <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
                        Add New
                    </Button>
                    <DataTableContent data={data} onEdit={handleOpen} onDelete={handleDelete} />
                    <DataFormDialog
                        open={open}
                        onClose={handleClose}
                        onSave={handleSave}
                        editingData={editingData}
                    />
                </div>
            )}
        </Container>
    );
};

export default DataTable;
