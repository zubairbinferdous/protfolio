/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/about',
    element:<About></About>
  },
  {
    path:'/home',
    element:<Home></Home>
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
