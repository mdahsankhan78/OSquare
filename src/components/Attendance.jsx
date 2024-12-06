import React from 'react'
import Header from './ui/Header'
import Navigation from './ui/Bar'
import CustomLink from './ui/CustomLink'
import AttendanceTable from './Attendance/Table'

const Attendance = () => {
    return (
        <>
            <div className='p-4 pb-16'>
                <Header />
                <div className="my-10">
                    <AttendanceTable/>
                </div>
            </div>
            <Navigation />
        </>
    )
}

export default Attendance