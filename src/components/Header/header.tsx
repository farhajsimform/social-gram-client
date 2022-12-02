import { useState, FC } from 'react'
import { Navbar, Nav, Button, FormControl } from 'react-bootstrap'
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
import './head.css'

const Header: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [images, setImages] = useState<ImageTypeProps>([])
  const [content, setContent] = useState<string>('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onImageChange: ImageChangeType = (imageList) => {
    setImages(imageList)
  }

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
            <FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' />

            <Button variant='outline-success' onClick={handleShow}>
              <div className='btn-icon'>
                <i className='fa-solid fa-square-plus'></i>
              </div>
              Create
            </Button>
            <div className='profile-pic'>{/* <img src={Profile} alt="" /> */}</div>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
