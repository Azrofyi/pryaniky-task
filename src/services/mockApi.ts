const mockData = [
    {
        id: '1',
        companySigDate: '2022-12-23T11:19:27.017Z',
        companySignatureName: 'John Doe',
        documentName: 'Document 1',
        documentStatus: 'Active',
        documentType: 'Type A',
        employeeNumber: '12345',
        employeeSigDate: '2022-12-23T11:19:27.017Z',
        employeeSignatureName: 'Jane Smith',
    },
    {
        id: '2',
        companySigDate: '2022-12-23T11:19:27.017Z',
        companySignatureName: 'John Doe',
        documentName: 'Document 1',
        documentStatus: 'Active',
        documentType: 'Type A',
        employeeNumber: '12345',
        employeeSigDate: '2022-12-23T11:19:27.017Z',
        employeeSignatureName: 'Jane Smith',
    },
];

export const fetchMockData = async () => {
    return new Promise<any[]>((resolve) => {
        setTimeout(() => resolve(mockData), 500);
    });
};

export const createMockData = async (newData: any) => {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            const newDataWithId = { ...newData, id: `${mockData.length + 1}` };
            mockData.push(newDataWithId);
            resolve(newDataWithId);
        }, 500);
    });
};

export const updateMockData = async (id: string, updatedData: any) => {
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            const index = mockData.findIndex((item) => item.id === id);
            if (index !== -1) {
                mockData[index] = { ...mockData[index], ...updatedData };
                resolve(mockData[index]);
            }
        }, 500);
    });
};

export const deleteMockData = async (id: string) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const index = mockData.findIndex((item) => item.id === id);
            if (index !== -1) {
                mockData.splice(index, 1);
                resolve();
            }
        }, 500);
    });
};
