import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { images } from 'config/images/images'
import './RightSide.css'

const RightSideBar: FC = () => {
  return (
    <div className='right-side-bar'>
      <div className='right-user-req'>
        <div className='right-profile'>
          <div className='profile-pic'>
            <img src={images.men} alt='' />
          </div>
          <div className='profile-username'>
            <h6>Farhaj Hussain</h6>
            <p>Wants to Add you</p>
          </div>
        </div>
        <div className='right-req-btn'>
          <Button variant='primary'>Accept</Button>
          <Button variant='outline-secondary'>Decline</Button>
        </div>
      </div>
      <div className='right-user-req'>
        <div className='right-profile'>
          <div className='profile-pic'>
            <img src={images.women} alt='' />
          </div>
          <div className='profile-username'>
            <h6>kethi james</h6>
            <p>Wants to Add you</p>
          </div>
        </div>
        <div className='right-req-btn'>
          <Button variant='primary'>Accept</Button>
          <Button variant='outline-secondary'>Decline</Button>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
