import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ name, email }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <Link to={`/attendance`} className="flex flex-col items-center rounded-2xl shadow-card p-4 bg-card">
                    <img src="/images/icon-images/attendance.png" className='h-12' alt="" />
                    <h1 className='text-lg text-foreground'>Attendance</h1>
                </Link  >

                <Link to={`/dashboard`} className="flex flex-col items-center rounded-2xl shadow-card p-4 bg-card">
                    <img src="/images/icon-images/dashboard.png" className='h-12' alt="" />
                    <h1 className='text-lg text-foreground'>Dashboard</h1>
                </Link>

                <Link to={`/approvals`} className="flex flex-col items-center rounded-2xl shadow-card p-4 bg-card">
                    <img src="/images/icon-images/approval.png" className='h-12' alt="" />
                    <h1 className='text-lg text-foreground'>Approval</h1>
                </Link>


            </div>
        </>
    )
}

export default Cards