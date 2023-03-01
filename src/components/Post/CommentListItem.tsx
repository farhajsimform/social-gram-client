import { images } from 'config/images/images'
import formatDistance from 'date-fns/formatDistance'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { IComments } from 'store/actionTypes/post'
import { ImageWrapper } from 'utils'

export const CommentListItem: FC<IComments> = ({
  comment,
  commentby: { username, picture } = {},
  createdAt,
}) => {
  const [limit, setLimit] = useState<number>(1500)
  return (
    <li className='box_result row'>
      <div className='avatar_comment col-md-1'>
        <img src={picture ? ImageWrapper(`user/${picture}`) : images.men} alt='avatar' />
      </div>
      <div className='result_comment col-md-11'>
        <h4>{username || '-- -- --'}</h4>
        <p>
          {comment?.length > 1500 ? (
            <>
              {comment?.substring(0, limit) + (limit < comment.length ? '....' : '')}
              {limit < comment.length && (
                <Link
                  to={'#'}
                  onClick={() => {
                    setLimit((pre) => pre + comment.length)
                  }}
                >
                  Continue reading
                </Link>
              )}
            </>
          ) : (
            comment
          )}
        </p>
        <div className='tools_comment'>
          <span aria-hidden='true'> · </span>
          <a className='replay' href='#'>
            Reply
          </a>
          <span aria-hidden='true'> · </span>
          <span> {formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}</span>
        </div>
      </div>
    </li>
  )
}
