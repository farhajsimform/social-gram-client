import { FC } from 'react'
import { FormControlProps } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

interface ITextInputProps extends FormControlProps {
  error?: string
  label?: string
  rows?: number
  name?: string
}
export const TextInput: FC<ITextInputProps> = ({ label, error, ...props }) => {
  return (
    <Form.Group className='mb-3' controlId='formBasicEmail'>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Form.Control {...props} />
      {error ? <Form.Text className='text-danger'>{error}</Form.Text> : null}
    </Form.Group>
  )
}
