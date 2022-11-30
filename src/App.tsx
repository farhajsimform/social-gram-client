import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import { AuthRoutes } from 'pages/Authentication/AuthRoutes'
const Feed = lazy(() => import('pages/Feed/FeedPage'))
import { ToastContainer } from 'react-toastify'
import { ProtectedRoute } from 'components/ProtectedRoute/ProtectedRoute'
import 'react-toastify/dist/ReactToastify.css'

function App() {
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
          {AuthRoutes({ isAllowed: false })}
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  )
}

export default App
