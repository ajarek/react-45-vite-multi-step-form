import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { Navigate, NavLink } from 'react-router-dom'
import { Card } from '../components/Card'
import { Toggle } from '../components/Toggle'
const Plan = () => {
  const { nameUser, setNameUser, statePlan } = useContext(AppContext)
  const [back, setBack] = useState(false)
  const goBack = () => {
    setNameUser(null)
    setBack(true)
  }
  return (
    <div className='plan'>
      {back && (
        <Navigate
          to='/'
          replace={true}
        />
      )}
      <div className='title'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly biling</p>
      </div>
      <div className='wrapper-card'>
        <Card
          icon={'/public/icon-arcade.svg'}
          plan={'Arcade'}
          price={9}
          className={statePlan === 'Arcade' ? 'card active' : 'card'}
        />
        <Card
          icon={'/public/icon-advanced.svg'}
          plan={'Advanced'}
          price={12}
          className={statePlan === 'Advanced' ? 'card active' : 'card'}
        />
        <Card
          icon={'/public/icon-pro.svg'}
          plan={'Pro'}
          price={15}
          className={statePlan === 'Pro' ? 'card active' : 'card'}
        />
      </div>

      <Toggle />
      <div className='action'>
        <button
          className='back'
          onClick={() => goBack()}
        >
          Go Back
        </button>
        <NavLink
          className='next'
          to='/addons'
        >
          Next Step
        </NavLink>
      </div>
    </div>
  )
}

export default Plan
