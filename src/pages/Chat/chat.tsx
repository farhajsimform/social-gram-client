import { FC, useEffect, useMemo, useState } from 'react'
import { ChatLeftSideBarItem } from 'pages/Chat/ChatLeftsideBar'
import { ChatListItme } from './ChatItme'
import { useAppDispatch, useAppSelector, useRouter } from 'hooks'
import { getUsersForChat } from 'store/actions/user'
import { ImageWrapper } from 'utils'
import { images } from 'config/images/images'
import { GET } from 'services/HttpsService'
import { APIEndpoints, HttpStatusCode } from 'constant'
import { IChats } from 'store/actionTypes/user'
import { socket, GetNewMessagesForRoom } from 'socket/socket'
import './chats.css'
import EmojiComponent from 'components/EmojiPicker/EmojiPicker'
import { getUniqueArray } from 'utils/getUnique'
const Chat: FC = () => {
  const [message, setMessage] = useState<string>('')
  const [chatData, setChatData] = useState<Array<IChats>>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [isVisibleEmoji, setVisibleEmojiPicker] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { query } = useRouter()
  const users = useAppSelector((state) => state.user.usersForChat)
  const token = useAppSelector((state) => state.common?.loggedInUserData?.accessToken)
  useEffect(() => {
    dispatch(getUsersForChat())
  }, [])

  useEffect(() => {
    const fetchRoomChatData = async () => {
      try {
        const response = await GET({
          subUrl: `${APIEndpoints.user.getRoomChatData}/${query?.roomid}`,
        })
        if (response.status === HttpStatusCode.Ok) {
          setChatData(response?.data)
        }
      } catch (error) {
        return error
      }
    }
    query?.roomid && fetchRoomChatData()
    query?.roomid && socket.emit('join', query?.roomid)
  }, [query?.roomid])

  const allFriends = useMemo(() => {
    return (users || [])
      .filter(
        (el) =>
          el.bothfriends.length &&
          (el.bothfriends[0]?.fullname?.includes(searchValue) ||
            el.bothfriends[0]?.email?.includes(searchValue)),
      )
      .sort(
        (a, b) =>
          new Date(b.chats?.[0]?.createdAt).getTime() - new Date(a.chats?.[0]?.createdAt).getTime(),
      )
  }, [users, searchValue])

  const selectedUser = useMemo(() => {
    const userData = (users || []).filter((el) => el._id === query?.roomid)
    return userData[0] || {}
  }, [users, query?.roomid])

  const memoizedChats = getUniqueArray<IChats>(chatData);

  const { bothfriends } = selectedUser

  const sendMessage = () => {
    if (message.trim()) {
      const payload = {
        message: message,
        roomID: query?.roomid,
        webtoken: token,
      }
      socket.emit('sendMessage', payload)
      setMessage('')
    }
  }

  useEffect(() => {
    GetNewMessagesForRoom((data) => {
      setChatData((pre) => [...pre, data])
    })
  }, [])

  return (
    <div>
      <div className='container'>
        <div className='row no-gutters'>
          <div className='col-md-4 border-right'>
            <div className='settings-tray'>
              <img className='profile-image' src={images.men} alt='' />
              <span className='settings-tray--right'>
                <i className='fa fa-refresh' aria-hidden='true'></i>
                <i className='fa fa-commenting' aria-hidden='true'></i>
                <i className='fa fa-bars' aria-hidden='true'></i>
              </span>
            </div>
            <div className='search-box'>
              <div className='input-wrapper'>
                <i className='fa fa-search' aria-hidden='true'></i>
                <input
                  placeholder='Search here'
                  type='text'
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
            <div className="friends-list-sidebar">

           
            {allFriends.map((el, index: number) => {
              return (
                <>
                  <ChatLeftSideBarItem {...el} key={index} />
                  <hr />
                </>
              )
            })}
             </div>
          </div>
          <div className='col-md-8'>
            <div className='settings-tray'>
              <div className='friend-drawer no-gutters friend-drawer--grey'>
                <img
                  className='profile-image'
                  src={
                    bothfriends?.[0]?.picture
                      ? ImageWrapper(`user/${bothfriends?.[0]?.picture}`)
                      : images.men
                  }
                  alt=''
                />
                <div className='text'>
                  <h6>{bothfriends?.[0]?.fullname || bothfriends?.[0]?.email}</h6>
                  <p className='text-muted'>Working from home...</p>
                </div>
                <span className='settings-tray--right'>
                  <i className='fa fa-refresh' aria-hidden='true'></i>
                  <i className='fa fa-commenting' aria-hidden='true'></i>
                  <i className='fa fa-bars' aria-hidden='true'></i>
                </span>
              </div>
            </div>
            <div className='chat-panel'>
              <div className="chat-section">
              {memoizedChats.map((el, index: number) => {
                return <ChatListItme {...el} key={index} />
              })}
              </div>
              
              <div className='row'>
                <div className='col-12'>
                  <div className='chat-box-tray'>
                    <i
                      className='fa fa-cog'
                      aria-hidden='true'
                      onClick={() => setVisibleEmojiPicker((pre) => !pre)}
                    ></i>
                    <input
                      type='text'
                      placeholder='Type your message here...'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.code === 'Enter') {
                          sendMessage()
                        }
                      }}
                    />
                    <i className='fa fa-microphone' aria-hidden='true'></i>
                    <i className='fa fa-paper-plane' aria-hidden='true' onClick={sendMessage}></i>
                  </div>
                </div>
              </div>
              {isVisibleEmoji ? (
                <div className='row'>
                  {' '}
                  <EmojiComponent
                    onChange={(value) => {
                     setMessage(pre => pre.concat(value))
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Chat
