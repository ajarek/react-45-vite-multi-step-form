import React, { useState, useContext } from 'react'
import { AppContext } from '../App'

export const Toggle = () => {
  const { deadline, setDeadline } = useContext(AppContext)
  return (
    <div className='toggle'>
      <div
        style={deadline ? { color: '#02295a' } : { color: '#9699ab' }}
        className='period'
      >
        Monthly
      </div>
      <div className='button'>
        <button onClick={() => setDeadline(!deadline)}>
          <div className='switch'>
            <span
              style={
                deadline
                  ? { transform: 'translateX(0px)' }
                  : { transform: 'translateX(65px)' }
              }
            />
          </div>
        </button>
      </div>
      <div
        style={deadline ? { color: '#9699ab' } : { color: '#02295a' }}
        className='period'
      >
        Yearly
      </div>
    </div>
  )
}

export default Toggle
