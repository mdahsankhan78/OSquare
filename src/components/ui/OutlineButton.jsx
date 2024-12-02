import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const OutlineButton = ({ to, text, icon, classname }) => {
  return (
    <Link
      to={to}
      className={`py-1 px-12 text-black border-foreground border-2 rounded-md hover:text-black ${classname}`}
    >    {text}
    </Link>
  )
}

export default OutlineButton
