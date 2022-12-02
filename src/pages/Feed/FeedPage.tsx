import React, { FC, useEffect, useMemo, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import UserPost from 'components/Post/Posts'
import { useAppDispatch, useAppSelector } from 'hooks'
import { AddNewAddedPost, GetAllPosts } from 'store/actions/post'
import { IPosts } from 'store/actionTypes/post'
import { GetNewPosts } from 'socket/socket'
import './feed.css'
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
  const { posts } = useAppSelector((state) => state.post)
  const [limit, setLimit] = useState<number>(5)

  const memoizedPosts = useMemo(() => {
    const unique: IPosts[] = []
    ;(posts || []).map((x: IPosts) =>
      unique.filter((a) => a._id == x._id).length > 0 ? null : unique.push(x),
    )
    return unique
  }, [posts])

  useEffect(() => {
    dispatch(GetAllPosts({ limit }))
  }, [limit])

  useEffect(() => {
    GetNewPosts((data) => {
      // Here getting instantly newly added posts
      dispatch(AddNewAddedPost(data))
    })
  }, [])

  const fetchMoreData = () => {
    setTimeout(() => {
      setLimit((pre) => pre + 5)
    }, 1500)
  }

  return (
    <div className='feed-layout'>
      <div className='feed-wrapper'>
        <InfiniteScroll
          dataLength={(posts || []).length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {(memoizedPosts || []).map((data: IPosts) => {
            return <UserPost {...data} key={data._id} />
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Feed
