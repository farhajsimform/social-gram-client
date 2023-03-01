import { useState, FC, useEffect } from 'react'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import ImageUploader, {
  ImageChangeType,
  ImageTypeProps,
} from 'components/ImageUploader/ImageUpoader'
import { Logo } from 'icons'
import { ModalWrapper } from 'components/Modal/Modal'
import { contentTypes, POST } from 'services/HttpsService'
import { APIEndpoints, HttpStatusCode } from 'constant'
import { TextInput } from 'components/Input/TextInput'
import { notifyToast } from 'utils'
import { images as AllImages } from 'config/images/images'
import { useAppDispatch, useAppSelector, useDebounce, useRouter } from 'hooks'
import { getSearchedSuccess, searchUser, sendFriendRequest } from 'store/actions/user'
import { SetLoggedInUserDetails } from 'store/actions/common'
import './head.css'

const Header: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [images, setImages] = useState<ImageTypeProps>([])
  const [content, setContent] = useState<string>('')
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchProfileValue, setSearchProfileValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const { navigate } = useRouter()
  const { serachedUsers, isSendingFriendRequestLoading } = useAppSelector((state) => state.user)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onImageChange: ImageChangeType = (imageList) => {
    setImages(imageList)
  }

  const searchTerm = useDebounce(searchProfileValue, 300)
  const createPost = async () => {
    try {
      const formState = new FormData()
      for (let index = 0; index < images.length; index++) {
        const element = images[index]
        formState.append('myfiles', element.file as File)
      }
      formState.append('content', content)
      const response = await POST({
        subUrl: APIEndpoints.post.post,
        data: formState,
        headers: contentTypes.multipart,
      })
      if (response?.status === HttpStatusCode.Created) {
        setImages([])
        setContent('')
        handleClose()
        notifyToast({
          message: 'Post successfully',
          type: 'success',
        })
      }
    } catch (error: any) {
      notifyToast({
        message: error?.message,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    if (searchTerm?.length > 2) {
      const payload = {
        username: searchTerm,
        limit: 50,
      }
      dispatch(searchUser(payload))
    } else {
      dispatch(getSearchedSuccess([]))
    }
  }, [searchTerm])

  const logoutUser = () => {
    dispatch(SetLoggedInUserDetails(null))
  }

  return (
    <div className='header'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>
          <div className='logo'>
            <Logo />
            <h5>Social Gram</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link onClick={() => navigate('/chat/initial')}>
              <i className='fa fa-commenting' aria-hidden='true'></i>
            </Nav.Link>

            <Nav.Link onClick={() => setShowSearch((pre) => !pre)}>
              <i className='fa fa-search'></i>
            </Nav.Link>

            <Nav.Link onClick={handleShow}>
              <div className='btn-icon'>
                <i className='fa-solid fa-square-plus'></i>
              </div>
            </Nav.Link>

            <NavDropdown
              title={
                <div className='profile-pic'>
                  <img src={AllImages.men} alt='profile-pic' />
                </div>
              }
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item
                onClick={() => {
                  logoutUser()
                }}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            {show && (
              <div>
                <ModalWrapper
                  visible={show}
                  onClose={handleClose}
                  title='Create Post'
                  footer={
                    <>
                      <Button variant='danger' onClick={handleClose}>
                        Discard
                      </Button>
                      <Button variant='success' onClick={createPost}>
                        Post
                      </Button>
                    </>
                  }
                >
                  <TextInput
                    as={'textarea'}
                    rows={3}
                    label='Whats in your mind'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />

                  <ImageUploader onImageChange={onImageChange} images={images} />
                </ModalWrapper>
              </div>
            )}

            {showSearch && (
              <div>
                <ModalWrapper
                  visible={showSearch}
                  onClose={() => setShowSearch((pre) => !pre)}
                  title='Search user'
                  footer={
                    <>
                      <Button variant='secondary' onClick={() => setShowSearch((pre) => !pre)}>
                        Close
                      </Button>
                    </>
                  }
                >
                  <TextInput
                    label='Search user'
                    onChange={(e) => setSearchProfileValue(e.target.value)}
                  />
                  <ul className='search-users-list'>
                    {(serachedUsers || []).map((el) => {
                      return (
                        <li key={el._id} className='search-users-list-li'>
                          {el.username || '-- -- --'}{' '}
                          <Button
                            variant='secondary'
                            disabled={
                              isSendingFriendRequestLoading ||
                              el.found ||
                              el.requested ||
                              el.friends
                            }
                            onClick={() => {
                              dispatch(sendFriendRequest(el._id))
                            }}
                          >
                            Add +
                          </Button>
                        </li>
                      )
                    })}
                  </ul>
                </ModalWrapper>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
