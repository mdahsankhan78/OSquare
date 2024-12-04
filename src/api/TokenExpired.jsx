import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';

const isUserLoggedIn = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return false;
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem('token');
            return false;
        }

        return true;
    } catch (error) {
        localStorage.removeItem('token');
        return false;
    }
};

const TokenExpired = ({ onDataFetched }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());

    useEffect(() => {
        setIsLoggedIn(isUserLoggedIn())
        onDataFetched(isUserLoggedIn());
    }, [onDataFetched]);

    return null
}

export default TokenExpired