import React, { FC, useEffect } from 'react'
import UserPost from 'components/Post/Posts'
import './feed.css'
import { useAppDispatch, useAppSelector } from 'hooks'
import { GetAllPosts } from 'store/actions/post'
import { IPosts } from 'store/actionTypes/post'
export interface IPostItem {
  id: number
  username: string
  time: string | number
  userLocation: string
  like: string | number
  comment: string | number
}

const Feed: FC = () => {
  const dispatch = useAppDispatch()
  const { isPostsLoading, posts } = useAppSelector((state) => state.post)
  console.log(isPostsLoading, posts)

  useEffect(() => {
    dispatch(GetAllPosts({ limit: 100 }))
  }, [])
  return (
    <div className='feed-layout'>
      <div className='feed-wrapper'>
        {(posts || []).map((data: IPosts) => {
          return <UserPost {...data} key={data._id} />
        })}
      </div>
    </div>
  )
}

export default Feed
