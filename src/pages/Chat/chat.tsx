import { FC } from 'react'
import './chats.css'
const Chat: FC = () => {
  return (
    <div>
      <div className='container'>
        <div className='row no-gutters'>
          <div className='col-md-4 border-right'>
            <div className='settings-tray'>
              <img
                className='profile-image'
                src='https://randomuser.me/api/portraits/men/39.jpg'
                alt=''
              />
              <span className='settings-tray--right'>
                <i className='fa fa-refresh' aria-hidden='true'></i>
                <i className='fa fa-commenting' aria-hidden='true'></i>
                <i className='fa fa-bars' aria-hidden='true'></i>
              </span>
            </div>
            <div className='search-box'>
              <div className='input-wrapper'>
                <i className='fa fa-search' aria-hidden='true'></i>
                <input placeholder='Search here' type='text' />
              </div>
            </div>
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://randomuser.me/api/portraits/men/20.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Robo Cop</h6>
                <p className='text-muted'>Hey, you're arrested!</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://randomuser.me/api/portraits/women/64.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Optimus</h6>
                <p className='text-muted'>Wanna grab a beer?</p>
              </div>
              <span className='time text-muted small'>00:32</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover '>
              <img
                className='profile-image'
                src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Skynet</h6>
                <p className='text-muted'>Seen that canned piece of s?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover '>
              <img
                className='profile-image'
                src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Skynet</h6>
                <p className='text-muted'>Seen that canned piece of s?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover '>
              <img
                className='profile-image'
                src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Skynet</h6>
                <p className='text-muted'>Seen that canned piece of s?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover '>
              <img
                className='profile-image'
                src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Skynet</h6>
                <p className='text-muted'>Seen that canned piece of s?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover '>
              <img
                className='profile-image'
                src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2016%2F01%2FTerminator-2-1200x873.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Skynet</h6>
                <p className='text-muted'>Seen that canned piece of s?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img className='profile-image' src='http://i66.tinypic.com/2qtbqxe.jpg' alt='' />
              <div className='text'>
                <h6>Termy</h6>
                <p className='text-muted'>Im studying spanish...</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://cdn.vox-cdn.com/thumbor/AYUayCXcqYxHDkR4a1N9azY5c_8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9375391/MV5BYjg1Yjk1MTktYzE5Mi00ODkwLWFkZTQtNTYxYTY3ZDVmMWUxXkEyXkFqcGdeQXVyNjUwNzk3NDc_._V1_.jpg'
                alt=''
              />
              <div className='text'>
                <h6>Richard</h6>
                <p className='text-muted'>I'm not sure...</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
            <hr />
            <div className='friend-drawer friend-drawer--onhover'>
              <img
                className='profile-image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzQ3HEvJBpgptB48mdCwRt_BHrmNrDwQiIlrjgJbDKihAV_NI'
                alt=''
              />
              <div className='text'>
                <h6>XXXXX</h6>
                <p className='text-muted'>Hi, wanna see something?</p>
              </div>
              <span className='time text-muted small'>13:21</span>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='settings-tray'>
              <div className='friend-drawer no-gutters friend-drawer--grey'>
                <img
                  className='profile-image'
                  src='https://randomuser.me/api/portraits/men/30.jpg'
                  alt=''
                />
                <div className='text'>
                  <h6>Robo Cop</h6>
                  <p className='text-muted'>Layin' down the law since like before Christ...</p>
                </div>
                <span className='settings-tray--right'>
                  <i className='fa fa-refresh' aria-hidden='true'></i>
                  <i className='fa fa-commenting' aria-hidden='true'></i>
                  <i className='fa fa-bars' aria-hidden='true'></i>
                </span>
              </div>
            </div>
            <div className='chat-panel'>
              <div className='row no-gutters'>
                <div className='col-md-3'>
                  <div className='chat-bubble chat-bubble--left'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3'>
                  <div className='chat-bubble chat-bubble--left'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3'>
                  <div className='chat-bubble chat-bubble--left'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3'>
                  <div className='chat-bubble chat-bubble--left'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row no-gutters'>
                <div className='col-md-3 offset-md-9'>
                  <div className='chat-bubble chat-bubble--right'>Hello dude!</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='chat-box-tray'>
                    <i className='fa fa-cog' aria-hidden='true'></i>
                    <input type='text' placeholder='Type your message here...' />
                    <i className='fa fa-microphone' aria-hidden='true'></i>
                    <i className='fa fa-paper-plane' aria-hidden='true'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Chat
