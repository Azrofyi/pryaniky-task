import React from 'react';
import { TextField } from '@mui/material';
import { IDocumentData } from '../../types/types.ts';

interface FormFieldsProps {
    formData: IDocumentData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, handleChange }) => {
    return (
        <>
            <TextField
                InputLabelProps={{ shrink: true }}
                name="companySigDate"
                label="Company Signature Date"
                type="datetime-local"
                fullWidth
                value={formData.companySigDate || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="companySignatureName"
                label="Company Signature Name"
                fullWidth
                value={formData.companySignatureName || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="documentName"
                label="Document Name"
                fullWidth
                value={formData.documentName || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="documentStatus"
                label="Document Status"
                fullWidth
                value={formData.documentStatus || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="documentType"
                label="Document Type"
                fullWidth
                value={formData.documentType || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="employeeNumber"
                label="Employee Number"
                fullWidth
                value={formData.employeeNumber || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="employeeSigDate"
                label="Employee Signature Date"
                type="datetime-local"
                fullWidth
                value={formData.employeeSigDate || ''}
                onChange={handleChange}
                margin="dense"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                name="employeeSignatureName"
                label="Employee Signature Name"
                fullWidth
                value={formData.employeeSignatureName || ''}
                onChange={handleChange}
                margin="dense"
            />
        </>
    );
};

export default FormFields;
