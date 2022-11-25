import { LikeIcon, CommentIcon, ShareIcon, SaveIcon, ActionDotIcon } from 'icons'
import React, { FC } from 'react'
import { images } from 'config/images/images'
import { IPostItem } from 'pages/Feed/FeedPage'
import './post.css'

const UserPost: FC<IPostItem> = ({ id, username, time, userLocation, like, comment }) => {
  return (
    <div className='post' key={id}>
      <div className='post-wrapper'>
        <div className='user-profile'>
          <div className='user-section'>
            <div className='profile-pic'>
              <img src={images.men} alt='' />
            </div>
            <div className='profile-username'>
              <span>{username}</span>
              <p>
                {time}h. {userLocation}, India
              </p>
            </div>
          </div>
          <div className='post-action'>
            <ActionDotIcon />
          </div>
        </div>
        <div className='post-image'>
          <img src={images.post} alt='' />
        </div>
        <div className='like-bar'>
          <div className='like-action'>
            <div className='post-like-btn'>
              <LikeIcon />
              <CommentIcon />
              <ShareIcon />
            </div>
            <SaveIcon />
          </div>
          <div className='post-like-stat'>
            <p>{like} likes</p>
            <span>View all {comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPost
