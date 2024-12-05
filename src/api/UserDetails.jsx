import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const UserDetails = ({ onDataFetched }) => {
    const [id, setId] = useState(null);
    const token = localStorage.getItem('token');
    const apiUrl = import.meta.env.VITE_GETEMPLOYEE_URL;
    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setId(decoded.Id);  
            } catch (error) {
                console.error('Failed to decode token:', error);
            }
        }
    }, [token]); 

    useEffect(() => {
        if (id) { 
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `${apiUrl}${id}`,
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
        }
    }, [id, token, onDataFetched]); 

    return null;
};

export default UserDetails;
