import React, { useEffect, useState } from 'react'
import { ExpandableCardDemo } from './Dashboard/Card';
import Navigation from './ui/Bar';
import TokenExpired from '../api/TokenExpired';
import Header from './ui/Header';

const Approvals = () => {


    return (
        <>
            <div className='p-4'>
                <Header />

                <div className="my-10 pb-10">
                    <div className="flex items-center">
                        <h1 className='text-accent text-2xl font-semibold'>Approvals</h1>
                    </div>
                </div>
            </div>
            <Navigation />


        </>
    )
}

export default Approvals