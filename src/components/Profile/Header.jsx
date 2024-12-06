import { faTh, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Search } from '../ui/input-search';
import { Link } from 'react-router-dom';
import GoBack from '../ui/GoBack';
import { ThemeToggler } from '../ui/ThemeToggler';

const Header = ({ name, email, profilePic }) => {
    const nameParts = name.split(" ");

    // Extract the first letter of each part of the name
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");

    return (
        <>
            <div className="header-radius shadow-card p-4 h-40 bg-gradient-to-r from-[#454FCA] to-[#F86C70] w-full relative">
                <div className="flex justify-between">
                    <GoBack color={'white'} />
                    <ThemeToggler/>
                </div>
                <div className="flex justify-center">
                    <div className="rounded-2xl shadow-card bg-card px-6 py-4 absolute -bottom-10 flex items-center gap-x-4">
                        {profilePic ?
                            <img src={`https://api.osquare.live/${profilePic}`} className='rounded-full h-20 w-20 ' alt="" />
                            :
                            <div className="h-20 w-20 bg-secondary rounded-full flex items-center justify-center text-white">
                                {initials}
                            </div>
                        }
                        <div>
                            <h1 className='text-xl font-semibold mt-2 text-accent'>{name}</h1>
                            <h1 className='text-xl font-semibold text-accent-foreground mb-3'>Add another account</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;
