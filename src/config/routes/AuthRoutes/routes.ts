import { lazy } from 'react'
import { IRoutesConfig } from 'config/routes'
import { AuthRoutes as routes_config } from './AuthRoutesConfig'

export const AuthRoute: IRoutesConfig = {
  [routes_config.login.id]: {
    ...routes_config.login,
    component: lazy(() => import('pages/Authentication/Login/Login')),
  },
  [routes_config.register.id]: {
    ...routes_config.register,
    component: lazy(() => import('pages/Authentication/Register/Register')),
  },
}
