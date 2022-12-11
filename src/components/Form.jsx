import { useForm } from 'react-hook-form'
import { React, useContext, useEffect } from 'react'
import { Navigate } from "react-router-dom";
import { AppContext } from '../App'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Label } from '../components/Label'

export const Form = () => {
  
  const { nameUser, setNameUser } = useContext(AppContext)
  const schema = yup.object().shape({
    name: yup.string().required('Your Name is Required!'),
    email: yup.string().email().required(),
    phone: yup.string().required('Phone number is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    setNameUser(data.name)
    
  }

  return (
    <>
    {nameUser && (
      <Navigate to="/plan" replace={true} />
      
    )
    
    }
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label label={'Name'} />
      <input
        type='text'
        placeholder='e.g. Stephen King'
        {...register('name')}
      />
      <p>{errors?.name?.message}</p>
      <Label label={'Email Address'} />
      <input
        type='text'
        placeholder='e.g. stephenking@gmail.com'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <Label label={'Phone Number'} />
      <input
        type='number'
        placeholder='e.g. +48 573 219 230'
        {...register('phone')}
      />
      <p>{errors.phone?.message}</p>

      <input
        type='submit'
        value='Next Step'
      />
    </form>
    </>
  )
}
