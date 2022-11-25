import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import { AuthRoutes } from 'pages/Authentication/AuthRoutes'

const Feed = lazy(() => import('pages/Feed/FeedPage'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Lodaing...</div>}>
        <Routes>
          <Route path='/' element={<Layout isHeaderVisible={true} />}>
            <Route path='feed' element={<Feed />}></Route>
          </Route>
          {AuthRoutes({ isAllowed: false })}
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
