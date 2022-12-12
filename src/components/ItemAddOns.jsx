import  { React, useState, useContext } from 'react'
import { AppContext } from '../App'

export const ItemAddOns = ({info, desc,price,onClick}) => {
  const {deadline, setDeadline} = useContext(AppContext)



  return (
    <div className='item-add-ons' onClick={onClick}>
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