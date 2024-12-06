import React, { useEffect, useState } from 'react'
import GoBack from './ui/GoBack'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ExpandableCardDemo } from './Dashboard/Card';
import Navigation from './ui/Bar';
import UserDetails from '../api/UserDetails';
import TokenExpired from '../api/TokenExpired';
import Header from './ui/Header';

const Dashboard = () => {


    return (
        <>
            <div className='p-4'>
                <Header />
                <ExpandableCardDemo />
            </div>
            <Navigation />
        </>
    )
}

export default Dashboard