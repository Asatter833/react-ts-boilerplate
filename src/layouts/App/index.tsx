import { Outlet } from 'react-router-dom';
import AppFooter from './Footer';
import AppHeader from './Header';

const AppLayout = () => {
  return (
    <>
    <AppHeader />
    <Outlet />
    <AppFooter />
    </>
  )
}

export default AppLayout