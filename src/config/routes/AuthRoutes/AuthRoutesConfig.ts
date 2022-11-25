import { IRoutesConfig } from 'config/routes'
/**
 * @description the aim to create this config is to have
 *  a single source of truth for the routes definition.
 *  the reason we are not importing the components here
 *  for the property `component` is to avoid circular
 *  import dependencies error.
 *  components will be assigned in config/routes.ts
 */
export const AuthRoutes: IRoutesConfig = {
  login: {
    id: 'login',
    name: 'Login',
    description: 'Login',
    path: 'login',
    path_string: () => {
      return `/auth/login`
    },
    index: false,
    isPrivate: false,
    component: undefined,
  },
  register: {
    id: 'register',
    name: 'Register',
    description: 'Register',
    path: 'register',
    path_string: () => {
      return `/auth/register`
    },
    index: false,
    isPrivate: false,
    component: undefined,
  },
}
