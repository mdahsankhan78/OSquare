import React from 'react'
import GoBack from './ui/GoBack'
import { useNavigate, useParams } from 'react-router-dom';
import OutlineButton from './ui/OutlineButton';
import { faBuilding, faClock, faEdit, faEnvelope, faFile, faFlag, faIdCard, faPerson, faPhone, faRightToBracket, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Profile/Header';

const Profile = () => {
    const { name, email } = useParams();

    const nameParts = name.split(" ");

    // Extract the first letter of each part of the name
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");

    return (
        <>
            <Header name={name} email={email} />
            <div className="p-4">
                <div className="pt-16 pb-8 text-black text-lg space-y-8 text-center">
                    <div className="shadow-card p-4 rounded-lg bg-gray-100 space-y-2 overflow-x-auto data-scroll">
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4 '>
                                <FontAwesomeIcon className='text-gray-700' icon={faPerson} />
                                <p>Name</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{name}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faEnvelope} />
                                <p>Email</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>{email}</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faPhone} />
                                <p>Phone</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2 '>---</p>
                        </div>
                    </div>
                    <div className="shadow-card p-4 rounded-lg bg-gray-100 space-y-2 overflow-x-auto data-scroll">
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faBuilding} />
                                <p>Department</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>---</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faFlag} />
                                <p>Designation</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>---</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faFile} />
                                <p>Reports to</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>---</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faStar} />
                                <p>Cost</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>---</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faClock} />
                                <p>Shift</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>---</p>
                        </div>
                        <div className="grid grid-cols-5 gap-x-2">
                            <div className='col-span-2 flex items-center space-x-4'>
                                <FontAwesomeIcon className='text-gray-700' icon={faIdCard} />
                                <p>Machine ID</p>
                            </div>
                            <p className='col-span-1'>:</p>
                            <p className='col-span-2'>---</p>
                        </div>
                    </div>
                </div>


                <div className="justify-center flex">
                    <OutlineButton text={'Sign out'} />
                </div>
            </div>

            <style jsx>
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