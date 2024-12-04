import React, { useEffect, useState } from 'react'
import Header from './Index/Header'
import Cards from './Index/Cards';
import BottomBar from './BottomBar';
import SplashScreen from './ui/SplashScreen';
import Navigation from './ui/Bar';
import TokenExpired from '../api/TokenExpired';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const [isUserLoggedIn, setisUserLoggedIn] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isUserLoggedIn) {
            navigate('/login');
        }
    }, [isUserLoggedIn, navigate]);

    return (
        <>
            <TokenExpired onDataFetched={setisUserLoggedIn} />
            <Header />

            <div className="mx-4 mb-36 py-8">

                <Cards />

            </div>
            <Navigation />


        </>
    )
}

export default Index