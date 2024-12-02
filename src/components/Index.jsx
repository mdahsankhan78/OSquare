import React, { useState } from 'react'
import Header from './Index/Header'
import { useParams } from 'react-router-dom';
import Cards from './Index/Cards';
import BottomBar from './BottomBar';
import SplashScreen from './ui/SplashScreen';
import Navbar from './ui/Navbar';
import Navigation from './ui/Bar';

const Index = () => {
    const { name, email, password } = useParams();

    return (
        <>
            <Header name={name} email={email} />

            <div className="mx-4 mb-36 py-8">

                <Cards name={name} email={email}/>

            </div>
            <Navigation />


        </>
    )
}

export default Index