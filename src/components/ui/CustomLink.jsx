import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({to, text, className}) => {
  return (
    <Link to={to} className={`text-white hover:text-white py-2 bg-gradient-to-r from-[#454FCA] to-[#F86C70] border-none inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text- font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 ${className}`}>{text}</Link>
  )
}

export default CustomLink