import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
  </div>
)
