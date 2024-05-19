import axios from 'axios';

const HOST = 'https://test.v5.pryaniky.com';

const getToken = () => localStorage.getItem('token');

export const fetchData = async () => {
    const token = getToken();
    const response = await axios.get(`${HOST}/ru/data/v3/testmethods/docs/userdocs/get`, {
        headers: {
            'x-auth': token,
        },
    });
    return response.data.data;
};

export const createData = async (newData: any) => {
    const token = getToken();
    const response = await axios.post(
        `${HOST}/ru/data/v3/testmethods/docs/userdocs/create`,
        newData,
        {
            headers: {
                'x-auth': token,
            },
        },
    );
    return response.data;
};

export const updateData = async (id: string, updatedData: any) => {
    const token = getToken();
    const response = await axios.post(
        `${HOST}/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
        updatedData,
        {
            headers: {
                'x-auth': token,
            },
        },
    );
    return response.data;
};

export const deleteData = async (id: string) => {
    const token = getToken();
    const response = await axios.post(
        `${HOST}/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
        {},
        {
            headers: {
                'x-auth': token,
            },
        },
    );
    return response.data;
};
