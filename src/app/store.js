import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-list/productSlice';
import authReducer from "../features/auth/authSlice"
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart: cartReducer
  },
});

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/cart?user='+userId) 
    const data = await response.json()
    resolve({data})
  }
  );
}