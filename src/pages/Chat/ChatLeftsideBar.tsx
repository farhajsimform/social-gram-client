import { images } from 'config/images/images'
import formatDistance from 'date-fns/formatDistance'
import { useRouter } from 'hooks'
import { FC } from 'react'
import { IUsersForChat } from 'store/actionTypes/user'
import { ImageWrapper } from 'utils'

export const ChatLeftSideBarItem: FC<IUsersForChat> = ({ bothfriends, chats, _id: roomid }) => {
  const { navigate } = useRouter()
  const { _id, fullname, email, picture } = bothfriends[0] || {}
  return (
    <div
      className='friend-drawer friend-drawer--onhover chat-friends'
      key={_id}
      onClick={() => {
        navigate(`/chat/${roomid}`)
      }}
    >
      <img
        className='profile-image'
        src={picture ? ImageWrapper(`user/${picture}`) : images.men}
        alt=''
      />
      <div className='text'>
        <h6>{fullname || email}</h6>
        <p className='text-muted'>{chats?.[0]?.message}</p>
        <span className='time text-muted small'>
          {' '}
          {chats?.[0]?.createdAt
            ? formatDistance(new Date(chats?.[0]?.createdAt), new Date(), { addSuffix: true })
            : null}
        </span>
      </div>
    </div>
  )
}
