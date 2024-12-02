import { faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Search } from '../ui/input-search';
import { Link } from 'react-router-dom';

const Header = ({ name, email }) => {
    const nameParts = name.split(" ");

    // Extract the first letter of each part of the name
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");

    return (
        <div className="header-radius shadow-card p-4">
            <div className="flex justify-between items-center">
                <Link to={`/profile/${name}/${email}`} className="bg-secondary rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold text-white hover:text-white">
                    {initials}
                </Link>
                
                <div className="">
                    <img src="/images/menu-icon.png" className='h-8' alt="" />
                </div>
            </div>
            <div className="flex justify-center ">
                <img src="/images/osquare-dark.png" className="h-14 w-auto " alt="Logo" />
            </div>

                <Search className='mt-8' placeholder='Search'/>
        </div>
    );
};

export default Header;
