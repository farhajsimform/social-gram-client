import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { images } from 'config/images/images'
import { IUser } from 'store/actionTypes/user'
import { ImageWrapper } from 'utils'
import { useAppDispatch, useAppSelector } from 'hooks'
import { acceptOrDeclineFriendRequest } from 'store/actions/user'
import { APIEndpoints } from 'constant'
export const RecivedRequest: FC<IUser> = ({ username, picture, _id }) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.user.isAcceptOrDeclineFriendRequestLoading)
  return (
    <div className='right-user-req'>
      <div className='right-profile'>
        <div className='profile-pic'>
          <img src={picture ? ImageWrapper(`user/${picture}`) : images.men} alt='' />
        </div>
        <div className='profile-username'>
          <h6>{username || '-- -- --'}</h6>
          <p>Wants to Add you</p>
        </div>
      </div>
      <div className='right-req-btn'>
        <Button
          variant='primary'
          disabled={loading}
          onClick={() => {
            dispatch(acceptOrDeclineFriendRequest(_id, APIEndpoints.user.acceptFriendRequest))
          }}
        >
          Accept
        </Button>
        <Button
          variant='outline-secondary'
          disabled={loading}
          onClick={() => {
            dispatch(acceptOrDeclineFriendRequest(_id, APIEndpoints.user.declineFriendRequest))
          }}
        >
          Decline
        </Button>
      </div>
    </div>
  )
}
