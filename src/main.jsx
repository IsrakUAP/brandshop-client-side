import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import ShowCars from './Components/ShowCars/ShowCars';
import ProductDetails from './Components/CardDetails/ProductDetails';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Register from './Pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './Components/PrivateRoute.jsx/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/addProduct",
        element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute> ,
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("https://b8a10-brandshop-server-side-gho11qwql.vercel.app/product")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Register></Register>
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-gho11qwql.vercel.app/car/${params.id}`)
      },
      {
        path: "/showCars/:brandName",
        element: <ShowCars></ShowCars>,
        loader: () => fetch("https://b8a10-brandshop-server-side-gho11qwql.vercel.app/car")
      },
      {
        path: "/productDetails/:_id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch("https://b8a10-brandshop-server-side-gho11qwql.vercel.app/car")
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
