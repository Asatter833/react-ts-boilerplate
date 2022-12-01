import { Suspense } from 'react'

// 3rd Party Modules
import {BrowserRouter , Routes , Route} from 'react-router-dom'

// Routes
import { publicRoutes } from './publicRoutes'
import { privateRoutes } from './privateRoutes'

// Layouts
import WebsiteLayout from '@layouts/Website'
import AppLayout from '@layouts/App'


const BaseRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<WebsiteLayout />}>
        {publicRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Suspense fallback={<>Loading..</>}><Component /></Suspense>}/>
        ))}
      </Route>
      <Route path={'app'} element={<AppLayout />}>
        {privateRoutes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Suspense fallback={<>Loading..</>}><Component /></Suspense>}/>
        ))}
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default BaseRoutes