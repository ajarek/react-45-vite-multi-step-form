import {React, useState,useContext, useEffect} from 'react'
import { AppContext } from '../App'
import { Navigate } from "react-router-dom";
import { Card } from '../components/Card'
import { Toggle } from '../components/Toggle'
const Plan = () => {
  
  const[back, setBack]= useState(false)

  
    
      const goBack=() => {
       
          setBack(true)
          
         
      }
  
    
  

  return (
    <div className='plan'>
      {back && (
          <Navigate to="/" replace={true} />
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
        />
        <Card
          icon={'/public/icon-advanced.svg'}
          plan={'Advanced'}
          price={12}
        />
        <Card
          icon={'/public/icon-pro.svg'}
          plan={'Pro'}
          price={15}
        />
      </div>
      
      <Toggle />
      <div className="action">
        <button
         className='back'
         onClick={()=>goBack()}
        >Go Back</button>
        <button className='next' >Next Step</button>
      </div>
      
    </div>
  )
}

export default Plan
