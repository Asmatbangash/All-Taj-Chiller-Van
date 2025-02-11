import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import AboutUs from './component/AboutUs/AboutUs.jsx'
import ContectUs from './component/Home/Dev5/ContectUs.jsx'
import ChillerVan from './component/Services/ChillerVan/ChillerVan.jsx'
import ChillerTruck from './component/Services/ChillerTruck/ChillerTruck.jsx'
import FreezerVan from './component/Services/FreezerVan/FreezerVan.jsx'
import FreezerTruck from './component/Services/FreezerTruck/FreezerTruck.jsx'
import HighRoofVan from './component/Services/High Roof Van/HighRoofVan.jsx'
import RefrigiratedTruck from './component/Services/RefrigiratedTruck/RefrigiratedTruck.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children:[
      {
        path:'/', element: <Home />
      }, 
      {
        path:'/about-us', element : <AboutUs />
      },
      {
        path:'/contact-us', element: <ContectUs />
      },
      {
        path: '/services/chiller-van', element: <ChillerVan />
      },
      {
        path: '/services/chiller-truck', element: <ChillerTruck />
      },
      {
        path: '/services/freezer-van', element: <FreezerVan />
      },
      ,
      {
        path: '/services/freezer-truck', element: <FreezerTruck />
      },
      {
        path: '/services/highRoof-van', element: <HighRoofVan />
      },
      {
        path: '/services/refrigirated-truck', element: <RefrigiratedTruck />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
