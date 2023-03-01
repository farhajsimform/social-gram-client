import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import ImageUploading, { ImageListType } from 'react-images-uploading'

export type ImageChangeType = (
  imageList: ImageListType,
  addUpdateIndex: Array<number> | undefined,
) => void
export type ImageTypeProps = ImageListType
interface IImageUploadProps {
  onImageChange: ImageChangeType
  images: ImageListType
  maxAllowed?: number
}
const ImageUploader: FC<IImageUploadProps> = ({ onImageChange, images, maxAllowed = 5 }) => {
  return (
    <div className='image-uploader'>
      <ImageUploading
        multiple
        value={images}
        onChange={onImageChange}
        maxNumber={maxAllowed}
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <>
            <div className='upload__image-wrapper'>
              <Button
                style={isDragging ? { color: 'red' } : {}}
                onClick={onImageUpload}
                {...dragProps}
                variant='outline-primary'
              >
                Click or Drop here
              </Button>
              &nbsp;
              <Button onClick={onImageRemoveAll} variant='outline-danger'>
                Remove all images
              </Button>
            </div>
            <div className='image-item-grid'>
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <img src={image.data_url} alt='' />
                  <div className='image-item__btn-wrapper'>
                    <Button onClick={() => onImageUpdate(index)} variant='outline-success'>
                      Update
                    </Button>
                    <Button onClick={() => onImageRemove(index)} variant='outline-secondary'>
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </ImageUploading>
    </div>
  )
}

export default ImageUploader
