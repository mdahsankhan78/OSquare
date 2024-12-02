import React from 'react'
import GoBack from './ui/GoBack'
import { Link, useParams } from 'react-router-dom';
import { ExpandableCardDemo } from './Dashboard/Card';

const Dashboard = () => {
    const { name, email, password } = useParams();
    const nameParts = name.split(" ");

    // Extract the first letter of each part of the name
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
    return (
        <div className='p-4'>
            <div className="flex justify-between items-center">
                <GoBack color={'black'} />
                <Link to={`/profile/${name}/${email}`} className="bg-secondary rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-white hover:text-white">
                    {initials}
                </Link>

            </div>

            <ExpandableCardDemo/>
        </div>
    )
}

export default Dashboard