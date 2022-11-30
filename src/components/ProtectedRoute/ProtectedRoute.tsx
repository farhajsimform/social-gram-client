import { useAppSelector } from 'hooks'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export interface ProtectedRouteProps {
  redirectPath?: string
  children?: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = '/auth/login',
  children,
}): any => {
  const loggedInUserDetails = useAppSelector((state) => state.common?.loggedInUserData)
  const isAllowed = loggedInUserDetails?.accessToken ? true : false
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}
