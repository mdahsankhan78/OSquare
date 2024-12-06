import React, { useEffect, useState } from 'react'
import GoBack from './GoBack'
import { Link, useNavigate } from 'react-router-dom'
import UserDetails from '../../api/UserDetails'
import TokenExpired from '../../api/TokenExpired'

const Header = () => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(true)
    const navigate = useNavigate()
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/login');
        }
    }, [isUserLoggedIn, navigate]);

    const handleDataFetched = (data) => {
        setUserData(data);
    };

    const [initials, setInitials] = useState('');
    useEffect(() => {
        if (userData && userData.firstName) {
            const nameParts = userData.firstName.split(" ");
            const generatedInitials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
            setInitials(generatedInitials);
        }
    }, [userData]);
    return (
        <div className="flex justify-between items-center">
            <UserDetails onDataFetched={handleDataFetched} />
            <TokenExpired onDataFetched={setisUserLoggedIn} />
            <GoBack color={'accent'} />
            <Link to={`/profile`} className="bg-secondary rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-white hover:text-white">
                {userData ? userData.profilePic ?
                    <img src={`https://api.osquare.live/${userData.profilePic}`} className='rounded-full h-12 w-12 ' alt="" />
                    : -
                    <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-white">
                        {initials}
                    </div>
                    :
                    <img src='/images/dp.png' className='rounded-full h-12 w-12 ' alt="" />
                }
            </Link>

        </div>
    )
}

export default Header