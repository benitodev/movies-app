import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Options {
  returnBack?: boolean,
  redirectToHome?: boolean
}
const Redirect = ({ options } : {options: Options}) => {
  const navigate = useNavigate()

  if (options.returnBack) {
    return (
       <>{navigate(-1)}</>
    )
  } else if (options.redirectToHome) {
    return (
        <>{navigate('/home')}</>
    )
  }

  return <></>
}

export default Redirect
