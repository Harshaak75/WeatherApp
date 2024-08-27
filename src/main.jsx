import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Importing the components for routing

import App from './App.jsx'
import Test from './Components/TestPurpose/Test.jsx'
import Layout from '../Layout.jsx'
import Welcome from './Components/WelcomePage/Welcome.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>  
  
      <Route path="" element={<App/>} />

      {/* now here you will add the many routes */}

      <Route path="/weather" element={<Test />} />
      
      {/* Another nested route */}
      <Route path="weather/:id" element={<Test />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
