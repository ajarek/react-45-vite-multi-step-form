import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className='navigation'>
      <NavLink
        className={'link'}
        to='/'
      > 
      <div className="nr">1</div>
       <div className="step">
         <h4>STEP 1</h4>
        <h3>YOUR INFO</h3>
        </div>
      </NavLink>
      <NavLink
        className={'link'}
        to='/plan'
      >
        <div className="nr">2</div>
        <div className="step">
        <h4>STEP 2</h4>
       <h3> SELECT PLAN</h3>
        </div>
      </NavLink>
      <NavLink
        className={'link'}
        to='/addons'
      >
        <div className="nr">3</div>
        <div className="step">
        <h4>STEP 3</h4>
      <h3> ADD-ONS</h3>
       </div>
      </NavLink>
      <NavLink
        className={'link'}
        to='/summary'
      >
        <div className="nr">4</div>
        <div className="step">
        <h4>STEP 4</h4>
        <h3>SUMMARY</h3>
        </div>
      </NavLink>
    </nav>
  )
}

export default Navigation
