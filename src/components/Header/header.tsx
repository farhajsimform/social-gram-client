import { useState, FC } from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import ImageUploader, {
  ImageChangeType,
  ImageTypeProps,
} from 'components/ImageUploader/ImageUpoader'
import { Logo } from 'icons'
import { ModalWrapper } from 'components/Modal/Modal'
import './head.css'

const Header: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [images, setImages] = useState<ImageTypeProps>([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const onImageChange: ImageChangeType = (imageList, addUpdateIndex) => {
    setImages(imageList)
    console.log(addUpdateIndex)
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
                    <Button variant='primary' onClick={handleClose}>
                      Post
                    </Button>
                  </>
                }
              >
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Whats in your mind</Form.Label>
                  <Form.Control as='textarea' rows={3} />
                </Form.Group>
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
