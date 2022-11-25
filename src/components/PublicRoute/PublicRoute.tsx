import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export interface PublicRouteProps {
  isAllowed?: boolean
  redirectPath?: string
}
export const PublicRoute: React.FC<PublicRouteProps> = ({ isAllowed, redirectPath = '/' }): any => {
  if (isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}
