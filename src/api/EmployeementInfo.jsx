import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { apiUrls } from './apiUrls';

const EmployeementInfo = ({ onDataFetched, Employee}) => {
    const [id, setId] = useState(null);
    const [employee, setEmployee] = useState(null);
    const token = localStorage.getItem('token');
    const employeeUrl = apiUrls.employee;
    const employeementUrl = apiUrls.employeementInfo;

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
            const fetchEmployeementData = async () => {
                try {
                    const response = await axios.get(`${employeementUrl}${employee.id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                    onDataFetched(response.data);   
                    Employee(employee)
                    
                } catch (err) {
                    console.error('Error fetching attendance data:', err);
                }
            };

            fetchEmployeementData();
        }
    }, [employee, token, employeementUrl]);

    return null;
};

export default EmployeementInfo;
