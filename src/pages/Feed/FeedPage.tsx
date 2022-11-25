import React, { FC } from 'react'
import UserPost from 'components/Post/Posts'
import './feed.css'
export interface IPostItem {
  id: number
  username: string
  time: string | number
  userLocation: string
  like: string | number
  comment: string | number
}
const posts = [
  {
    id: 1,
    username: 'Farhaj',
    time: '21',
    userLocation: 'Lucknow',
    like: '123',
    comment: '213',
  },
  {
    id: 2,
    username: 'Divya',
    time: '2',
    userLocation: 'AHMD',
    like: '32',
    comment: '545',
  },
  {
    id: 3,
    username: 'James',
    time: '21',
    userLocation: 'Sydny',
    like: '123',
    comment: '213',
  },
  {
    id: 4,
    username: 'Naimesh',
    time: '8',
    userLocation: 'AHMD',
    like: '231',
    comment: '87',
  },
  {
    id: 5,
    username: 'tms',
    time: '17',
    userLocation: 'Delhi',
    like: '231',
    comment: '87',
  },
]

const Feed: FC = () => {
  return (
    <div className='feed-layout'>
      <div className='feed-wrapper'>
        {posts.map((data: IPostItem) => {
          return <UserPost {...data} key={data.id} />
        })}
      </div>
    </div>
  )
}

export default Feed
