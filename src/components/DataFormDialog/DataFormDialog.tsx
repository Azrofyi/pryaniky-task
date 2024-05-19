import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ThemeProvider,
} from '@mui/material';
import FormFields from './FormFields.tsx';
import theme from './theme.ts';
import { IDocumentData } from '../../types/types.ts';

interface DataFormDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (data: IDocumentData) => void;
    editingData: IDocumentData | null;
}

const DataFormDialog: React.FC<DataFormDialogProps> = ({ open, onClose, onSave, editingData }) => {
    const [formData, setFormData] = useState<any>(editingData || {});

    useEffect(() => {
        setFormData(editingData || {});
    }, [editingData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle sx={{ color: 'hsl(44, 26%, 77%)' }}>
                    {editingData ? 'Edit Data' : 'Add Data'}
                </DialogTitle>
                <DialogContent>
                    <FormFields formData={formData} handleChange={handleChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

export default DataFormDialog;
