import React from 'react';
import './App.css';
import ProductList  from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage  from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
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
    element:(<CartPage/>),
  },
  {
    path: "/checkout",
    element:(<Checkout/>),
  },
]);


function App() {
  return (
    <div className="App">
    {/*
      <Home/>
      <LoginPage/>
      <SignupPage/>
    */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
