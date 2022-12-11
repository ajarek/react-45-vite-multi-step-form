import  { React, useState, useContext } from 'react'
import { AppContext } from '../App'

export const ItemAddOns = ({info, desc,price}) => {
  const {deadline, setDeadline} = useContext(AppContext)
  return (
    <div className='item-add-ons'>
      <div className="checkbox">
        <input type="checkbox" name="" id="" />
      </div>
      <div className="add-ons-info">
        <h3>{info}</h3>
        <p>{desc}</p>
      </div>
      <div className='price'>
          ${deadline?price:price*10}/{deadline? 'mo' : 'yrs'}
        </div>
    </div>
  )
}

export default ItemAddOns