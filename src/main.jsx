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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch("/brand.json"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: ()=> fetch("http://localhost:5000/product")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/showCars/:brandName",
        element: <ShowCars></ShowCars>,
        loader: ()=> fetch("http://localhost:5000/car")
      },
      {
        path: "/productDetails/:_id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch("http://localhost:5000/car")
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
