import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { Navigate, NavLink } from 'react-router-dom'
const Summary = () => {
  const [back, setBack] = useState(false)
  const {
    deadline,
    setDeadline,
    statePlan,
    useStatePlan,
    statePrice,
    useStatePrice,
    stateOnline,
    useStateOnline,
    stateLarge,
    useStateLarge,
    stateCustomizable,
    useStateCustomizable,
  } = useContext(AppContext)
  const goBack = () => {
    setBack(true)
  }
  return (
    <div className='summary'>
      {back && (
        <Navigate
          to='/addons'
          replace={true}
        />
      )}
      <div className='title'>
        <h1>Finishing up</h1>
        <p>Duble-check everything looks OK before confirming</p>
      </div>
      <div className='wrapper-summary'>
        <div>
          <h3>
            {statePlan} ({deadline ? 'Monthly' : 'Yearly'})
          </h3>
          <NavLink to={'/plan'}>Change</NavLink>
        </div>
        <h3>
          ${deadline ? statePrice : statePrice * 10}/{deadline ? 'mo' : 'yr'}
        </h3>
      </div>
      {stateOnline?(
      <div className='wrapper-summary'>
        <p>Online service</p>
        <p>+${deadline ? 1 : 10}/{deadline ? 'mo' : 'yr'}</p>
      </div>
      ):null
     }
     {stateLarge?(
      <div className='wrapper-summary'>
        <p>Larger service</p>
        <p>+${deadline ? 2 : 20}/{deadline ? 'mo' : 'yr'}</p>
      </div>
     ):null
      }
      {stateCustomizable?(
      <div className='wrapper-summary'>
        <p>Customizable profile</p>
        <p>+${deadline ? 2 : 20}/{deadline ? 'mo' : 'yr'}</p>
      </div>
     ):null
      }
      <div className='wrapper-summary'>
        <p>Total</p>
        <h3>+$120/{deadline ? 'mo' : 'yr'}</h3>
      </div>
      <div className='action'>
        <button
          className='back'
          onClick={() => goBack()}
        >
          Go Back
        </button>
        <NavLink
          className='next'
          to='/thankyou'
        >
          Confirm
        </NavLink>
      </div>
    </div>
  )
}

export default Summary
