import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../ui/use-outside-click";
import CustomLink from "../ui/CustomLink";
import { faBuilding, faClock, faEdit, faEnvelope, faFile, faFlag, faIdCard, faPhone, faRightToBracket, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ExpandableCardDemo() {
    const [activeId, setActiveId] = useState(null); // Store the id of the active card
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActiveId(null); // Close the active card when Escape is pressed
            }
        }

        if (activeId) {
            document.body.style.overflow = "hidden"; // Disable scrolling when a card is active
        } else {
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [activeId]);

    useOutsideClick(ref, () => setActiveId(null)); // Close the active card when clicking outside

    // Find the active card based on the activeId
    const activeCard = cards.find((card) => card.id === activeId);

    return (
        <div className="my-20">
            <div className="flex items-center">
                <h1 className='text-black text-2xl font-semibold'>Employees</h1>
                <CustomLink text={'Add Employee'} className='ml-auto px-6' />
            </div>

            <AnimatePresence>
                {activeCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10" />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {activeCard ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${activeCard.id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActiveId(null)}>
                            <CloseIcon />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${activeCard.id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-y-auto dashboard-scroll">
                            <motion.div layoutId={`image-${activeCard.id}`} className="flex flex-col items-center border-b-2 border-border py-6">
                                <div className="bg-secondary shadow-card rounded-full h-28 w-28 flex items-center justify-center text-3xl font-bold text-white">
                                    {activeCard.dp}
                                </div>

                                <motion.h1 layoutId={`name-${activeCard.id}`} className='text-2xl font-semibold mt-2 text-black'>{activeCard.name}</motion.h1>
                                <motion.h1 layoutId={`designation-${activeCard.id}`} className='text-xl font-semibold text-foreground mb-3'>{activeCard.designation}</motion.h1>
                            </motion.div>

                            <div>
                                <div className="p-8 text-black text-lg space-y-4 text-center overflow-x-auto data-scroll">
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faEnvelope} />
                                            <p>Email</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.email}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faPhone} />
                                            <p>Phone</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.contact}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faBuilding} />
                                            <p>Department</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.department}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faFlag} />
                                            <p>Designation</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.designation}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faFile} />
                                            <p>Reports to</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.report}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faStar} />
                                            <p>Role</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.role}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faClock} />
                                            <p>Shift</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.shift}</p>
                                    </div>
                                    <div className="grid grid-cols-5 gap-x-2">
                                        <div className='col-span-2 flex items-center space-x-4'>
                                            <FontAwesomeIcon className='text-gray-700' icon={faIdCard} />
                                            <p>Machine ID</p>
                                        </div>
                                        <p className='col-span-1'>:</p>
                                        <p className='col-span-2'>{activeCard.id}</p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                                        {typeof activeCard.content === "function"
                                            ? activeCard.content()
                                            : activeCard.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className="mx-auto w-full gap-4 mt-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.id}`}
                        key={`card-${card.id}`}
                        onClick={() => setActiveId(card.id)} // Set active card based on id
                        className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer border-b-2 border-gray-300">
                        <div className="flex gap-4 flex-row">
                            <motion.div layoutId={`image-${card.id}`}>
                                <div className="bg-secondary shadow-card rounded-full h-14 w-14 flex items-center justify-center text-2xl font-bold text-white">
                                    {card.dp}
                                </div>
                            </motion.div>

                            <div>
                                <motion.h3
                                    layoutId={`name-${card.id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 md:text-left">
                                    {card.name}
                                </motion.h3>
                                <motion.p
                                    layoutId={`designation-${card.id}`}
                                    className="text-neutral-600 dark:text-neutral-400 md:text-left">
                                    {card.designation}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layout
                            className="flex items-center justify-center bg-white shadow-cta hover:shadow-cta-hover h-10 w-10 rounded-full"
                            onClick={() => setActiveId(card.id)} // Set active card on click
                        >
                            {card.ctaText}
                        </motion.button>

                    </motion.div>
                ))}
            </ul>

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
        </div>
    );
}


export const CloseIcon = () => {
    return (
        (<motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>)
    );
};

const cards = [
    {
        id: 101,
        name: "Faisal Rafique",
        email: "faisal@gmail.com",
        contact: '03128974399',
        report: "Faisal Rafique",
        designation: "Team Lead",
        department: "Developer",
        role: "Developer",
        shift: "Morning",
        dp: "FR",
        ctaText: "Details",
    },
    {
        id: 103,
        name: "Mola Bux",
        email: "bux@gmail.com",
        contact: '03128974399',
        report: "Faisal Rafique",
        designation: "Developer",
        department: "Developer",
        role: "Developer",
        shift: "Morning",
        dp: "MB",
        ctaText: "Details",
    },
    {
        id: 104,
        name: "Huzaifa",
        email: "huzaifa@gmail.com",
        contact: '03128974399',
        report: "Faisal Rafique",
        designation: "UI / UX",
        department: "Developer",
        role: "Developer",
        shift: "Morning",
        dp: "HK",
        ctaText: "Details",
    },
    {
        id: 102,
        name: "Abdul Majeed",
        email: "majeed@gmail.com",
        contact: '03128974399',
        report: "Faisal Rafique",
        designation: "Developer",
        department: "Developer",
        role: "Developer",
        shift: "Morning",
        dp: "AM",
        ctaText: "Details",
    },
];
