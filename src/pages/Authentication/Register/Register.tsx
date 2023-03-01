import React, { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { PasswordRegex, EmailRegex, APIEndpoints, HttpStatusCode } from 'constant'
import './RegisterPage.css'
import { POST } from 'services/HttpsService'
import { notifyToast } from 'utils'
import { useRouter } from 'hooks'
import { AuthRoutesConfig } from 'config/routes'

interface IRegisterFormInputs {
  name: string
  email: string
  password: string
  cnfpassword: string
}

const Register: FC = () => {
  const { navigate } = useRouter()
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<IRegisterFormInputs>({ defaultValues: {} })
  const onSubmit: SubmitHandler<IRegisterFormInputs> = async (data: IRegisterFormInputs) => {
    try {
      const payload = {
        email: data?.email,
        pwd: data?.password,
        username: data?.name,
      }
      const response = await POST({ subUrl: APIEndpoints.authentication.register, data: payload })
      if (response.status === HttpStatusCode.Created) {
        notifyToast({
          message: 'Regsitered successfully',
          type: 'success',
        })
        navigate(AuthRoutesConfig.login.path_string())
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
        <h2>Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='name'
            control={control}
            rules={{
              required: 'Name should be required',
              maxLength: { value: 255, message: 'Only 25 chars allowed in the name' },
            }}
            render={({ field }) => (
              <div className='user-box'>
                <input type='text' {...field} />
                <label>Name</label>
              </div>
            )}
          />

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
          <Controller
            name='cnfpassword'
            control={control}
            rules={{
              validate: (value) => value === watch('password') || 'The passwords do not match',
            }}
            render={({ field }) => (
              <div className='user-box'>
                <input type='password' {...field} />
                <label> Create Password</label>
              </div>
            )}
          />

          <button type='submit' disabled={!isValid}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
