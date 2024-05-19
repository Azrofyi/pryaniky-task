// src/components/DataTable/useDataTableHandlers.ts
import { useContext, useEffect, useState } from 'react';
import { createData, deleteData, fetchData, updateData } from '../../services/api';
import { NotificationContext } from '../../contexts/NotificationContext';
import { formatDateForInput } from '../../utils/formatDate';
import { IDocumentData } from '../../types/types';

export const useDataTableHandlers = () => {
    const [data, setData] = useState<IDocumentData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [editingData, setEditingData] = useState<IDocumentData | null>(null);
    const { setNotification } = useContext(NotificationContext);

    const loadData = async () => {
        setIsLoading(true);
        try {
            const data = await fetchData();
            if (!data) {
                throw new Error('Something went wrong!');
            }
            const formattedData = data.map((doc: IDocumentData) => ({
                ...doc,
                employeeSigDate: formatDateForInput(doc.employeeSigDate),
                companySigDate: formatDateForInput(doc.companySigDate),
            }));
            setData(formattedData);
            setNotification(null);
        } catch (error) {
            setNotification(error instanceof Error ? error.message : 'Failed to fetch data.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreate = async (newData: IDocumentData) => {
        setIsLoading(true);
        try {
            await createData(newData);
            await loadData();
        } catch (error) {
            setNotification(error instanceof Error ? error.message : 'Failed to create data.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdate = async (id: string, updatedData: IDocumentData) => {
        setIsLoading(true);
        try {
            await updateData(id, updatedData);
            await loadData();
        } catch (error) {
            setNotification(error instanceof Error ? error.message : 'Failed to update data.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        setIsLoading(true);
        try {
            await deleteData(id);
            await loadData();
        } catch (error) {
            setNotification(error instanceof Error ? error.message : 'Failed to delete data.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleOpen = (data: IDocumentData | null = null) => {
        setEditingData(data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingData(null);
    };

    const handleSave = (savedData: IDocumentData) => {
        if (savedData.id) {
            handleUpdate(savedData.id, savedData);
        } else {
            handleCreate(savedData);
        }
        handleClose();
    };

    return {
        data,
        isLoading,
        open,
        editingData,
        handleOpen,
        handleClose,
        handleSave,
        handleDelete,
    };
};
