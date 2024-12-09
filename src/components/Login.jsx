import React, { useEffect, useState } from 'react'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from './ui/button'
import { Input2 } from './ui/input2'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { apiUrls } from './../api/apiUrls'
import { useTheme } from './ui/ThemeProvider'
import Spinner from './ui/Spinner'

const Login = () => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState(false);
    const [data, setData] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState();
    const apiUrl = apiUrls.login;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleInput = (e) => {
        setData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleNext = (e) => {
        if (!emailRegex.test(data.email)) {
            setMsg('Email must be a valid email address')
        }
        else {
            setMsg('')
            setNext(true);
        }
    }
    const handleLogin = (e) => {
        setLoading(true)
        e.preventDefault();

        axios.post(apiUrl, data)
            .then(response => {
                console.log(response);
                setMsg('')
                const token = response.data.token;
                if (token) {
                    localStorage.setItem('token', token);
                    setTimeout(() => {
                        window.location.href = `/`;

                    }, 1000);
                }
            })
            .catch(error => {
                console.error(error);

                if (error.response) {
                    if (error.response.status === 400) {
                        if (error.response.data && error.response.data.email) {
                            setMsg(error.response.data.email);
                        }
                        else if (error.response.data && error.response.data.password) {
                            setMsg(error.response.data.password);
                            setLoading(false)
                        }
                    } else {
                        setLoading(false)
                        setMsg('An error occurred. Please try again.');
                    }
                }
                else {
                    setLoading(false)
                    setMsg('Network error. Please check your connection.');
                }
            });
    };

    return (
        <>
            <div className="h-screen flex flex-col justify-center space-y-10 items-center mx-6">
                <div className="flex justify-center">
                    <img src="/images/osquare-dark.png" className="h-14 w-auto mt-10" alt="Logo" />
                </div>

                <form onSubmit={handleLogin} className="space-y-4 w-full max-w-md">
                    {next ?
                        <>
                            <Label htmlFor='pass' className='text-xl font-semibold'>Sign In</Label>
                            <Input2 id='pass' placeholder='Password' value={data.password} name='password' onChange={handleInput} icon={faEyeSlash} icon2={faEye} />
                            <p className='text-red-600'>{msg}</p>
                            <p className='cursor-pointer mb-2' onClick={() => setNext(false)}>{data.email}</p>
                            <Button type='submit' disabled={!data.password}>{loading && <Spinner />} Sign in</Button>
                        </>
                        :
                        <>
                            <Label htmlFor='email' className='text-xl font-semibold'>Sign In</Label>
                            <Input id='email' type='email' placeholder='Email, Phone or Skype' value={data.email} name='email' onChange={handleInput} icon={faEnvelope} />
                            <p className='text-red-600 mt-2'>{msg}</p>
                            <div className="mt-6">
                                <Button onClick={handleNext} disabled={!data.email}>Next</Button>
                            </div>
                        </>}
                </form>

            </div>
        </>
    )
}

export default Login
