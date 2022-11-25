import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const Login: FC = () => {
  return (
    <div className='login'>
      <div className='login-box'>
        <h2>Login</h2>
        <form>
          <div className='user-box'>
            <input type='text' name='' required autoComplete='off' />
            <label>Username</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' autoComplete='off' />
            <label>Password</label>
          </div>
          <Link to='#'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log In
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
