import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const GetEmployees = ({onDataFetched}) => {
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.osquare.live/api/Employee/GetAll`,
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
    }, [token, onDataFetched]);

    return null;
}

export default GetEmployees