import { APIEndpoints, EmailRegex, HttpStatusCode, PasswordRegex } from 'constant'
import { useAppDispatch, useRouter } from 'hooks'
import React, { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { POST } from 'services/HttpsService'
import { SetLoggedInUserDetails } from 'store/actions/common'
import { notifyToast } from 'utils'
import './LoginPage.css'

interface ILoginFormInput {
  email: string
  password: string
}

const Login: FC = () => {
  const { navigate } = useRouter()
  const dispatch = useAppDispatch()
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ILoginFormInput>({ defaultValues: {} })
  const onSubmit: SubmitHandler<ILoginFormInput> = async (data: ILoginFormInput) => {
    try {
      const payload = {
        email: data?.email,
        pwd: data?.password,
      }
      const response = await POST({ subUrl: APIEndpoints.authentication.login, data: payload })
      console.log(response.data)
      if (response.status === HttpStatusCode.Ok) {
        dispatch(SetLoggedInUserDetails(response.data))
        notifyToast({
          message: 'Login successfully',
          type: 'success',
        })
        navigate('/feed')
      }
    } catch (error) {
      notifyToast({
        message: 'Unknown error',
        type: 'error',
      })
    }
  }
  return (
    <div className='login'>
      <div className='login-box'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Email should be required',
              pattern: {
                value: EmailRegex,
                message: 'Invalid email',
              },
            }}
            render={({ field }) => (
              <div className='user-box'>
                <input type='text' {...field} />
                <label>Email</label>
              </div>
            )}
          />

          <Controller
            name='password'
            control={control}
            rules={{
              required: 'You must specify a password',
              pattern: {
                value: PasswordRegex,
                message: 'Password doesnt meet minimul requirments',
              },
            }}
            render={({ field }) => (
              <div className='user-box'>
                <input type='password' {...field} />
                <label> Repeat Password</label>
              </div>
            )}
          />
          <button type='submit' disabled={!isValid}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
