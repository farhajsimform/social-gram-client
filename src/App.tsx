import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import { AuthRoutes } from 'pages/Authentication/AuthRoutes'
const Feed = lazy(() => import('pages/Feed/FeedPage'))
import { ToastContainer } from 'react-toastify'
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute'
const Chat = lazy(() => import('pages/Chat/chat'))
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getLoggedInUser } from 'store/actions/user'

function App() {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.common?.loggedInUserData)
  useEffect(() => {
    token?.accessToken && dispatch(getLoggedInUser())
  }, [token?.accessToken])
  return (
    <div>
      <Suspense fallback={<div>Lodaing...</div>}>
        <Routes>
          <Route path='/'>
            <Route index={true} element={<Navigate to={'/home/feed'} />} />
          </Route>
          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <Layout isHeaderVisible={true} />
              </ProtectedRoute>
            }
          >
            <Route index={true} path='feed' element={<Feed />}></Route>
          </Route>

          <Route
            path='chat'
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          ></Route>

          {AuthRoutes({ isAllowed: false })}
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  )
}

export default App
