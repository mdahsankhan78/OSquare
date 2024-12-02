import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const GoBack = ({ to , color}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="cursor-pointer" onClick={handleGoBack}>
        <Link to={to}>
          <FontAwesomeIcon icon={faArrowLeft} className={`h-7 text-${color}`} />
        </Link>
      </div>
    </>
  )
}

export default GoBack