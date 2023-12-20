import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './pages/Provider/AuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider><RouterProvider router={router}></RouterProvider></Authprovider>
</React.StrictMode>,
)
