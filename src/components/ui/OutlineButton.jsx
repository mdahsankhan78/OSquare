import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const OutlineButton = ({ to, text, icon, classname, ...props }) => {
  return (
    <Link
      to={to}
      className={`py-1 px-12 text-accent border-foreground border-2 rounded-md hover:text-accent ${classname}`}
      {...props}
    >    {text}
    </Link>
  )
}

export default OutlineButton
