import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import AuthProvider from './pages/providers/AuthProvider/AuthProvider.jsx';
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
      },
      {
        path: 'sign-up',
        element:<SignUp></SignUp>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </div>
)
