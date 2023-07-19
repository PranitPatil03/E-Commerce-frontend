import React from 'react';
import './App.css';
import ProductList  from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage  from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
    {/*
      <Home/>
      <LoginPage/>
    */}
    <SignupPage/>
    </div>
  );
}

export default App;
