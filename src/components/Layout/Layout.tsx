import { Suspense, FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header/header'
interface IHeaderProps {
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
}

const Layout: FC<IHeaderProps> = ({ isHeaderVisible }) => {
  return (
    <>
      {isHeaderVisible ? <Header /> : null}
      <Suspense fallback={<div>loading</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
export default Layout
