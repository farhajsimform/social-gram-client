import { images } from 'config/images/images'
import formatDistance from 'date-fns/formatDistance'
import { FC } from 'react'
import { IComments } from 'store/actionTypes/post'
import { ImageWrapper } from 'utils'

export const CommentListItem: FC<IComments> = ({
  comment,
  commentby: { fullname, email, picture } = {},
  createdAt
}) => {
  return (
    <li className='box_result row'>
      <div className='avatar_comment col-md-1'>
        <img src={picture ? ImageWrapper(`user/${picture}`) : images.men} alt='avatar' />
      </div>
      <div className='result_comment col-md-11'>
        <h4>{fullname || email}</h4>
        <p>{comment}</p>
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
