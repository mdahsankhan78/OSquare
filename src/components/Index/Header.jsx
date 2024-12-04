import { faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Search } from '../ui/input-search';
import { Link } from 'react-router-dom';
import UserDetails from '../../api/UserDetails';

const Header = () => {
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
        <div className="header-radius shadow-card p-4">
            <UserDetails onDataFetched={handleDataFetched} />
            <div className="flex justify-between items-center">
                <Link to={`/profile`} className="">
                    {userData != null && <img src={`https://api.osquare.live/${userData.profilePic}`} className='rounded-full h-12 w-12 ' alt="" />}
                </Link>

                <div className="">
                    <img src="/images/menu-icon.png" className='h-8' alt="" />
                </div>
            </div>
            <div className="flex justify-center ">
                <img src="/images/osquare-dark.png" className="h-14 w-auto " alt="Logo" />
            </div>

            <Search className='mt-8' placeholder='Search' />
        </div>
    );
};

export default Header;
