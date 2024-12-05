import React, { useEffect, useState } from 'react'
import GoBack from './ui/GoBack'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ExpandableCardDemo } from './Dashboard/Card';
import Navigation from './ui/Bar';
import UserDetails from '../api/UserDetails';
import TokenExpired from '../api/TokenExpired';

const Dashboard = () => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/login');
        }
    }, [isUserLoggedIn, navigate]);

    const [userData, setUserData] = useState(null);
    const [initials, setInitials] = useState('');

    const handleDataFetched = (data) => {
        setUserData(data);
    };


    useEffect(() => {
        if (userData && userData.name) {
            const nameParts = userData.firstName.split(" ");
            const generatedInitials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
            setInitials(generatedInitials);
        }
    }, [userData]);

    return (
        <>
            <TokenExpired onDataFetched={setisUserLoggedIn} />
            <div className='p-4'>
                <UserDetails onDataFetched={handleDataFetched} />
                <div className="flex justify-between items-center">
                    <GoBack color={'black'} />
                    <Link to={`/profile`} className="bg-secondary rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-white hover:text-white">
                        {userData && userData.profilePic ?
                            <img src={`https://api.osquare.live/${userData.profilePic}`} className='rounded-full h-12 w-12 ' alt="" />
                            :
                            <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-white">
                                {initials}
                            </div>
                        }
                    </Link>

                </div>

                <ExpandableCardDemo />

            </div>
            <Navigation />
        </>
    )
}

export default Dashboard