import { NavLink } from 'react-router-dom'
import { React, useContext } from 'react'
import { AppContext } from '../App'
const Navigation = () => {
  
  return (
    <nav className='navigation'>
      <div className='link'>
        <div className='nr'>1</div>
        <div className='step'>
          <h4>STEP 1</h4>
          <h3>YOUR INFO</h3>
        </div>
      </div>
      
      <div className='link'>
        <div className='nr'>2</div>
        <div className='step'>
          <h4>STEP 2</h4>
          <h3> SELECT PLAN</h3>
        </div>
     </div>
     <div className='link'>
        <div className='nr'>3</div>
        <div className='step'>
          <h4>STEP 3</h4>
          <h3> ADD-ONS</h3>
        </div>
      </div>
      <div className='link'>
        <div className='nr'>4</div>
        <div className='step'>
          <h4>STEP 4</h4>
          <h3>SUMMARY</h3>
        </div>
        </div>
    </nav>
  )
}

export default Navigation
