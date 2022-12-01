import { Outlet } from 'react-router-dom';
import WebsiteFooter from './Footer';
import WebsiteHeader from './Header';

const WebsiteLayout = () => {
  return (
    <>
         <WebsiteHeader />
        <Outlet />
        <WebsiteFooter />
    </>
  )
}

export default WebsiteLayout