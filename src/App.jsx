import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Splash from "./components/Authentication/Splash"
import Login from "./components/Login"
import Register from "./components/Register"
import Index from "./components/Index"
import Profile from "./components/Profile"
import SplashScreen from "./components/ui/SplashScreen"
import { useState } from "react"
import Dashboard from "./components/Dashboard"

function App() {
  const [animate, setAnimate] = useState(true);

  const timer = setTimeout(() => {
    setAnimate(false);
  }, 4000);
  return (
    animate ? (<SplashScreen />) :
      (
        <>
          <Router>
            <Routes>
              <Route path="/home" element={<Splash />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Index />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </>)
  )
}

export default App
