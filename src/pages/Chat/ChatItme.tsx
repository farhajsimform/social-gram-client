import { useAppSelector } from 'hooks'
import { FC } from 'react'
import { IChats } from 'store/actionTypes/user'
import { replaceUrlWithHtmlLink } from 'utils'

export const ChatListItme: FC<IChats> = ({ message, sendby: { _id } }) => {
  const userid = useAppSelector((state) => state.common?.loggedInUserData?.userid)
  return (
    <div className='row no-gutters'>
      <div className={`col-md-9 ${userid === _id && 'offset-md-3'}`}>
        <div
          className={`chat-bubble chat-bubble--${userid === _id ? 'right' : 'left'}`}
          dangerouslySetInnerHTML={{ __html: replaceUrlWithHtmlLink(message) }}
        ></div>
      </div>
    </div>
  )
}
