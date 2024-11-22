import React from 'react'
import ReactDOM from 'react-dom/client' 
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'
import Show from './Components/Show'
import App from './App'
import Header from './Components/Header'
import Sweat from './Pages/Sweat'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
)
