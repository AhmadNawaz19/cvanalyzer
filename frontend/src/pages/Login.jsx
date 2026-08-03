import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './styles/login.css'
import SocialLogin from '../components/SocialLogin'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const schema = z.object({
  email: z.string().email('invalid email').endsWith('@gmail.com'),
  password: z.string().min(8, 'Minimum password must 8 Digit').regex(/^[a-zA-Z0-9_.]+$/, 'password contain letter,number, dot and underscore')
})

const Login = React.memo(() => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const { getValues, setError, register, clearErrors, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  const ValidateUser = useMutation({
    mutationFn: (userData) => axios.post('http://localhost:8000/user/loginUser', userData, {
      withCredentials : true
    }),
    onSuccess: (response) => {
      console.log(response.data);
      navigate('/profile')
    },

    onError: (error) => {
      console.log(error.response?.data);
      setError('root.serverError', {
        type : 'manual',
        message : error.response?.data
      })
    },
  })

  const submiteData = (data) => {
    console.log('data submite', data)
    ValidateUser.mutate(data)
  }

  const showPassword = () => {
    show ? setShow(false) : setShow(true);
  }

  return (
    <div id='loginMain'>
      <form onSubmit={handleSubmit(submiteData)}>

        <div class="userinput">
          <i class="fa-solid fa-at"></i>
          <input
            {...register('email', {
              required: 'Email is required',
            })}
            onClick={() => clearErrors('email')}
            onClick={() => clearErrors('root.serverError')}
            onChange={() => clearErrors('email')}
            type='email' placeholder='Enter Email' />

        </div>
        {errors?.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}

        <div class="userinput">
          <i class="fa-solid fa-key"></i>
          <input
            {...register('password', {
              required: 'Password is required'
            })}
            onClick={() => clearErrors('password')}
            onClick={() => clearErrors('root.serverError')}
            onChange={() => clearErrors('password')}
            type={show ? 'password' : 'text'} placeholder='Enter Password' />
          {
            show ? <i style={{ marginRight: '10px' }} class="fa-regular fa-eye-slash" onClick={() => showPassword()}></i> : <img src="https://www.svgrepo.com/show/365364/eye-thin.svg" style={{ height: "25px", marginRight: '10px' }} onClick={() => showPassword()}></img>
          }

        </div>
        {errors?.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        {errors.root?.serverError && (
          <p style={{ color: "red" }}>{errors.root.serverError.message}</p>
        )}

        <button id='loginBtn' type='submit'>Login</button>
        <p id='para1'>if don't have Account <Link to='/signup'>SignUp</Link> </p>
        <p>or</p>
        <SocialLogin />
      </form>
    </div>
  )
})

Login.displayName = 'login'
export default Login