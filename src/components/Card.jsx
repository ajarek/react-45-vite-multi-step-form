import { React, useState, useContext } from 'react'
import { AppContext } from '../App'

export const Card = ({ icon, plan, price }) => {
  const {
    deadline,
    setDeadline,
    statePlan,
    useStatePlan,
    statePrice,
    useStatePrice,
  } = useContext(AppContext)
  const addCard = () => {
    useStatePlan(plan)
    useStatePrice(price)
  }
  return (
    <div
      className='card'
      onClick={() => addCard()}
     
    >
      <div className='icon'>
        <img
          src={icon}
          alt='icon'
        />
      </div>
      <div className='name-plan'>{plan}</div>
      <div className='price'>
        ${deadline ? price : price * 10}/{deadline ? 'mo' : 'yrs'}
      </div>
      <div className='free'>{deadline ? null : '2 months free'}</div>
    </div>
  )
}

export default Card
