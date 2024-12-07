import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { apiUrls } from './apiUrls';

const EmlpoyeeOfficialContactInfo = ({ onDataFetched}) => {
    const [id, setId] = useState(null);
    const [employee, setEmployee] = useState(null);
    const token = localStorage.getItem('token');
    const employeeUrl = apiUrls.employee;
    const employeeOfficialContactUrl = apiUrls.employeeOfficialContactinfo;

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
                        `${employeeUrl}${id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    setEmployee(response.data);

                } catch (err) {
                    console.error('Error fetching user data:', err);
                }
            };

            fetchData();
        }


    }, [id, token, employeeUrl]);


    useEffect(() => {
        if (employee) {
            const fetchEmployeeData = async () => {
                try {
                    const response = await axios.get(`${employeeOfficialContactUrl}${employee.id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                    onDataFetched(response.data);
                    
                } catch (err) {
                    console.error('Error fetching employee data:', err);
                }
            };

            fetchEmployeeData();
        }
    }, [employee, token, employeeOfficialContactUrl]);

    return null;
};

export default EmlpoyeeOfficialContactInfo;
