import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Adduser from './Components/AddUser/Adduser.jsx'
import Userdetails from './Components/UserDetails/Userdetails.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/adduser",
    element: <Adduser/>,
  },
  {
    path: "/userdetails",
    element: <Userdetails/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />    
  </StrictMode>
)
