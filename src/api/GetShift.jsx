import axios from 'axios';
import React, { useEffect } from 'react'

const GetShift = ({ Id, onShiftFetched }) => {
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.osquare.live/api/Shift/GetById?id=${Id}`,
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