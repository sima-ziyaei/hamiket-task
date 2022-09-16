import { configureStore } from "@reduxjs/toolkit";
import product from './slices/productSlice';
import user from './slices/userSlice'

export const store=configureStore({
reducer:{
product,
user
}
})

