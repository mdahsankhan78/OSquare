import React, { useState, useEffect } from 'react';

const BottomBar = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    // Function to check window height and toggle keyboard visibility
    const handleResize = () => {
        const isKeyboardVisible = window.innerHeight < 400;  // Adjust this threshold based on your needs
        setIsKeyboardOpen(isKeyboardVisible);
    };

    useEffect(() => {
        // Check the window height when the component is mounted
        handleResize();
        
        // Listen for window resize event to detect keyboard open/close
        window.addEventListener('resize', handleResize);

        // Cleanup event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 right-0 mx-2 mb-2 px-2 flex-col items-center py-2 bg-gradient-to-r from-[#454FCA] to-[#F86C70] shadow-lg rounded-full text-white max-w-lg ${isKeyboardOpen ? 'hidden' : ''}`}>
            <div className="flex items-center space-x-4">
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center text-white group-hover:text-white w-full">
                        <span className="flex flex-col items-center px-1 pt-1 pb-1 space-y-2">
                            <img src="/images/bottom-bar (2).png" className='h-5 w-5' alt="" />
                            <span className="block text-xs">Home</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center text-white group-hover:text-white w-full ">
                        <span className="flex flex-col items-center space-y-2 px-1 pt-1 pb-1">
                            <img src="/images/bottom-bar (1).png" className='h-5 w-5' alt="" />
                            <span className="block text-xs">Attendance</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center text-white group-hover:text-white w-full ">
                        <span className="flex flex-col items-center px-1 pt-1 pb-1">
                            <img src="/images/bottom-bar (3).png" className='h-7 w-7' alt="" />
                            <span className="block text-xs">Search</span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center text-white group-hover:text-white w-full ">
                        <span className="flex flex-col items-center space-y-2 px-1 pt-1 pb-1">
                            <img src="/images/bottom-bar (4).png" className='h-5 w-5' alt="" />
                            <span className="block text-xs">Settings</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;
