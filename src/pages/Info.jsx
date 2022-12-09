import React from 'react'
import { Form } from '../components/Form'
const Info = () => {
  return (
    <div className='info'>
      <div className='title'>
        <h1>Personal info</h1>
        <p>Please provide your name, email and phone number</p>
      </div>
      <Form />
    </div>
  )
}

export default Info
