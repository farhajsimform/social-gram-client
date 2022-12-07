import { images } from 'config/images/images'
import { useAppDispatch, useAppSelector } from 'hooks'
import { FC, useMemo, useState } from 'react'
import { HandleComment } from 'store/actions/post'
import { IComments } from 'store/actionTypes/post'
import { ImageWrapper } from 'utils'
import { CommentListItem } from './CommentListItem'
type CommentProps = {
  comments: Array<IComments>
  postid: string
}

export const CommentSection: FC<CommentProps> = ({ postid, comments }) => {
  const [comment, setComment] = useState<string>('')
  const userData = useAppSelector((state) => state.user.userProfileData)
  const dispatch = useAppDispatch()
  const HandlePostComment = async () => {
    comment.trim() &&
      dispatch(
        HandleComment({
          comment,
          postid,
        }),
      )
    setComment('')
  }

  const memoizedComment = useMemo(() => {
    const unique: IComments[] = []
    ;(comments || []).map((x: IComments) =>
      unique.filter((a) => a._id == x._id).length > 0 ? null : unique.push(x),
    )
    return unique
  }, [comments, comments.length])
  return (
    <body>
      <div className='container'>
        <div className='col-md-12' id='fbcomment'>
          <div className='header_comment'>
            <div className='row'>
              <div className='col-md-6 text-left'>
                <span className='count_comment'>{comments?.length} Comments</span>
              </div>
            </div>
          </div>

          <div className='body_comment'>
            <div className='row'>
              <div className='avatar_comment col-md-1'>
                <img
                  src={userData?.picture ? ImageWrapper(`user/${userData.picture}`) : images.men}
                  alt='avatar'
                />
              </div>
              <div className='box_comment col-md-11'>
                <textarea
                  className='commentar'
                  value={comment}
                  placeholder='Add a comment...'
                  onChange={(e) => {
                    setComment(e.target.value)
                  }}
                />
                <div className='box_post'>
                  <div className='pull-right'>
                    <button type='button' onClick={() => HandlePostComment()}>
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <ul id='list_comment' className='col-md-12'>
                {(memoizedComment || []).map((el, index) => {
                  return <CommentListItem {...el} key={index} />
                })}
              </ul>
            </div>

            <button className='show_more' type='button'>
              Load 10 more comments
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}
