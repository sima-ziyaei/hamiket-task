import { configureStore } from "@reduxjs/toolkit";
import product from './slices/productSlice';

export const store=configureStore({
reducer:{
product,

}
})

