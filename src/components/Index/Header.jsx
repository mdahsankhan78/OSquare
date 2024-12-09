import { faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Search } from '../ui/input-search';
import { Link } from 'react-router-dom';
import UserDetails from '../../api/UserDetails';
import { useTheme } from './../ui/ThemeProvider';
import { Grip } from 'lucide-react';

const Header = () => {
    const { theme, setTheme } = useTheme();
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
        <div className="header-radius shadow-card p-4 bg-card">
            <UserDetails onDataFetched={handleDataFetched} />
            <div className="flex justify-between">
                <Link to={`/profile`} >
                    {userData ? userData.profilePic ?
                        <img src={`https://api.osquare.live/${userData.profilePic}`} className='rounded-full h-12 w-12 ' alt="" />
                        :
                        <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-white">
                            {initials}
                        </div>
                        :
                        <img src="/images/dp.png" alt="" className='rounded-full h-12 w-12' />
                    }
                </Link>

                <Grip className='h-8 w-8' />
            </div>
            <div className="flex justify-center ">
                {theme === 'light' ?
                    <Link to='/'>
                    <img src="/images/osquare-dark.png" className='h-14' alt="" />
                    </Link>
                    :
                    <Link to='/'>
                    <img src="/images/osquare-white.png" className='h-14' alt="" />
                    </Link>
                }
            </div>

            <Search className='mt-8' placeholder='Search' />
        </div>
    );
};

export default Header;
