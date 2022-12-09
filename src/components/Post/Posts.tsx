import { SaveIcon, ActionDotIcon } from 'icons'
import { formatDistance } from 'date-fns'
import React, { FC, useState } from 'react'
import { images } from 'config/images/images'
import './post.css'
import { IComments, IPosts } from 'store/actionTypes/post'
import { getUniqueArray, ImageWrapper } from 'utils'
import { useAppDispatch } from 'hooks'
import { HandleLike } from 'store/actions/post'
import { CommentSection } from './CommentSection'
import { Link } from 'react-router-dom'

const UserPost: FC<IPosts> = ({
  _id,
  postedby: { picture, fullname, email },
  images: postImages,
  likesCount,
  comments,
  content,
  createdAt,
}) => {
  const memoizedComment = getUniqueArray<IComments>(comments)
  const dispatch = useAppDispatch()
  const [selectedId, setSelectedId] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(1500)
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
              <p>{formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}</p>
            </div>
          </div>
          <div className='post-action'>
            <ActionDotIcon />
          </div>
        </div>
        <div>
          <p>
            {' '}
            {content?.length > 1500 ? (
              <>
                {content?.substring(0, limit) + (limit < content.length ? '....' : '')}
                {limit < content.length && (
                  <Link
                    to={'#'}
                    onClick={() => {
                      setLimit((pre) => pre + content.length)
                    }}
                  >
                    Continue reading
                  </Link>
                )}
              </>
            ) : (
              content
            )}
          </p>
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
              <i
                className='fa fa-heart'
                aria-hidden='true'
                onClick={() =>
                  dispatch(
                    HandleLike({
                      id: _id,
                      reactionType: 'likes',
                      reactionCountType: 'likesCount',
                    }),
                  )
                }
              ></i>
              <i className='fa fa-comment' aria-hidden='true'></i>
              <i className='fa fa-paper-plane' aria-hidden='true'></i>
            </div>
            <SaveIcon />
          </div>
          <div className='post-like-stat'>
            <p>{likesCount || 0} likes</p>
            <span onClick={() => setSelectedId((pre) => !pre)}>
              View all {memoizedComment?.length} comments
            </span>
          </div>

          {selectedId && <CommentSection comments={memoizedComment} postid={_id} />}
        </div>
      </div>
    </div>
  )
}

export default UserPost
