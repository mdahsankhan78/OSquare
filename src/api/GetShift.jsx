import axios from 'axios';
import React, { useEffect } from 'react'

const GetShift = ({ Id, onShiftFetched }) => {
    const apiUrl = import.meta.env.VITE_GETSHIFT_URL;
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}${Id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                onShiftFetched(response.data);
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchData();
    }, [token, onShiftFetched]);

    return null;
}

export default GetShift