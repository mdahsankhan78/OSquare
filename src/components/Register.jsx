import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Input2 } from './ui/input2'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [next, setNext] = useState(false);
    const [data, setData] = useState({ name: '', email: '', password: '', accept: false });
    const [msg, setMsg] = useState('');

    // Regular Expressions for Validation
    const nameRegex = /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,}){0,2}$/; // Three letters minimum, max 3 words
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation
    const passwordRegex = /.{8,}/; // At least 8 characters

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const handleNext = (e) => {
        e.preventDefault();

        if (!nameRegex.test(data.name)) {
            setMsg('Name must be at least 3 letters and no more than 3 words');
        } else if (!emailRegex.test(data.email)) {
            setMsg('Please provide a valid email address');
        } else {
            setMsg('');
            setNext(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check password validity
        if (!passwordRegex.test(data.password)) {
            setMsg('Password must be at least 8 characters');
            return;
        }

        setTimeout(() => {
            window.location.href = `/home/${data.name}/${data.email}/${data.password}`;
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
                            <div>
                                <Label htmlFor='pass' className='text-xl font-semibold'>Create Account</Label>
                                <p className='text-black mt-2'>Enter the password you would like to use with your account</p>
                            </div>
                            <Input2 id='pass' placeholder='Password' value={data.password} name='password' onChange={handleInput} icon={faEyeSlash} icon2={faEye} />
                            <div className="my-6 space-y-4">
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="accept"
                                        checked={data.accept}
                                        onChange={handleInput}
                                        className="h-4 w-5 appearance-none checked:appearance-auto border-2 border-gray-300 rounded-sm focus:outline-none"
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I would like information, tips, and offers about OSquare Products and Services
                                    </label>
                                </div>

                                <p className='text-black text-sm'>Choosing Next means that you agree to the OSquare Service Agreement and Privacy and cookies statement. </p>

                                <p className='text-red-600 mt-4'>{msg}</p>

                                <Button disabled={!data.accept || !data.password} type='submit'>Create</Button>
                            </div>
                        </>
                        :
                        <>
                            <Label htmlFor='email' className='text-xl font-semibold'>Create Account</Label>
                            <Input id='name' type='text' placeholder='Username' value={data.name} name='name' onChange={handleInput} icon={faPerson} />
                            <Input id='email' type='email' placeholder='Email, Phone or Skype' value={data.email} name='email' onChange={handleInput} icon={faEnvelope} />
                            <div className="mt-6">
                                <div className="mb-8">
                                    <p className="text-black font-normal">Already have an account? <Link to={'/login'} className="font-semibold text-primary">Sign in</Link></p>
                                    <p className='text-red-600 mt-4'>{msg}</p>
                                </div>

                                <Button onClick={handleNext} className='' disabled={!data.email || !data.name}>Next</Button>
                            </div>
                        </>
                    }
                </form>
            </div>
        </>
    )
}

export default Register;
