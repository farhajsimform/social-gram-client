import { FC } from 'react'
import { FormControlProps } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

interface ITextInputProps extends FormControlProps {
  error?: string
  lable?: string
}
export const TextInput: FC<ITextInputProps> = ({ lable, error, ...props }) => {
  return (
    <Form.Group className='mb-3' controlId='formBasicEmail'>
      {lable ? <Form.Label>{lable}</Form.Label> : null}
      <Form.Control {...props} />
      {error ? <Form.Text className='text-danger'>{error}</Form.Text> : null}
    </Form.Group>
  )
}
