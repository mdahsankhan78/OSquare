import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const GetEmployees = ({onDataFetched}) => {
    const apiUrl = import.meta.env.VITE_GETEMPLOYEES_URL;
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                onDataFetched(response.data);
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchData();
    }, [token]);

    return null;
}

export default GetEmployees