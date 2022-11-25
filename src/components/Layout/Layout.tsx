import { Suspense, FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header/header'
import RightSideBar from 'components/RightSideBar/RightSideBar'
import LeftSideBar from 'components/LeftSideBar/LeftSideBar'
interface ILayoutProps {
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
}

const Layout: FC<ILayoutProps> = ({ isHeaderVisible }) => {
  return (
    <>
      {isHeaderVisible ? <Header /> : null}
      <div className='feed-layout'>
        <LeftSideBar />
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
        <RightSideBar />
      </div>
    </>
  )
}
export default Layout
