import React, { FC } from 'react'
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
          <div className='upload__image-wrapper'>
            <button
              style={isDragging ? { color: 'red' } : {}}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className='image-item'>
                <img src={image.data_url} alt='' width='100' />
                <div className='image-item__btn-wrapper'>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default ImageUploader
