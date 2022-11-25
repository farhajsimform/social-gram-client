export interface IRoutesConfig {
  [key: string]: {
    id: string
    name: string
    description?: string
    path: string
    path_string: (params?: any) => string
    index: boolean
    isPrivate: boolean
    component?: any
  }
}
export { AuthRoutes as AuthRoutesConfig } from './AuthRoutes/AuthRoutesConfig'
export * from './AuthRoutes/routes'
