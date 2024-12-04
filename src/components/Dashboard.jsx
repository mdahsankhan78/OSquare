import React from 'react'
import GoBack from './ui/GoBack'
import { Link, useParams } from 'react-router-dom';
import { ExpandableCardDemo } from './Dashboard/Card';
import Navigation from './ui/Bar';

const Dashboard = () => {
    return (
        <>
            <div className='p-4'>
                <div className="flex justify-between items-center">
                    <GoBack color={'black'} />
                    <Link to={`/profile`} className="bg-secondary rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-white hover:text-white">
                        {/* {initials} */}
                    </Link>

                </div>

                <ExpandableCardDemo />

            </div>
            <Navigation />
        </>
    )
}

export default Dashboard