import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faCamera, faHome, faCog, faComment, faPerson } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navigation = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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
        { name: "Home", icon: faHome, dis: "translate-x-0" },
        { name: "Profile", icon: faPerson, dis: "translate-x-16" },
        { name: "Message", icon: faComment, dis: "translate-x-32" },
        { name: "Photos", icon: faCamera, dis: "translate-x-48" },
        { name: "Settings", icon: faCog, dis: "translate-x-64" },
    ];
    const [active, setActive] = useState(0);
    return (
        <div className={`fixed bottom-0 bg-gradient-to-r from-[#454FCA] to-[#F86C70] px-6 bar-radius text-white w-full ${isKeyboardOpen ? 'hidden' : ''}`}>
            <ul className="flex relative justify-between">

                <span
                    className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
                ></span>
                <span
                    className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
                ></span>
                {Menus.map((menu, i) => (
                    <li key={i} className="w-16">
                        {active === i &&
                            <motion.div layoutId='link-1' class="absolute bottom-10 h-16 w-16 rounded-full border-4 border-white bg-gradient-to-r from-[#454FCA] to-[#F86C70]">
                            </motion.div>
                        }
                        <a
                            className="flex flex-col text-center pt-6 text-white hover:text-white "
                            onClick={() => setActive(i)}
                        >
                            <span
                                className={`text-xl z-10 cursor-pointer duration-500 ${i === active && "-mt-8 text-white"
                                    }`}
                            >
                                <FontAwesomeIcon icon={menu.icon} />
                            </span>
                            <span
                                className={` ${active === i
                                    ? "translate-y-4 duration-700 opacity-100"
                                    : "opacity-0 translate-y-10"
                                    } text-white`}
                            >
                                {menu.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default Navigation;