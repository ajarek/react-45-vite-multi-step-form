import { React, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../App'

const ThankYou = () => {
  const { nameUser } = useContext(AppContext)
  return (
    <div className='thank-you'>
      <NavLink
        to='/'
        style={{ textDecoration: 'none' }}
      >
        <div className='ok'>✔️</div>
      </NavLink>
      <h3>Thank you {nameUser}</h3>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform.
      </p>
      <p>
        If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <p>Challenge by Frontend Mentor. Coded by Your Name Here.</p>
    </div>
  )
}

export default ThankYou
