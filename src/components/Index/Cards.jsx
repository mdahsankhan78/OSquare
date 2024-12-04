import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ name, email }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <Link to={`/profile`} className="flex flex-col items-center rounded-2xl shadow-card p-4">
                    <img src="/images/icon-images/profile.png" className='h-12' alt="" />
                    <h1 className='text-lg text-foreground'>Profile</h1>
                </Link  >

                <Link to={`/dashboard`} className="flex flex-col items-center rounded-2xl shadow-card p-4">
                    <img src="/images/icon-images/dashboard.png" className='h-12' alt="" />
                    <h1 className='text-lg text-foreground'>Dashboard</h1>
                </Link>

                <Link to={`/profile`} className="flex flex-col items-center rounded-2xl shadow-card p-4">
                    <img src="/images/icon-images/approval.png" className='h-12' alt="" />
                    <h1 className='text-lg text-foreground'>Approval</h1>
                </Link>


            </div>
        </>
    )
}

export default Cards