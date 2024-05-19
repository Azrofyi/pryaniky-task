import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { IDocumentData } from '../../types/types.ts';

interface DataTableContentProps {
    data: IDocumentData[];
    onEdit: (data: IDocumentData) => void;
    onDelete: (id: string) => void;
}

const styles = {
    marginY: '30px',
    color: 'rgba(255, 255, 255, 0.87)',
    tr: {
        backgroundColor: 'hsl(0, 0%, 18%)',
    },
    ['th, td']: {
        color: 'rgba(255, 255, 255, 0.87)',
    },
    '@media screen and (max-width: 600px)': {
        thead: {
            border: 'none',
            clip: 'rect(0 0 0 0)',
            height: '1px',
            margin: '-1px',
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: '1px',
        },
        tr: {
            backgroundColor: 'hsl(0, 0%, 18%)',
            borderBottom: '3px solid #ddd',
            display: 'block',
            marginY: '30px',
        },
        td: {
            borderBottom: '1px solid #ddd',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            fontSize: '.8em',
            textAlign: 'right',
        },
        'td::before': {
            content: 'attr(data-label)',
            textAlign: 'left',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            maxWidth: '50%', // чтобы контент переносился
        },
        'td:last-child': {
            borderBottom: 0,
        },
    },
};

const DataTableContent: React.FC<DataTableContentProps> = ({ data, onEdit, onDelete }) => {
    return (
        <Table sx={styles}>
            <TableHead>
                <TableRow>
                    <TableCell>Company Signature Date</TableCell>
                    <TableCell>Company Signature Name</TableCell>
                    <TableCell>Document Name</TableCell>
                    <TableCell>Document Status</TableCell>
                    <TableCell>Document Type</TableCell>
                    <TableCell>Employee Number</TableCell>
                    <TableCell>Employee Signature Date</TableCell>
                    <TableCell>Employee Signature Name</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell data-label="Company Signature Date">
                            {row.companySigDate}
                        </TableCell>
                        <TableCell data-label="Company Signature Name">
                            {row.companySignatureName}
                        </TableCell>
                        <TableCell data-label="Document Name">{row.documentName}</TableCell>
                        <TableCell data-label="Document Status">{row.documentStatus}</TableCell>
                        <TableCell data-label="Document Type">{row.documentType}</TableCell>
                        <TableCell data-label="Employee Number">{row.employeeNumber}</TableCell>
                        <TableCell data-label="Employee Signature Date">
                            {row.employeeSigDate}
                        </TableCell>
                        <TableCell data-label="Employee Signature Name">
                            {row.employeeSignatureName}
                        </TableCell>
                        <TableCell>
                            <Box>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => onEdit(row)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => row.id && onDelete(row.id)}
                                >
                                    Delete
                                </Button>
                            </Box>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DataTableContent;
