import { useAppSelector } from 'hooks'
import React, { FC } from 'react'
import { RecivedRequest } from './RecivedRequest'
import './RightSide.css'

const RightSideBar: FC = () => {
  const userData = useAppSelector((state) => state.user?.userProfileData)
  return (
    <div className='right-side-bar'>
      {(userData?.receivedRequests || []).map((el) => {
        return <RecivedRequest {...el} key={el._id} />
      })}
    </div>
  )
}

export default RightSideBar
