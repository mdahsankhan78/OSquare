import React, { useEffect, useState } from 'react'
import GoBack from './ui/GoBack'
import { useNavigate, useParams } from 'react-router-dom';
import OutlineButton from './ui/OutlineButton';
import { faBuilding, faClock, faEdit, faEnvelope, faFile, faFlag, faIdCard, faPerson, faPhone, faRightToBracket, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Profile/Header';
import UserDetails from '../api/UserDetails';
import GetShift from '../api/GetShift';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [shift, setShift] = useState(null);

    const handleDataFetched = (data) => {
        setUserData(data);
    };
    const handleShiftFetched = (shift) => {
        setShift(shift);
    };
    
    return (
        <>
            <UserDetails onDataFetched={handleDataFetched} />
            {userData != null &&
            <>
            <GetShift onShiftFetched={handleShiftFetched} Id={userData.shiftId}/>
            <Header name={userData.firstName} email={userData.email} profilePic={userData.profilePic}/>
            <div className="p-4">
                <div className="pt-16 pb-8 text-black text-lg space-y-8 text-center">
                    <div className="shadow-card p-4 rounded-lg bg-gray-100 space-y-2 overflow-x-auto data-scroll">
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4 '>
                                <FontAwesomeIcon className='text-gray-700' icon={faPerson} />
                                <p>Name</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.firstName}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faEnvelope} />
                                <p>Email</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.email}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faPhone} />
                                <p>Phone</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2 '>+92 {userData.contact}</p>
                        </div>
                    </div>
                    <div className="shadow-card p-4 rounded-lg bg-gray-100 space-y-2 overflow-x-auto data-scroll">
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faBuilding} />
                                <p>Department</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.department}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faFlag} />
                                <p>Designation</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.designation}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faFile} />
                                <p>Reports to</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.reportsTo}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faStar} />
                                <p>Cost</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.cost}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faClock} />
                                <p>Shift</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{shift && shift.title}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faIdCard} />
                                <p>Machine ID</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{userData.machineId}</p>
                        </div>
                    </div>
                </div>


                <div className="justify-center flex">
                    <OutlineButton text={'Sign out'} />
                </div>
            </div>
            </>
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