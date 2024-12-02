import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Input2 } from './ui/input2'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

const Login = () => {
    const [next, setNext] = useState(false);
    const [data, setData] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState('');

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        return () => {
            document.body.style.overflow = ''; // Revert back to original state when component unmounts
        };
    }, []);

    const handleInput = (e) => {
        setData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleNext = (e) => {
        if (data.email === '') {
            setMsg('Please type your Email address')
        }
        else {
            setMsg('')
            setNext(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = `/home/Ahsan Khan/${data.email}/${data.password}`;
        }, 1000);
    }

    return (
        <>
            <div className="h-screen flex flex-col justify-center space-y-10 items-center mx-6">
                <div className="relative flex justify-center">
                    <img src="/images/osquare-dark.png" className="h-14 w-auto mt-10" alt="Logo" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
                    {next ?
                        <>
                            <p className='cursor-pointer' onClick={() => setNext(false)}>{data.email}</p>
                            <Label htmlFor='pass' className='text-xl font-semibold'>Sign In</Label>
                            <Input2 id='pass' placeholder='Password' value={data.password} name='password' onChange={handleInput} icon={faEyeSlash} icon2={faEye} />
                            <div className="mt-6">
                                <div className="mb-8">
                                    <p className="text-black font-normal">Forgot Password? <br /><p to={'/register'} className="font-semibold text-primary">Email code to {data.email}</p></p>
                                    <p className='text-red-600 mt-4'>{msg}</p>
                                </div>

                                <Button type='submit' disabled={!data.password}>Sign in</Button>
                            </div>
                        </>
                        :
                        <>
                            <Label htmlFor='email' className='text-xl font-semibold'>Sign In</Label>
                            <Input id='email' type='email' placeholder='Email, Phone or Skype' value={data.email} name='email' onChange={handleInput} icon={faEnvelope} />
                            <div className="mt-6">
                                <div className="mb-8">
                                    <p className="text-black font-normal">Don't have an account? <Link to={'/register'} className="font-semibold text-primary">Create one</Link></p>
                                    <p className='text-red-600 mt-4'>{msg}</p>
                                </div>


                                <Button onClick={handleNext} className='' disabled={!data.email}>Next</Button>
                            </div>
                        </>}
                </form>

            </div>
        </>
    )
}

export default Login