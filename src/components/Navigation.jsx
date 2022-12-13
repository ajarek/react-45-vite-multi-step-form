import { NavLink, useHref } from 'react-router-dom'
import { React, useContext } from 'react'
import { AppContext } from '../App'

const Navigation = () => {
  const hrefNew = useHref()
  return (
    <nav className='navigation'>
      <div className='link'>
        <div
          className='nr'
          style={hrefNew === '/' ? { backgroundColor: '#ed3548' } : null}
        >
          1
        </div>
        <div className='step'>
          <h4>STEP 1</h4>
          <h3>YOUR INFO</h3>
        </div>
      </div>

      <div className='link'>
        <div
          className='nr'
          style={hrefNew === '/plan' ? { backgroundColor: '#ed3548' } : null}
        >
          2
        </div>
        <div className='step'>
          <h4>STEP 2</h4>
          <h3> SELECT PLAN</h3>
        </div>
      </div>
      <div className='link'>
        <div
          className='nr'
          style={hrefNew === '/addons' ? { backgroundColor: '#ed3548' } : null}
        >
          3
        </div>
        <div className='step'>
          <h4>STEP 3</h4>
          <h3> ADD-ONS</h3>
        </div>
      </div>
      <div className='link'>
        <div
          className='nr'
          style={hrefNew === '/summary' ? { backgroundColor: '#ed3548' } : null}
        >
          4
        </div>
        <div className='step'>
          <h4>STEP 4</h4>
          <h3>SUMMARY</h3>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
