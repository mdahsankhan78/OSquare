import React, { useEffect, useState } from 'react'
import GoBack from './ui/GoBack'
import { useNavigate, useParams } from 'react-router-dom';
import OutlineButton from './ui/OutlineButton';
import { faBuilding, faClock, faEnvelope, faFile, faFlag, faIdCard, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Profile/Header';
import UserDetails from '../api/UserDetails';
import GetShift from '../api/GetShift';
import Spinner from './ui/Spinner';
import TokenExpired from '../api/TokenExpired';
import { Clock, Flag, HardDrive, Mail, Phone, RouteIcon, Star, User, Waypoints } from 'lucide-react';
import ProfileTabs from './Profile/ProfileTabs';

const Profile = () => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/login');
        }
    }, [isUserLoggedIn, navigate]);

    const [userData, setUserData] = useState(null);
    const [shift, setShift] = useState(null);

    const handleDataFetched = (data) => {
        setUserData(data);
    };
    const handleShiftFetched = (shift) => {
        setShift(shift);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setTimeout(() => {
            window.location.href = `/login`;
        }, 1000);
    }
    

    return (
        <>
            <TokenExpired onDataFetched={setisUserLoggedIn} />
            <UserDetails onDataFetched={handleDataFetched} />
            {userData ?
                <>
                    <GetShift onShiftFetched={handleShiftFetched} Id={userData.shiftId} />
                    <Header name={userData.firstName} email={userData.email} profilePic={userData.profilePic} />
                    <div className="p-4">
                        <div className="pt-16 pb-8 text-lg space-y-8 text-center">
                            <div className="shadow-card p-4 rounded-lg bg-card space-y-2 overflow-x-auto data-scroll text-accent">
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4 '>
                                        <User className='h-5' />
                                        <p>Full Name</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.firstName} {userData.lastName}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <Mail className='h-5' />
                                        <p>Email</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.email}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <Phone className='h-5'/>
                                        <p>Contact</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>+92 {userData.contact}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <Waypoints className='h-5'/>
                                        <p>Department</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.department}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <Flag className='h-5'/>
                                        <p>Designation</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.designation}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <RouteIcon className='h-5'/>
                                        <p>Reports to</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.reportsTo}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <Star className='h-5'/>
                                        <p>Cost</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.cost}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <Clock className='h-5'/>
                                        <p>Shift</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{shift && shift.title}</p>
                                </div>
                                <div className="grid grid-cols-5 gap-x-2">
                                    <div className='col-span-2 flex items-center space-x-4'>
                                        <HardDrive className='h-5'/>
                                        <p>Machine ID</p>
                                    </div>
                                    <p className='col-span-1'>:</p>
                                    <p className='col-span-2'>{userData.machineId}</p>
                                </div>
                            </div>
                        </div>

                        {/* //All employee details here */}
                        <ProfileTabs/>


                        <div className="justify-center flex my-4">
                            <OutlineButton onClick={logout} text={'Sign out'} />
                        </div>
                    </div>
                </>

                :

                <div className="h-screen flex items-center justify-center">
                    <Spinner />
                </div>
            }

            <style>
                {`
                /* styles.css */
                .data-scroll::-webkit-scrollbar {
                    background-color: hsl(var(--white));
                    height: 2px;
                }

                .data-scroll::-webkit-scrollbar-thumb {
                    background-color: hsl(var(--foreground));
                    border: 2px solidhsl(var(--foreground));
                    border-radius:0 0 10px 10px;
                }
                `}
            </style>
        </>
    )
}

export default Profile