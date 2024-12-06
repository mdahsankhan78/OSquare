import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { apiUrls } from './apiUrls';

const AttendanceById = ({ onDataFetched, startDate, endDate }) => {
    const [id, setId] = useState(null);
    const [employee, setEmployee] = useState(null);
    const token = localStorage.getItem('token');
    const employeeUrl = apiUrls.employee;
    const attendanceUrl1 = apiUrls.attendancebyId1;
    const attendanceUrl2 = apiUrls.attendancebyId2;
    const attendanceUrl3 = apiUrls.attendancebyId3;

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
            const fetchAttendanceData = async () => {
                try {
                    const response = await axios.get(`${attendanceUrl1}${employee.id}${attendanceUrl2}${startDate}${attendanceUrl3}${endDate}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                    onDataFetched(response.data);
                } catch (err) {
                    console.error('Error fetching attendance data:', err);
                }
            };

            fetchAttendanceData();
        }
    }, [employee, token, attendanceUrl1,attendanceUrl2,attendanceUrl3, onDataFetched]);

    return null;
};

export default AttendanceById;
