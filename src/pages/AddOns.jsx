import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../App'
import ItemAddOns from '../components/ItemAddOns'
import { Navigate, NavLink } from 'react-router-dom'
const AddOns = () => {
  const [back, setBack] = useState(false)
  const {
    stateOnline,
    useStateOnline,
    stateLarge,
    useStateLarge,
    stateCustomizable,
    useStateCustomizable,
  } = useContext(AppContext)

  const onLine = () => {
    useStateOnline(!stateOnline)
  }
  const large = () => {
    useStateLarge(!stateLarge)
  }
  const customizable = () => {
    useStateCustomizable(!stateCustomizable)
  }

  const goBack = () => {
    setBack(true)
  }

  return (
    <div className='addons'>
      {back && (
        <Navigate
          to='/plan'
          replace={true}
        />
      )}
      <div className='title'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className='wrapper-addons'>
        <ItemAddOns
          info={'Online service'}
          desc={'Access to multiplayer games'}
          price={1}
          onClick={onLine}
          className={stateOnline ? 'item-add-ons active' : 'item-add-ons'}
        />
        <ItemAddOns
          info={'Large service'}
          desc={'Extra 1TB of cloud save'}
          price={2}
          onClick={large}
          className={stateLarge ? 'item-add-ons active' : 'item-add-ons'}
        />
        <ItemAddOns
          info={'Customizable profile'}
          desc={'Custom thema on your profile'}
          price={2}
          onClick={customizable}
          className={stateCustomizable ? 'item-add-ons active' : 'item-add-ons'}
        />
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
          to='/summary'
        >
          Next Step
        </NavLink>
      </div>
    </div>
  )
}

export default AddOns
