import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute } from 'config/routes'
import { PublicRoute } from 'components/PublicRoute/PublicRoute'

interface AuthRoutesProps {
  isAllowed: boolean
}

export const AuthRoutes = (props: AuthRoutesProps): JSX.Element => {
  return (
    <Route path='/auth' element={<PublicRoute isAllowed={props.isAllowed} />}>
      {Object.keys(AuthRoute).map((key) => {
        const { component: Component, index, path, id } = AuthRoute[key]
        return <Route path={path} index={index} key={id} element={<Component />} />
      })}
    </Route>
  )
}
