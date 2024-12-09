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
import { Badge } from './../ui/badge'
import { Button } from './../ui/button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AttendanceTable = () => {
    const [attendances, setAttendances] = useState(null);
    const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
    const [loading, setLoading] = useState(false);
    const [customRange, setCustomRange] = useState(false); 

    const handleDataFetched = (data) => {
        // Sort the data by createdDate in descending order
        const sortedData = data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
        setAttendances(sortedData);
        setLoading(false);
    };

    useEffect(() => {
        handleDateRangeChange('7days');
    }, []);

    const handleDateRangeChange = (value) => {
        const today = new Date();
        let startDate;
        let endDate = today; 

        if (value === 'custom') {
            setCustomRange(true);
            return;
        }

        switch (value) {
            case '7days':
                startDate = new Date(today);
                startDate.setDate(today.getDate() - 7);
                setCustomRange(false);
                break;
            case '30days':
                startDate = new Date(today);
                startDate.setDate(today.getDate() - 30);
                setCustomRange(false);
                break;
            case 'thismonth':
                startDate = new Date(today.getFullYear(), today.getMonth(), 1);
                setCustomRange(false);
                break;
            case 'lastmonth':
                startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                endDate = new Date(today.getFullYear(), today.getMonth(), 0);
                setCustomRange(false);
                break;
            default:
                return;
        }

        setLoading(true);
        setDateRange({ startDate, endDate });
        setAttendances(null); 
    };

    const handleCustomDateRangeChange = (startDate, endDate) => {
        setLoading(true);
        setDateRange({ startDate, endDate });
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

    // to fetch time from isoDate
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

    // Calculate the total time worked and check early or overtime
    const calculateTotalTime = (signIn, signOut) => {
        const signInDate = new Date(signIn);
        const signOutDate = new Date(signOut);
        const workDuration = signOutDate - signInDate;

        const totalHours = Math.floor(workDuration / (1000 * 60 * 60)); // in hours
        const totalMinutes = Math.floor((workDuration % (1000 * 60 * 60)) / (1000 * 60)); // in minutes

        let totalTimeWorked = '';
        if (totalHours > 0) {
            totalTimeWorked = `${totalHours}h`;
        }
        if (totalMinutes > 0) {
            totalTimeWorked += ` ${totalMinutes}m`;
        }

        // Office expected working time (8 hours)
        const officeTime = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
        const earlyOrOvertime = workDuration - officeTime;

        let status = '';
        let statusClass = '';
        if (earlyOrOvertime < 0) {
            const earlyMinutes = Math.abs(Math.floor(earlyOrOvertime / (1000 * 60)));
            if (earlyMinutes < 60) {
                status = `${earlyMinutes}m Early`; // Show only minutes if less than an hour
            } else {
                const earlyHours = Math.floor(earlyMinutes / 60);
                const remainingMinutes = earlyMinutes % 60;
                status = `${earlyHours}h ${remainingMinutes}m Early`;
            }
            statusClass = 'bg-chart-5';
        } else if (earlyOrOvertime > 0) {
            const overtimeHours = Math.floor(earlyOrOvertime / (1000 * 60 * 60));
            const overtimeMinutes = Math.floor((earlyOrOvertime % (1000 * 60 * 60)) / (1000 * 60));
            if (overtimeHours > 0) {
                status = `${overtimeHours}h ${overtimeMinutes}m Overtime`;
            } else {
                status = `${overtimeMinutes}m Overtime`; // Show only minutes if less than an hour
            }
            statusClass = 'bg-chart-4';
        }
        return { totalTimeWorked, status, statusClass };
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
                            <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {customRange && (
                <div className="sm:flex gap-4 mb-4 items-end">
                    <div className="flex flex-col">
                        <label>From:</label>
                        <DatePicker
                            selected={dateRange.startDate}
                            onChange={(date) => setDateRange((prev) => ({ ...prev, startDate: date }))}
                            selectsStart
                            startDate={dateRange.startDate}
                            endDate={dateRange.endDate}
                            dateFormat="MMM dd, yyyy"
                            className="border border-card p-2 rounded bg-transparent"
                            calendarClassName="custom-calendar"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>To:</label>
                        <DatePicker
                            selected={dateRange.endDate}
                            onChange={(date) => setDateRange((prev) => ({ ...prev, endDate: date }))}
                            selectsEnd
                            startDate={dateRange.startDate}
                            endDate={dateRange.endDate}
                            minDate={dateRange.startDate}
                            dateFormat="MMM dd, yyyy"
                            className="border border-card p-2 rounded bg-transparent"
                        />
                    </div>  
                    <Button
                        onClick={() => handleCustomDateRangeChange(dateRange.startDate, dateRange.endDate)}
                        className="btn-primary w-auto mt-2 md:mt-0"
                    >
                        Apply
                    </Button>
                </div>
            )}

            <Table className='mb-8'>
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

                {loading ? (
                    <TableRow className='h-40'>
                        <TableCell colSpan="7" className="text-center">
                            <Spinner />
                        </TableCell>
                    </TableRow>
                ) : (
                    attendances && attendances.map((attendance, index) => {
                        const { totalTimeWorked, status, statusClass } = calculateTotalTime(attendance.signIn, attendance.signOut);
                        return (
                            <TableBody>
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{attendance.employee}</TableCell>
                                    <TableCell>{formatDate(attendance.createdDate)}</TableCell>
                                    <TableCell>{getDayOfWeek(attendance.createdDate)}</TableCell>
                                    <TableCell>{formatTime(attendance.signIn)}</TableCell>
                                    <TableCell>{attendance.signOut ? formatTime(attendance.signOut) : '---'}</TableCell>
                                    <TableCell><Badge className={attendance.type === 'On Site' ? 'bg-chart-2' : 'bg-chart-1'}>{attendance.type}</Badge></TableCell>
                                    <TableCell className='flex flex-col items-center justify-center gap-2 w-[10rem]'>
                                        {attendance.signOut &&
                                            <>
                                                <Badge className={'bg-chart-3'}>{totalTimeWorked}</Badge>
                                                <Badge className={`px-2 ${statusClass}`}>{status}</Badge>
                                            </>
                                        }
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        )
                    })
                )}
            </Table>
        </>
    );
}

export default AttendanceTable;
