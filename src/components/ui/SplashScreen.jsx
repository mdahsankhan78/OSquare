import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../../public/images/animation2.json";

const SplashScreen = () => {
    const lottieOptions = {
        loop: true, 
        autoplay: true,
        animationData: animationData, 
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice", 
        },
      };

    return (
        <div className="flex items-center justify-center h-screen">
            <Lottie options={lottieOptions} height={100} width={200} />
        </div>
    )
}

export default SplashScreen