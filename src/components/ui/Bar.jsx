import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faHome, faUser, faTachometerAlt, faCheckCircle, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const path = window.location.pathname;
    const handleResize = () => {
        const isKeyboardVisible = window.innerHeight < 400;
        setIsKeyboardOpen(isKeyboardVisible);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const Menus = [
        { name: "Dashboard", icon: faTachometerAlt, to: '/dashboard' },
        { name: "Profile", icon: faUser, to: '/profile' },
        { name: "Home", icon: faHome, to: '/' },
        { name: "Attendance", icon: faUserCheck, to: '/attendance' },
        { name: "Approvals", icon: faCheckCircle, to: '/approvals' },
    ];
    return (
        <div className={`fixed bottom-0 bg-gradient-to-r from-[#454FCA] to-[#F86C70] px-6 bar-radius text-white w-full bottombar ${isKeyboardOpen ? 'hidden' : ''}`}>
            <ul className="flex relative justify-between">

                {Menus.map((menu, i) => (
                    <li key={i} className="w-16">
                        {path === menu.to &&
                            <motion.div layoutId='link-1' class="absolute bottom-10 h-16 w-16 rounded-full border-4 border-background bg-gradient-to-r from-[#454FCA] to-[#F86C70] linkactive">  
                            </motion.div>
                        }
                        <Link
                            to={menu.to}
                            className="flex flex-col text-center pt-6 text-white hover:text-white ">
                            <motion.span
                                className="text-xl z-10 cursor-pointer"
                                animate={{
                                    marginTop: path === menu.to ? '-2rem' : '0',
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                <FontAwesomeIcon icon={menu.icon} />
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, translateY: 30 }}
                                animate={{ opacity: path === menu.to ? 1 : 0, translateY: path === menu.to ? 20 : 30 }}
                                transition={{ duration: 0.5 }}>
                                {menu.name}
                            </motion.span>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>
                {`
                .linkactive::before
                {
                content:'';
                position:absolute;
                top:43%;
                left:-22px;
                width:22px;
                height:20px;
                background:transparent;
                border-top-right-radius:30px;
                box-shadow:0px -10px 0 0 hsl(var(--background));
                }

                .linkactive::after
                {
                content:'';
                position:absolute;
                top:43%;
                right:-22px;
                width:22px;
                height:20px;
                background:transparent;
                border-top-left-radius:30px;
                box-shadow:0px -10px 0 0 hsl(var(--background));
                }
                .bottombar{
                box-shadow:0px -10px 0 0 hsl(var(--background));
                }
                `}
            </style>
        </div >
    );
};

export default Navigation;