import React ,{useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage  from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetails from './features/product-list/components/productDetails';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Protected from './features/auth/components/Protected';
import { fetchAllProductByIdAsync } from './features/product-list/productSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import PageNotFound from './pages/PageNotFound';
import Start from './pages/Start';
import OrderSuccessPage from './pages/OrderSuccessPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home/></Protected> 
  },
  {
    path: "/home",
    element: <Start></Start>
  },
  {
    path: "/login",
    element:(<LoginPage/>),
  },
  {
    path: "/signup",
    element:(<SignupPage/>),
  },
  {
    path: "/cart",
    element: <Protected><CartPage/></Protected>
  },
  {
    path: "/checkout",
    element: <Protected><Checkout/></Protected> 
  },
  {
    path: "/product-detail/:id",
    element:<Protected><ProductDetailsPage/></Protected>
  },
  {
    path: "/order-success/:id",
    element:<OrderSuccessPage></OrderSuccessPage>
  },
  {
    path: "*",
    element:<PageNotFound></PageNotFound>
  },
]);


function App() {

  const dispatch = useDispatch();
  const user =useSelector(selectLoggedInUser)

  useEffect(() => {
    if(user){
      dispatch(fetchAllProductByIdAsync(user.id))
    }
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
