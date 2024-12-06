import React, { useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import AttendanceById from '../../api/AttendanceById'
import Spinner from './../ui/Spinner'
import {Badge} from './../ui/badge'

const AttendanceTable = () => {
    const [attendances, setAttendances] = useState(null);
    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
    const [loading, setLoading] = useState(false);

    const handleDataFetched = (data) => {
        setAttendances(data);
        setLoading(false);  // Data fetched, so stop the loading spinner
    };

    useEffect(() => {
        handleDateRangeChange('7days');
    }, []);

    const handleDateRangeChange = (value) => {
        const today = new Date();
        let startDate;
        let endDate = today; // Default to today for endDate

        switch (value) {
            case '7days':
                startDate = new Date(today);
                startDate.setDate(today.getDate() - 7);
                break;
            case '30days':
                startDate = new Date(today);
                startDate.setDate(today.getDate() - 30);
                break;
            case 'thismonth':
                startDate = new Date(today.getFullYear(), today.getMonth(), 1);
                break;
            case 'lastmonth':
                startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                endDate = new Date(today.getFullYear(), today.getMonth(), 0);
                break;
            default:
                return;
        }

        setLoading(true);
        setDateRange({ startDate, endDate });

        // Reset attendances while new data is being fetched
        setAttendances(null);
    };


    // Format date to ISO string for API
    const formatDateToISOString = (date) => {
        if (!date) return '';
        return date.toISOString();
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);

        const day = String(date.getDate()).padStart(2, '0'); // Ensures 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-indexed, so we add 1
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

    // Function to get the day of the week
    const getDayOfWeek = (isoDate) => {
        const date = new Date(isoDate);
        const options = { weekday: 'long' }; 
        return date.toLocaleDateString('en-US', options);
    };

    //to fetch time from isoDate
    const formatTime = (isoDate) => {
        const date = new Date(isoDate);
    
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
    
        // Determine AM/PM suffix
        const period = hours >= 12 ? 'PM' : 'AM';
    
        // Convert to 12-hour format
        hours = hours % 12 || 12; // This makes sure 0 becomes 12 for midnight
        const formattedHours = String(hours).padStart(2, '0');
    
        return `${formattedHours}:${minutes}:${seconds} ${period}`;
    };
    
    
    return (
        <>
            {dateRange.startDate && dateRange.endDate && loading && (
                <AttendanceById
                    onDataFetched={handleDataFetched}
                    startDate={formatDateToISOString(dateRange.startDate)}
                    endDate={formatDateToISOString(dateRange.endDate)}
                />
            )}

            <div className="flex justify-between my-4 gap-x-4">
                <h1 className='text-accent text-2xl font-semibold'>Attendance</h1>
                <Select defaultValue='7days' onValueChange={handleDateRangeChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="7days">Last 7 Days</SelectItem>
                            <SelectItem value="30days">Last 30 Days</SelectItem>
                            <SelectItem value="thismonth">This Month</SelectItem>
                            <SelectItem value="lastmonth">Last Month</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <Table className='my-8'>
                <TableHeader>
                    <TableRow className='bg-card'>
                        <TableHead>Employee</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Day</TableHead>
                        <TableHead>time in</TableHead>
                        <TableHead>time out</TableHead>
                        <TableHead>type</TableHead>
                        <TableHead>total time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan="7" className="text-center">
                                <Spinner />
                            </TableCell>
                        </TableRow>
                    ) : (
                        attendances && attendances.map((attendance, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{attendance.employee}</TableCell>
                                <TableCell>{formatDate(attendance.createdDate)}</TableCell>
                                <TableCell>{getDayOfWeek(attendance.createdDate)}</TableCell>
                                <TableCell>{formatTime(attendance.signIn)}</TableCell>
                                <TableCell>{formatTime(attendance.signOut)}</TableCell>
                                <TableCell><Badge className={'bg-chart-2'}>{attendance.type}</Badge></TableCell>
                                <TableCell>{'hello'}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default AttendanceTable;
