import { useAppSelector } from 'hooks'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export interface PublicRouteProps {
  isAllowed?: boolean
  redirectPath?: string
}
export const PublicRoute: React.FC<PublicRouteProps> = ({ redirectPath = '/' }): any => {
  const loggedInUserDetails = useAppSelector((state) => state.common?.loggedInUserData)
  const isAllowed = loggedInUserDetails?.accessToken ? true : false
  if (isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
