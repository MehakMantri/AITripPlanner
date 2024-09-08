import React from 'react'
import ReactDOM from 'react-som/client' 
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import {
  Header,
  Toaster,
} from "@/components/ui/dialog"

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
])
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
)
