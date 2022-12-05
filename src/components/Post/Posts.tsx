import { LikeIcon, CommentIcon, ShareIcon, SaveIcon, ActionDotIcon } from 'icons'
import { formatDistance } from 'date-fns'
import React, { FC } from 'react'
import { images } from 'config/images/images'
import './post.css'
import { IPosts } from 'store/actionTypes/post'
import { ImageWrapper } from 'utils'

const UserPost: FC<IPosts> = ({
  _id,
  postedby: { picture, fullname, email },
  images: postImages,
  likesCount,
  comments,
  content,
  createdAt,
}) => {
  return (
    <div className='post' key={_id}>
      <div className='post-wrapper'>
        <div className='user-profile'>
          <div className='user-section'>
            <div className='profile-pic'>
              <img src={picture ? ImageWrapper(`users/${picture}`) : images.men} alt='' />
            </div>
            <div className='profile-username'>
              <span>{fullname || email}</span>
              <p>
                {formatDistance(new Date(createdAt), new Date(), { addSuffix: false })}. {'Lucknow'}
                , India
              </p>
            </div>
          </div>
          <div className='post-action'>
            <ActionDotIcon />
          </div>
        </div>
        <div>
          <p>{content}</p>
        </div>
        {(postImages || []).map((source: string, index: number) => {
          return (
            <div className='post-image' key={index}>
              <img src={source ? ImageWrapper(`posts/${source}`) : images.post} alt='' />
            </div>
          )
        })}

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
            <p>{likesCount || 0} likes</p>
            <span>View all {comments?.length} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserPost)
