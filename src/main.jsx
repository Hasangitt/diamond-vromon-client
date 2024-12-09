import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Pages/Home.jsx';
import AuthProvider from './components/Auth/AuthProvider.jsx';
import AllSpots from './components/Pages/AllSpots.jsx';
import AddSpot from './components/Pages/AddSpot.jsx';
import MySpot from './components/Pages/MySpot.jsx';
import SpotDetails from './components/Pages/SpotDetails.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Error from './components/Pages/Error.jsx';
import PrivateRoute from './components/Auth/PrivateRoute.jsx';
import UpdateSpot from './components/Pages/UpdateSpot.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allSpot",
        element: <AllSpots></AllSpots>,
        loader: () => fetch('https://diamond-vromon-server.vercel.app/spots')
      },
      {
        path: "/spot-details/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: () => fetch ('https://diamond-vromon-server.vercel.app/spots')
      },
      {
        path: "/add-spot",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: "/my-spot-list/:email",
        element: <PrivateRoute><MySpot></MySpot></PrivateRoute>,
        loader: ({params}) => fetch (`https://diamond-vromon-server.vercel.app/spots/${params.email}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "update/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch (`https://diamond-vromon-server.vercel.app/spots/${params.id}`)
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
