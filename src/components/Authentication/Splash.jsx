import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import CustomLink from '../ui/CustomLink'

const Splash = () => {
    return (
        <div className="mx-6 min-h-screen text-center h-screen flex flex-col justify-center">
            {/* First Image - stays at the top */}
            <div className="w-full flex justify-center ">
           <div className="absolute top-0">
                <img src="/images/osquare-dark.png" className="h-14 w-auto mt-10" alt="Logo" />
            </div>
           </div>

            <img src="/images/auth_splash1.png" className="h-40 absolute right-6 top-10" alt="" />

            <div className="space-y-4 mt-20">

                {/* Splash Text and Images */}
                <div className="mb-10 flex flex-col items-center">
                    <img src="/images/auth_splash2.png" className="h-60" alt="" />
                    <p className="text-black px-10">All your content and tools in one place. Capture and create beautiful content. Ask, learn, and share.</p>
                </div>

                {/* Action Links */}
                <div className="w-full">
                    <CustomLink to={'/login'} text={'Sign in with Email or Phone'} className={'w-full'} />

                    <div className="mt-6">
                        <p className="text-black font-normal">Don't have an account? <Link to={'/register'} className="font-semibold text-primary">Create one</Link></p>
                        <p className="underline text-black font-semibold mt-2">Terms of use</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash
