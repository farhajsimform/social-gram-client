import { useState, FC, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
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
import './head.css'
import { getSearchedSuccess, searchUser, sendFriendRequest } from 'store/actions/user'
const Header: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [images, setImages] = useState<ImageTypeProps>([])
  const [content, setContent] = useState<string>('')
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [searchProfileValue, setSearchProfileValue] = useState<string>('')
  const dispatch = useAppDispatch()
  const {navigate} = useRouter();
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
            {/* <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' /> */}
            <Button variant='outline-default' onClick={() => navigate('/chat/:initial')}>
            <i className='fa fa-commenting' aria-hidden='true'></i>
            </Button>

            
            <Button variant='outline-default' onClick={() => setShowSearch((pre) => !pre)}>
              <i className='fa fa-search'></i>
            </Button>

            <Button variant='outline-success' onClick={handleShow}>
              <div className='btn-icon'>
                <i className='fa-solid fa-square-plus'></i>
              </div>
              Create
            </Button>
            <div className='profile-pic'>
              <img src={AllImages.men} alt='profile-pic' />
            </div>
            <div>
              <ModalWrapper
                visible={show}
                onClose={handleClose}
                title='Create Post'
                footer={
                  <>
                    <Button variant='secondary' onClick={handleClose}>
                      Discard
                    </Button>
                    <Button variant='primary' onClick={createPost}>
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
                        <li key={el._id}>
                          {el.fullname || el.email}{' '}
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
