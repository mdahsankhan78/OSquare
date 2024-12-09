import React, { useRef, useState } from "react";
import CustomLink from "../ui/CustomLink";
import { faBuilding, faClock, faEnvelope, faFile, faFlag, faIdCard, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GetEmployees from "../../api/GetEmployees";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "./../ui/drawer"
import axios from 'axios';
import Spinner from './../ui/Spinner'

export function ExpandableCardDemo() {
    const [userData, setUserData] = useState(null);
    const [shift, setShift] = useState(null);

    const handleDataFetched = (data) => {
        setUserData(data);
    };

    const [activeId, setActiveId] = useState(null);
    const ref = useRef(null);
    const activeCard = userData && userData.find((user) => user.id === activeId);

    const token = localStorage.getItem('token');

    const getShift = (Id) => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.osquare.live/api/Shift/GetById?id=${Id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setShift(response.data);
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchData();
    }

    return (
        <div className="my-10 pb-10">
            <GetEmployees onDataFetched={handleDataFetched} />

            <div className="flex items-center">
                <h1 className='text-accent text-2xl font-semibold'>Employees</h1>
                <CustomLink text={'Add Employee'} className='ml-auto px-6' />
            </div>


            {userData ?
                <Drawer>
                    <ul className="mx-auto w-full gap-4 mt-4">
                        {userData && userData.map((user) => (
                            <DrawerTrigger asChild>
                                <div
                                    onClick={() => {
                                        getShift(user.shiftId);
                                        setActiveId(user.id);
                                    }
                                    }
                                    key={`card-${user.id}`}
                                    className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-card cursor-pointer border-b-2 border-gray-300">
                                    <div className="flex gap-4 flex-row">
                                        {user.profilePic ?
                                            <img src={`https://api.osquare.live/${user.profilePic}`} className="rounded-full h-12 w-12" alt="" />
                                            :
                                            (() => {
                                                const nameParts = user.firstName.split(" ");
                                                const generatedInitials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
                                                return <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-white">
                                                    {generatedInitials}
                                                </div>;
                                            })()
                                        }

                                        <div>
                                            <h3
                                                className="font-medium text-neutral-800 dark:text-neutral-200 md:text-left">
                                                {user.firstName} {user.lastName}
                                            </h3>
                                            <p
                                                className="text-neutral-600 dark:text-neutral-400 md:text-left">
                                                {user.designation}
                                            </p>
                                        </div>
                                    </div>

                                    <button className="flex items-center justify-center underline" >
                                        Details
                                    </button>

                                </div>
                            </DrawerTrigger>
                        ))}
                    </ul>
                    {activeCard ? (
                        <DrawerContent>
                            <div className="grid place-items-center">
                                <div
                                    ref={ref}
                                    className="w-full h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-card sm:rounded-3xl overflow-y-auto dashboard-scroll">
                                    {shift && shift.id === activeCard.shiftId ?
                                        <>
                                            <div className="flex flex-col items-center border-b-2 border-border py-6">
                                                {activeCard.profilePic ?
                                                    <img src={`https://api.osquare.live/${activeCard.profilePic}`} className="rounded-full h-16 w-16" alt="" />
                                                    :
                                                    (() => {
                                                        const nameParts = activeCard.firstName.split(" ");
                                                        const generatedInitials = nameParts.map(part => part.charAt(0).toUpperCase()).join("");
                                                        return <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center text-white">
                                                            {generatedInitials}
                                                        </div>;
                                                    })()
                                                }

                                                <h1 className='text-2xl font-semibold mt-2 text-accent'>{activeCard.firstName} {activeCard.lastName}</h1>
                                                <h1 className='text-xl font-semibold text-accent-foreground mb-3'>{activeCard.designation}</h1>
                                            </div>

                                            <div>
                                                <div className="p-8 text-accent text-lg space-y-4 text-center overflow-x-auto data-scroll">
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faEnvelope} />
                                                            <p>Email</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{activeCard.email}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faPhone} />
                                                            <p>Phone</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>+92 {activeCard.contact}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faBuilding} />
                                                            <p>Department</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{activeCard.department}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faFlag} />
                                                            <p>Designation</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{activeCard.designation}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faFile} />
                                                            <p>Reports to</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{activeCard.reportsTo ? activeCard.reportsTo : '---'}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faStar} />
                                                            <p>Cost</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{activeCard.cost}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faClock} />
                                                            <p>Shift</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{shift ? shift.title : ''}</p>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-x-2">
                                                        <div className='col-span-2 flex items-center space-x-4'>
                                                            <FontAwesomeIcon icon={faIdCard} />
                                                            <p>Machine ID</p>
                                                        </div>
                                                        <p className='col-span-1'>:</p>
                                                        <p className='col-span-2'>{activeCard.machineId}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <div className="h-[40rem] justify-center items-center flex">
                                            <Spinner />
                                        </div>
                                    }
                                </div>
                            </div>
                        </DrawerContent>

                    ) : null}
                </Drawer>
                :
                <div className="h-40 justify-center items-center flex">
                    <Spinner />
                </div>
            }

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
                    /* styles.css */
                .dashboard-scroll::-webkit-scrollbar {
                    background-color: hsl(var(--white));
                    width: 2px;
                }

                .dashboard-scroll::-webkit-scrollbar-thumb {
                    background-color: hsl(var(--foreground));
                    border: 2px solidhsl(var(--foreground));
                    border-radius:0 0 10px 10px;
                }
                    

                `}
            </style>
        </div >
    );
}

