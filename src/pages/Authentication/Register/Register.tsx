import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './RegisterPage.css'

const Register: FC = () => {
  return (
    <div className='login'>
      <div className='login-box'>
        <h2>Signup</h2>
        <form>
          <div className='user-box'>
            <input type='text' name='' required />
            <label>Name</label>
          </div>
          <div className='user-box'>
            <input type='text' name='' required />
            <label>Email</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' required />
            <label> Create Password</label>
          </div>
          <div className='user-box'>
            <input type='password' name='' required />
            <label> Repeat Password</label>
          </div>
          <Link to='/submit'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
